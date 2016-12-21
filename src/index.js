'use strict';
const React = require('react');
const Preview = require('./Preview');
const { fetchFilms } = require('./api');
const icon = require('./icon.png');
const keyword = 'imdb';

const fn = ({term, display, actions}) => {
  let match = term.match(/(?:films?|imdb)\s+(.+)/);
  match = match || term.match(/(.+)\s+(?:films?|imdb)/);
  if (match) {
    const q = match[1];
    fetchFilms(q).then(items => {
      if (!items) {
        return;
      }
      const results = items.map(item => ({
        icon,
        id: item.imdbID,
        title: `${item.Title} (${item.Year})`,
        clipboard: `http://www.imdb.com/title/${item.imdbID}/`,
        onSelect: () => actions.open(`http://www.imdb.com/title/${item.imdbID}/`),
        getPreview: () => <Preview key={item.imdbID} id={item.imdbID} />
      }))
      display(results)
    })
  }
};

module.exports = {
  name: 'Search on imdb.com...',
  fn, icon, keyword,
}
