import React from 'react';

const MainNavigation = ({movies}) => {
  return (
    <nav className="main-navigation">
      <div className="main-navigation__items">
        <a href="#all" className="main-navigation__item main-navigation__item--active">All movies</a>
        <a href="#watchlist" className="main-navigation__item">Watchlist <span className="main-navigation__item-count">{movies.filter(movie => movie.user_details.watchlist).length}</span></a>
        <a href="#history" className="main-navigation__item">History <span className="main-navigation__item-count">{movies.filter(movie => movie.user_details.already_watched).length}</span></a>
        <a href="#favorites" className="main-navigation__item">Favorites <span className="main-navigation__item-count">{movies.filter(movie => movie.user_details.favorite).length}</span></a>
      </div>
      <a href="#stats" className="main-navigation__additional">Stats</a>
    </nav>
  )
};

export default MainNavigation;