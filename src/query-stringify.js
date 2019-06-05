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

export default function (options = {}) {
  const { basePath, query, url, ignore } = options

  if (url) return url // for next page url or preview page url
  if (!query) return basePath
  if (!query.limit) query.limit = 25
  if (!query.skip) query.skip = 0

  const queryString = Object.keys(query)
    .filter(key => !ignore || !ignore.includes(key))
    .filter(key => {
      return Array.isArray(query[key])
        ? query[key].length
        : !!query[key] || Number.isInteger(query[key])
    })
    .map(key => {
      return Array.isArray(query[key])
        ? `${key}=${query[key].join()}`
        : `${key}=${query[key]}`
    })
    .join('&')

  return `${basePath}?${queryString}`
}
