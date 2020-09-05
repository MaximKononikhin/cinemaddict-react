import { LOAD_MOVIES, LOAD_COMMENTS, SHOW_MORE_MOVIES, UPDATE_MOVIE, FILTER_MOVIES, SORT_MOVIES } from "./actionTypes";
import { updateMovie } from "../utils";

const initialState = {
  movies: [],
  comments: [],
  activeFilter: `all`,
  shownMoviesCount: 5,
  activeSortingType: `default`
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

    case FILTER_MOVIES: 
      return {
        ...state,
        activeFilter: action.payload
      }

    case SORT_MOVIES:
      return {
        ...state,
        activeSortingType: action.payload
      }

    
    default: return state;
  }
};