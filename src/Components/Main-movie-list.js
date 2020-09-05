import React from 'react';
import MovieCard from './Movie-card';
import { useSelector } from 'react-redux';
import ShowMoreBtn from './Show-more-button';
import {filterMovies, sortMovies} from '../utils';

const MainMovieList = (props) => {
  const {movies} = props;

  const movieCount = useSelector(state => state.shownMoviesCount);
  const activeFilter = useSelector(state => state.activeFilter);
  const activeSortType = useSelector(state => state.activeSortingType);

  return (
    <section className="films-list">
      <h2 className="films-list__title visually-hidden">All movies. Upcoming</h2>
      <div className="films-list__container">
        {movies.filter(movie => filterMovies(movie, activeFilter))
        .sort((a, b) => sortMovies(a, b, activeSortType))
        .slice(0, movieCount).map((movie) => <MovieCard movie={movie} key={`id${movie.id}`}/>)}
      </div>
      {movies.length >= movieCount? <ShowMoreBtn/> : null}
    </section>
  )
};

export default MainMovieList;