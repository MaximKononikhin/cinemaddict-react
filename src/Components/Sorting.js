import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortMoviesAction } from '../Store/actions';

const Sorting = () => {

  const dispatch = useDispatch();
  const activeSortType = useSelector(state => state.activeSortingType);

  return (
    <ul className="sort">
      <li><a href="/#" className={`sort__button ${activeSortType === `default` && `sort__button--active`}`} onClick={(evt) => {
        evt.preventDefault();
        dispatch(sortMoviesAction());
      }}>Sort by default</a></li>

      <li><a href="/#" className={`sort__button ${activeSortType === `date` && `sort__button--active`}`} onClick={(evt) => {
        evt.preventDefault();
        dispatch(sortMoviesAction(`date`));
      }}>Sort by date</a></li>

      <li><a href="/#" className={`sort__button ${activeSortType === `rating` && `sort__button--active`}`} onClick={(evt) => {
        evt.preventDefault();
        dispatch(sortMoviesAction(`rating`));
      }}>Sort by rating</a></li>
    </ul>
  )
};

export default Sorting;