import { LOAD_MOVIES } from "./actionTypes";

export const loadMovies = () => {
  return async(dispatch, getState, api) => {
    const response = await api.get(`/movies`);
    dispatch(loadMoviesAction(response.data));
  }
};

export const loadMoviesAction = (movies) => {
  return {
    type: LOAD_MOVIES,
    payload: movies
  }
};