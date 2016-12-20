const React = require('react');
const styles = require('./styles.css');

module.exports = ({
  Title, Year, Poster, Plot, Director,
  Writer, Rated, Runtime, Genre, Released,
  Actors, imdbRating, imdbVotes
}) => (
  <div className={styles.imdbPreview}>
    <div className={styles.imdbHeader}>
      <div className={styles.imdbTitle}>
        <span>{Title}</span>
        <span className={styles.imdbYear}>({Year})</span>
      </div>
      <div className={styles.imdbRating}>
        <strong className={styles.imdbRatingNumber} title={`${imdbRating} based on ${imdbVotes} user ratings`}>{imdbRating}</strong>/10
        <div>{imdbVotes}</div>
      </div>
    </div>
    <div className={styles.imdbMeta}>
      { Rated && <span>{Rated}</span> }
      { Runtime && <span>{Runtime}</span> }
      { Genre && <span>{Genre}</span> }
      { Released && <span>{Released}</span> }
    </div>
    <div className={styles.imdbMain}>
      { Poster && <img src={Poster} className={styles.imdbPoster} /> }
      <p>{Plot}</p>
    </div>
    <dl className={styles.imdbDetails}>
      <dt>Directors:</dt>
      <dd>{Director}</dd>
      <dt>Writers:</dt>
      <dd>{Writer}</dd>
      <dt>Stars:</dt>
      <dd>{Actors}</dd>
    </dl>
  </div>
)
