import React from 'react';

const MovieCard = () => {
  return (
    <article className="film-card">
      <h3 className="film-card__title">The Dance of Life</h3>
      <p className="film-card__rating">8.3</p>
      <p className="film-card__info">
        <span className="film-card__year">1929</span>
        <span className="film-card__duration">1h 55m</span>
        <span className="film-card__genre">Musical</span>
      </p>
      <img src="./images/posters/the-dance-of-life.jpg" alt="" className="film-card__poster"/>
      <p className="film-card__description">Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…</p>
      <a href="/#" className="film-card__comments">5 comments</a>
      <form className="film-card__controls">
        <button className="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
        <button className="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
        <button className="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
      </form>
    </article>
  )
}

export default MovieCard;