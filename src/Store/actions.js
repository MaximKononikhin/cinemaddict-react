import { LOAD_MOVIES, LOAD_COMMENTS, SHOW_MORE_MOVIES, UPDATE_MOVIE } from "./actionTypes";

export const loadMovies = () => {
  return async(dispatch, getState, api) => {
    const response = await api.get(`/movies`);
    dispatch(loadMoviesAction(response.data));
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
    const response = await api.delete(`/comments/${commentId}`);
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
}