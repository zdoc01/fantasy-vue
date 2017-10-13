/**
 * Update an object's key with the provided
 * value. Attempts to parse the value - falls
 * back to raw if unable to do so.
 *
 * @param  {String} key    The key to update.
 * @param  {String} value  The value to set.
 * @param  {Object} obj    The object to update.
 * @return {Object}        A new, updated object.
 */
const updateObjectProperty = function(key, value, obj) {
  let data = {}, parsed;

  try {
      parsed = JSON.parse(value);
  } catch(e) {
      parsed = value;
  }

  data[key] = parsed;

  return Object.assign({}, obj, data);
};

module.exports = updateObjectProperty;
