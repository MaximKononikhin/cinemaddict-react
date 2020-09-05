import React, { useEffect } from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getDuration } from '../utils';
import Comment from './Comment';
import { loadComments, updateMovie } from '../Store/actions';
import NewComment from './New-comment';

const MovieDetails = (props) => {
  const {movie} = props;
  
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments);
  
  useEffect(() => {
    if (movie) {
      dispatch(loadComments(movie.id))
    }
  }, [dispatch, movie]);

  if (!movie) {
    return null;
  }

  return (
    <section className="film-details">
      <form className="film-details__inner">
        <div className="htmlForm-details__top-container">
          <div className="film-details__close">
            <Link to='/' className="film-details__close-btn" type="button"></Link>
          </div>
          <div className="film-details__info-wrap">
            <div className="film-details__poster">
              <img className="film-details__poster-img" src={`/${movie.film_info.poster}`} alt="" />

              <p className="film-details__age">{movie.film_info.age_rating}+</p>
            </div>

            <div className="film-details__info">
              <div className="film-details__info-head">
                <div className="film-details__title-wrap">
                  <h3 className="film-details__title">{movie.film_info.title}</h3>
                  <p className="film-details__title-original">Original: {movie.film_info.alternative_title}</p>
                </div>

                <div className="film-details__rating">
                  <p className="film-details__total-rating">{movie.film_info.total_rating}</p>
                </div>
              </div>

              <table className="film-details__table">
                <tbody>
                <tr className="film-details__row">
                  <td className="film-details__term">Director</td>
                  <td className="film-details__cell">{movie.film_info.director}</td>
                </tr>
                <tr className="film-details__row">
                  <td className="film-details__term">Writers</td>
                  <td className="film-details__cell">{movie.film_info.writers.join(`, `)}</td>
                </tr>
                <tr className="film-details__row">
                  <td className="film-details__term">Actors</td>
                  <td className="film-details__cell">{movie.film_info.actors.join(`, `)}</td>
                </tr>
                <tr className="film-details__row">
                  <td className="film-details__term">Release Date</td>
                  <td className="film-details__cell">{moment(movie.film_info.release.date).format('D MMMM YYYY')}</td>
                </tr>
                <tr className="film-details__row">
                  <td className="film-details__term">Runtime</td>
                  <td className="film-details__cell">{getDuration(movie.film_info.runtime)}</td>
                </tr>
                <tr className="film-details__row">
                  <td className="film-details__term">Country</td>
                  <td className="film-details__cell">{movie.film_info.release.release_country}</td>
                </tr>
                <tr className="film-details__row">
                  <td className="film-details__term">Genres</td>
                  <td className="film-details__cell">
                    {movie.film_info.genre.map((genre) => <span key={`id${genre}`} className="film-details__genre">{genre}</span>)}
                  </td>
                </tr>
                </tbody>
              </table>

              <p className="film-details__film-description">
                {movie.film_info.description}
              </p>
            </div>
          </div>

          <section className="film-details__controls">
            <input type="checkbox" className="film-details__control-input visually-hidden" id="watchlist" name="watchlist" defaultChecked={movie.user_details.watchlist} onClick={() => {
              const newMovie = {
                ...movie,
                user_details: {
                  ...movie.user_details,
                  watchlist: !movie.user_details.watchlist
                }
              }
              dispatch(updateMovie(newMovie));
            }}/>
            <label htmlFor="watchlist" className={`film-details__control-label film-details__control-label--watchlist`}>
              Add to watchlist
            </label>

            <input type="checkbox" className="film-details__control-input visually-hidden" id="watched" name="watched" defaultChecked={movie.user_details.already_watched} onClick={() => {
              const newMovie = {
                ...movie,
                user_details: {
                  ...movie.user_details,
                  already_watched: !movie.user_details.already_watched
                }
              }
              dispatch(updateMovie(newMovie));
            }}/>
            <label htmlFor="watched" className={`film-details__control-label film-details__control-label--watched`}>
              Already watched
            </label>

            <input type="checkbox" className="film-details__control-input visually-hidden" id="favorite" name="favorite" defaultChecked={movie.user_details.favorite} onClick={() => {
              const newMovie = {
                ...movie,
                user_details: {
                  ...movie.user_details,
                  favorite: !movie.user_details.favorite
                }
              }
              dispatch(updateMovie(newMovie))
            }}/>
            <label htmlFor="favorite" className={`film-details__control-label film-details__control-label--favorite`}>
              Add to favorites
            </label>
          </section>
        </div>

        <div className="htmlForm-details__bottom-container">
          <section className="film-details__comments-wrap">
            <h3 className="film-details__comments-title">Comments <span className="film-details__comments-count">{movie.comments.length}</span></h3>

            <ul className="film-details__comments-list">
              {comments.map((comment, index) => <Comment comment={comment} key={`id${comment.id}`}/>)}
            </ul>

            <NewComment movieId={movie.id}/>

          </section>
        </div>
      </form>
    </section >
  )
}

export default MovieDetails;