import React from 'react';
import MovieCard from './Movie-card';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const MainMovieList = () => {
  return (
    <section className="films-list">
      <h2 className="films-list__title visually-hidden">All movies. Upcoming</h2>
      <div className="films-list__container">
        {arr.map((movie) => <MovieCard key={`id${movie}`}/>)}
      </div>
      <button className="films-list__show-more">Show more</button>
    </section>
  )
};

export default MainMovieList;