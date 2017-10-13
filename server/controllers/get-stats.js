const rp = require('request-promise');
const config = require('../config');

const getStats = function() {
  const options = {
    headers: {
      host: config.api.remote.host,
      referer: config.api.remote.referer
    },
    uri: config.api.remote.statsURI,
    qs: {
      league: config.api.remote.league
    }
  };

  return rp(options);
};

module.exports = getStats;
