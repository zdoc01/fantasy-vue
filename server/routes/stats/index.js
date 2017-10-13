const Router = require('express').Router;
const json2csv = require('json2csv');
const getStats = require('../../controllers/get-stats');
const getStatsByWeek = require('../../controllers/get-stats-by-week');
const parseStats = require('./utils/parse-stats');
const fields = require('./utils/fields');

const stats = function() {
  const router = new Router();

  /**
   * @route /api/stats
   *
   * All stats for current season.
   * @param  {[type]} req [description]
   * @param  {[type]} res [description]
   * @return {[type]}     [description]
   */
  router.get('/', function(req, res) {
    const type = req.query.type;

    console.log(`Fetching total season stats`);

    getStats()
      .then(parseStats)
      .then(function(stats) {
        if (type === 'csv') {
          stats = json2csv({ data: stats, fields: fields });
          res.set('Content-Type', 'text/csv');
        }
        res.send(stats);
      })
      .catch(function(err) {
        res.status(500).send('An error occurred: ' + err);
      });
  });

  /**
   * @route /api/stats/week/:weekID
   *
   * Weekly stats.
   * @param  {[type]} req [description]
   * @param  {[type]} res [description]
   * @return {[type]}     [description]
   */
  router.get('/week/:weekID', function(req, res) {
    const week = parseInt(req.params.weekID, 10);
    const type = req.query.type;

    console.log(`Fetching stats for week ${week}`);

    if (week > 0) {
      getStatsByWeek(week)
        .then(parseStats)
        .then(function(stats) {
          if (type === 'csv') {
            stats = json2csv({ data: stats, fields: fields });
            res.set('Content-Type', 'text/csv');
          }
          res.send(stats);
        })
        .catch(function(err) {
          res.status(500).send('An error occurred: ' + err);
        });
    } else {
      res.status(400).send('Invalid week.');
    }
  });

  return router;
};

module.exports = stats;
