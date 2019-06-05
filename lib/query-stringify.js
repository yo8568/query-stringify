"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

/**
 * Generate a url with query parameters
 * @param {object} options
 * @param {string} options.basePath - url
 * @param {object} options.query - parameters, eg query = { limit: 20, accounts: ['123', '456'], breakdown: 'country' }
 * @param {string} options.url - next page url [high priority]
 * @param {array} options.ignore - ignore specfic fields
 *
 * @returns {string} url
 */
function _default() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var basePath = options.basePath,
      query = options.query,
      url = options.url,
      ignore = options.ignore;
  if (url) return url; // for next page url or preview page url

  if (!query) return basePath;
  if (!query.limit) query.limit = 25;
  if (!query.skip) query.skip = 0;
  var queryString = Object.keys(query).filter(function (key) {
    return !ignore || !ignore.includes(key);
  }).filter(function (key) {
    return Array.isArray(query[key]) ? query[key].length : !!query[key] || Number.isInteger(query[key]);
  }).map(function (key) {
    return Array.isArray(query[key]) ? "".concat(key, "=").concat(query[key].join()) : "".concat(key, "=").concat(query[key]);
  }).join('&');
  return "".concat(basePath, "?").concat(queryString);
}