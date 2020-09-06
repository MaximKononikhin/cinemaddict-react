import { LOAD_MOVIES, LOAD_COMMENTS, SHOW_MORE_MOVIES, UPDATE_MOVIE, FILTER_MOVIES, SORT_MOVIES, SWITCH_LOADER } from "./actionTypes";

export const loadMovies = () => {
  return async(dispatch, getState, api) => {
    const response = await api.get(`/movies`);
    dispatch(loadMoviesAction(response.data));
    dispatch(switchLoaderAction(false));
  }
};

export const loadComments = (id) => {
  return async(dispatch, getState, api) => {
    const response = await api.get(`/comments/${id}`);
    dispatch(loadCommentsAction(response.data));
  }
};

export const updateMovie = (movie) => {
  return async (dispatch, getState, api) => {
    const response = await api.put(`movies/${movie.id}`, movie);
    dispatch(updateMovieAction(response.data));
  }
};

export const addComment = (comment, movieId) => {
  return async (dispatch, getState, api) => {
    const response = await api.post(`/comments/${movieId}`, comment);
    dispatch(updateMovieAction(response.data.movie));
  }
};

export const deleteComment = (commentId) => {
  return async (dispatch, getState, api) => {
    api.delete(`/comments/${commentId}`);
  }
}

export const loadMoviesAction = (movies) => {
  return {
    type: LOAD_MOVIES,
    payload: movies
  }
};

export const loadCommentsAction = (comments) => {
  return {
    type: LOAD_COMMENTS,
    payload: comments
  }
};

export const showMoreMovies = () => {
  return {
    type: SHOW_MORE_MOVIES
  }
};

export const updateMovieAction = (movie) => {
  return {
    type: UPDATE_MOVIE,
    payload: movie
  }
};

export const filterMoviesAction = (filterType = `all`) => {
  return {
    type: FILTER_MOVIES,
    payload: filterType
  }
};


export const sortMoviesAction = (sortingType = `default`) => {
  return {
    type: SORT_MOVIES,
    payload: sortingType
  }
};

export const switchLoaderAction = (flag) => {
  return {
    type: SWITCH_LOADER,
    payload: flag
  }
};