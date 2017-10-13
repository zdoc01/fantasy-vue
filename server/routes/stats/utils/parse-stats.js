const htmlParser = require('htmlparser2');
const fields = require('./fields');
const updateObjectProperty = require('./update-object-property');

/**
 * Parse the stats HTML. Returns a Promise that,
 * when resolved, will return an array of
 * player objects containing properties for each
 * stat.
 *
 * @param  {HTML}  html The HTML to parse.
 * @return {Array}      The parsed player stats.
 */
const parseStats = function(html) {
  const p = new Promise(function(resolve, reject) {
    let players = [];
    let player = {};
    let i = 0;
    let last = (fields.length - 1);

    const onText = function(text) {
      player = updateObjectProperty(fields[i], text, player);

      if (i === last) {
        // last field for player; reset for next
        players.push(Object.assign({}, player));
        i = -1;
      }

      i++;
    };

    const onEnd = function() {
      resolve(players);
    };

    const parserConfig = {
      ontext: onText,
      onend: onEnd
    };

    try {
      const parser = new htmlParser.Parser(parserConfig);
      parser.write(html);
      parser.end();
    } catch (e) {
      console.error('Error parsing stats.', e);
      reject([]);
    }
  });

  return p;
};

module.exports = parseStats;
