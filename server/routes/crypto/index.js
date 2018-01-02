const Router = require('express').Router;
const history = require('yahoo-stocks').history;

const ONE_HOUR = 1000 * 60 * 60;

const removeEmpties = records => {
  let ret = [];
  if (records) {
    records.forEach(record => {
      if (record.open) {
        ret.push(record);
      }
    });
  }
  return ret;
};

const crypto = () => {
  const router = new Router();

  /**
   * @route /api/crypto/rate?symbol={symbol}
   *
   * Fetch the current rate of a given crypto
   * currency.
   *
   * @param  {Object} req [description]
   * @param  {Object} res [description]
   * @return {JSON}       The current rate, as JSON
   */
  router.get('/rate', (req, res) => {
    const symbol = req.query && req.query.symbol;
    if (symbol) {
      const now = +new Date;
      const opts = {
        start: (now - ONE_HOUR),
        end: now
      };

      history(symbol, opts).then(result => {
        if (result) {
          const { previousClose, records } = result;
          const validRecords = removeEmpties(records);
          res.send({
            previousClose,
            latest: validRecords[validRecords.length - 1]
          });
        } else {
          res.status(404).send(`No records found for symbol [ ${symbol} ]`);
        }
      });
    } else {
      res.status(404).send('Missing query parameter [ symbol ]');
    }
  });

  return router;
};

module.exports = crypto;
