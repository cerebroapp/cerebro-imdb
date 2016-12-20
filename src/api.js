const { memoize } = require('cerebro-tools');

const BASE_URL = 'http://www.omdbapi.com';

const notEmpty = value => value && value !== 'N/A'

const removeEmptyKeys = (hash) => (
  Object
    .keys(hash)
    .reduce((acc, key) => {
      if (notEmpty(hash[key])) {
        return Object.assign(acc, {[key]: hash[key]})
      }
      return acc;
    }, {})
)

module.exports.getFilm = memoize((id) => (
  fetch(`${BASE_URL}/?r=json&plot=full&i=${id}`)
    .then(response => response.json())
    .then(removeEmptyKeys)
))


module.exports.fetchFilms = memoize((q) => (
  fetch(`${BASE_URL}/?r=json&plot=short&s=${q}`)
    .then(response => response.json())
    .then(json => json.Search)
    .then(json => (json || []).map(removeEmptyKeys))
))
