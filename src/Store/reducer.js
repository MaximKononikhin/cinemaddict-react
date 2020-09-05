import { LOAD_MOVIES, LOAD_COMMENTS, SHOW_MORE_MOVIES, UPDATE_MOVIE } from "./actionTypes";
import { updateMovie } from "../utils";

const initialState = {
  movies: [],
  comments: [],
  shownMoviesCount: 5
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOVIES:
      return {
        ...state,
        movies: action.payload
      }
    
    case LOAD_COMMENTS: 
      return {
        ...state,
        comments: action.payload
      }
    
    case SHOW_MORE_MOVIES:
      return {
        ...state,
        shownMoviesCount: state.shownMoviesCount + 5
      }

    case UPDATE_MOVIE:
      return {
        ...state,
        movies: updateMovie(state.movies, action.payload)
      }
    
    default: return state;
  }
};