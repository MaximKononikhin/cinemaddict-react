import React from 'react';
import MovieCard from './Movie-card';


const ExtraList = (props) => {
  const {title, movies} = props;

  if (!movies) {
    return null;
  }

  return (
    <section className="films-list--extra">
      <h2 className="films-list__title">{title}</h2>
      <div className="films-list__container">
        {movies.map((movie) => <MovieCard movie={movie} key={`id${movie.id}`}/>)}
      </div>
    </section>
  )
}

export default ExtraList;