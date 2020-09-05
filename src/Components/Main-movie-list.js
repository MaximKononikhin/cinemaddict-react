import React from 'react';
import MovieCard from './Movie-card';
import { useSelector } from 'react-redux';
import ShowMoreBtn from './Show-more-button';

const MainMovieList = (props) => {
  const {movies} = props;

  const movieCount = useSelector(state => state.shownMoviesCount);
  const activeFilter = useSelector(state => state.activeFilter);

  return (
    <section className="films-list">
      <h2 className="films-list__title visually-hidden">All movies. Upcoming</h2>
      <div className="films-list__container">
        {movies.filter((movie) => {
          switch (activeFilter) {
            case `all`:
              return movie;

            case `watchlist`:
              return movie.user_details.watchlist;
            
            case `watched`:
              return movie.user_details.already_watched;

            case `favorite`:
              return movie.user_details.favorite;
              
            default: return movie;
          }
        }).slice(0, movieCount).map((movie) => <MovieCard movie={movie} key={`id${movie.id}`}/>)}
      </div>
      {movies.length >= movieCount? <ShowMoreBtn/> : null}
    </section>
  )
};

export default MainMovieList;