import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterMoviesAction } from '../Store/actions';

const MainNavigation = ({movies}) => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(state => state.activeFilter);

  return (
    <nav className="main-navigation">
      <div className="main-navigation__items">
        <a href="#all" className={`main-navigation__item ${activeFilter === `all` && `main-navigation__item--active`}`} onClick={(evt) => {
          evt.preventDefault();
          dispatch(filterMoviesAction());
        }}>All movies</a>

        <a href="#watchlist" className={`main-navigation__item ${activeFilter === `watchlist` && `main-navigation__item--active`}`} onClick={(evt) => {
          evt.preventDefault();
          dispatch(filterMoviesAction(`watchlist`));
        }}>Watchlist <span className="main-navigation__item-count">{movies.filter(movie => movie.user_details.watchlist).length}</span></a>

        <a href="#history" className={`main-navigation__item ${activeFilter === `watched` && `main-navigation__item--active`}`} onClick={(evt) => {
          evt.preventDefault();
          dispatch(filterMoviesAction(`watched`));
        }}>History <span className="main-navigation__item-count">{movies.filter(movie => movie.user_details.already_watched).length}</span></a>

        <a href="#favorites" className={`main-navigation__item ${activeFilter === `favorite` && `main-navigation__item--active`}`} onClick={(evt) => {
          evt.preventDefault();
          dispatch(filterMoviesAction(`favorite`));
        }}>Favorites <span className="main-navigation__item-count">{movies.filter(movie => movie.user_details.favorite).length}</span></a>
      </div>
      <a href="#stats" className="main-navigation__additional">Stats</a>
    </nav>
  )
};

export default MainNavigation;