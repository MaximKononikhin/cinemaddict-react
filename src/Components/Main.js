import React from 'react';

import Header from './Header';
import MainNavigation from './Main-navigation';
import Sorting from './Sorting';
import MainMovieList from './Main-movie-list';
import ExtraList from './Extra-list';
import Footer from './Footer';

const Main = (props) => {

  const {movies} = props;

  return (
    <>
      <Header/>
      <main className="main">
        <MainNavigation movies={movies}/>
        <Sorting/>
        <section className="films">
          <MainMovieList movies={movies}/>
          <ExtraList
            title={`Top rated`}
            movies={[...movies].sort((a, b) => b.film_info.total_rating - a.film_info.total_rating).slice(0, 2)}
          />
          <ExtraList 
            title={`Most commented`} 
            movies={[...movies].sort((a, b) => b.comments.length - a.comments.length).slice(0, 2)}
          />
        </section>
      </main>
      <Footer movies={movies}/>
    </>
    
  )
};

export default Main;