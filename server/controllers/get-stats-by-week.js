const rp = require('request-promise');
const config = require('../config');

const getStatsByWeek = function(week) {
  const options = {
    headers: {
      host: config.api.remote.host,
      referer: config.api.remote.referer
    },
    uri: config.api.remote.weeklyStatsURI,
    qs: {
      interval: (week-1),
      league: config.api.remote.league
    }
  };

  return rp(options);
};

module.exports = getStatsByWeek;
