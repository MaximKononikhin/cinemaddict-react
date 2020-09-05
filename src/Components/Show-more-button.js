import React from 'react';
import { useDispatch} from 'react-redux';

import { showMoreMovies } from '../Store/actions';

const ShowMoreBtn = () => {
  const dispatch = useDispatch();

  return (
    <button className="films-list__show-more" onClick={() => {
      dispatch(showMoreMovies());
    }}>Show more</button>
  )
}

export default ShowMoreBtn;