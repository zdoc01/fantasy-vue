const ENV = process.env;

module.exports = {
  api: {
    remote: {
      host: ENV.FV_REMOTE_HOST,
      league: ENV.FV_REMOTE_LEAGUE,
      referer: ENV.FV_REMOTE_REFERER,
      statsURI: ENV.FV_REMOTE_STATS_URI,
      weeklyStatsURI: ENV.FV_REMOTE_WEEKLY_STATS_URI
    }
  }
};
