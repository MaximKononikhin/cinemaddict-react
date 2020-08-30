import React from 'react';
import MovieCard from './Movie-card';

const arr = [1, 2]

const ExtraList = (props) => {
  const {title} = props;

  return (
    <section className="films-list--extra">
      <h2 className="films-list__title">{title}</h2>
      <div className="films-list__container">
        {arr.map((movie) => <MovieCard key={`id${movie}`}/>)}
      </div>
    </section>
  )
}

export default ExtraList;