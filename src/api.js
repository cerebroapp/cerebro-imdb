import { memoize } from 'cerebro-tools'

const BASE_URL = 'http://www.omdbapi.com'
const API_KEY = '9291d196'

const notEmpty = value => value && value !== 'N/A'

const removeEmptyKeys = (hash) => (
  Object
    .keys(hash)
    .reduce((acc, key) => {
      if (notEmpty(hash[key])) {
        return Object.assign(acc, {[key]: hash[key]})
      }
      return acc
    }, {})
)

export const getFilm = memoize((id) => (
  fetch(`${BASE_URL}/?r=json&plot=full&i=${id}&apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(removeEmptyKeys)
))


export const fetchFilms = memoize((q) => (
  fetch(`${BASE_URL}/?r=json&plot=short&s=${q}&apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(json => json.Search)
    .then(json => (json || []).map(removeEmptyKeys))
))
