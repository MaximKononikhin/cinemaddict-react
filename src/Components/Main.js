import React, { useEffect } from 'react';

import Header from './Header';
import MainNavigation from './Main-navigation';
import Sorting from './Sorting';
import MainMovieList from './Main-movie-list';
import ExtraList from './Extra-list';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { loadMovies } from '../Store/actions';

const Main = () => {
  const movies = useSelector(state => state.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovies())
  }, [dispatch]);

  console.log(movies)

  return (
    <>
      <Header/>
      <main className="main">
        <MainNavigation/>
        <Sorting/>
        <section className="films">
          <MainMovieList/>
          <ExtraList title={`Top rated`}/>
          <ExtraList title={`Most commented`}/>
        </section>
      </main>
      <Footer/>
    </>
    
  )
};

export default Main;