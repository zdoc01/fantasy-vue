const Router = require('express').Router;
const stats = require('./stats');
const crypto = require('./crypto');

const routes = function() {
  const router = new Router();

  router.use('/stats', stats());

  router.use('/crypto', crypto());

  router.use('*', function(req, res) {
    res.status(404).send('Not found.');
  });

  return router;
};

module.exports = routes;
