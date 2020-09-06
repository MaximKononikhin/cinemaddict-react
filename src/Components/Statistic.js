import React, { useRef, useEffect } from 'react';

import Header from './Header';
import { getRating, getMostPopularGenre, getHours, getMinRemainder, renderChart } from '../utils';

const Statistic = ({movies}) => {
  const watchedMovies = movies.filter(movie => movie.user_details.already_watched);
  const watchedMoviesTotalDuration = watchedMovies.reduce((sum, current) => {
    return sum + current.film_info.runtime;
  }, 0);

  const canvasRef = useRef(null);

  useEffect(() => {
    renderChart(canvasRef.current, watchedMovies)
  });

  return (
    <>
      <Header moviesLength={watchedMovies.length}/>
      <section className="statistic">
      <p className="statistic__rank">
        Your rank
        <img className="statistic__img" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35"/>
        <span className="statistic__rank-label">{getRating(watchedMovies.length)}</span>
      </p>

      <ul className="statistic__text-list">
        <li className="statistic__text-item">
          <h4 className="statistic__item-title">You watched</h4>
          <p className="statistic__item-text">{watchedMovies.length} <span className="statistic__item-description">movies</span></p>
        </li>
        <li className="statistic__text-item">
          <h4 className="statistic__item-title">Total duration</h4>
          <p className="statistic__item-text">
            {getHours(watchedMoviesTotalDuration)} <span className="statistic__item-description">h</span> 
            {getMinRemainder(watchedMoviesTotalDuration)} <span className="statistic__item-description">m</span>
          </p>
        </li>
        <li className="statistic__text-item">
          <h4 className="statistic__item-title">Top genre</h4>
          <p className="statistic__item-text">{getMostPopularGenre(watchedMovies)}</p>
        </li>
      </ul>

      <div className="statistic__chart-wrap">
        <canvas ref={canvasRef} className="statistic__chart" width="1000"></canvas>
      </div>

    </section>
  </>
  )
};

export default Statistic;