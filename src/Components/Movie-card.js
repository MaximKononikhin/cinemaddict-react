import React from 'react';
import {Link} from 'react-router-dom';
import { getDuration } from '../utils';
import { useDispatch } from 'react-redux';
import { updateMovie } from '../Store/actions';

const MovieCard = (props) => {
  const {movie} = props;
  const dispatch = useDispatch();

  if (!movie) {
    return null;
  }

  const release = new Date(movie.film_info.release.date);

  return (
    <article className="film-card">
      <h3 className="film-card__title">{movie.film_info.title}</h3>
      <p className="film-card__rating">{movie.film_info.total_rating}</p>
      <p className="film-card__info">
        <span className="film-card__year">{release.getFullYear()}</span>
        <span className="film-card__duration">{getDuration(movie.film_info.runtime)}</span>
        <span className="film-card__genre">{movie.film_info.genre[0]}</span>
      </p>
      <Link to={`/movie/${movie.id}`}>
        <img src={movie.film_info.poster} alt="" className="film-card__poster"/>
      </Link>
      <p className="film-card__description">{movie.film_info.description.length > 140 ? ``.concat(movie.film_info.description.slice(0, 139), `...`) : movie.film_info.description}</p>
      <Link to={`/movie/${movie.id}`} className="film-card__comments">{movie.comments.length} comments</Link>
      <form className="film-card__controls" onClick={(evt) => {
        evt.preventDefault()
      }}>
        <button className={`film-card__controls-item button film-card__controls-item--add-to-watchlist ${movie.user_details.watchlist ? `film-card__controls-item--active` : ``}`} onClick={() => {
          dispatch(updateMovie({
            ...movie,
            user_details: {
              ...movie.user_details,
              watchlist: !movie.user_details.watchlist
            }
          }));
        }}>Add to watchlist</button>
        <button className={`film-card__controls-item button film-card__controls-item--mark-as-watched ${movie.user_details.already_watched ? `film-card__controls-item--active` : ``}`} onClick={() => {
          dispatch(updateMovie({
            ...movie,
            user_details: {
              ...movie.user_details,
              already_watched: !movie.user_details.already_watched
            }
          }));
        }}>Mark as watched</button>
        <button className={`film-card__controls-item button film-card__controls-item--favorite ${movie.user_details.favorite ? `film-card__controls-item--active` : ``}`} onClick={() => {
          dispatch(updateMovie({
            ...movie,
            user_details: {
              ...movie.user_details,
              favorite: !movie.user_details.favorite
            }
          }))
        }}>Mark as favorite</button>
      </form>
    </article>
  )
}

export default MovieCard;