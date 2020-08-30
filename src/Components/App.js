import React from 'react';
import Header from './Header';
import MainNavigation from './Main-navigation';
import Sorting from './Sorting';
import MainMovieList from './Main-movie-list';
import ExtraList from './Extra-list';
import Footer from './Footer';

const App = () => {
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
}

export default App;
