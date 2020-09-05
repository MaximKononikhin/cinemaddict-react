export const getDuration = (duration) => {
  return `${Math.floor(duration / 60)}h ${Math.floor(duration % 60)}min`;
};

export const updateMovie = (movies, movie) => {
  const index = movies.findIndex((it) => it.id === movie.id);
  if (index === -1) {
    return null;
  }
  return [].concat(movies.slice(0, index), movie, movies.slice(index + 1));
};

export const getRating = (moviesLength) => {
  let rank = ``;
  if (moviesLength >= 1 && moviesLength <= 10) {
    rank = `Novice`;
  } else if (moviesLength >= 11 && moviesLength <= 20) {
    rank = `Fan`;
  } else if (moviesLength >= 21) {
    rank = `Movie Buff`;
  }
  return rank;
};

export const filterMovies = (movie, filterType) => {
  switch (filterType) {
    case `watchlist`:
      return movie.user_details.watchlist;
    
    case `watched`:
      return movie.user_details.already_watched;

    case `favorite`:
      return movie.user_details.favorite;
      
    default: return movie;
  }
};

export const sortMovies = (a, b, sortType) => {
  switch (sortType) {
    case `rating`:
      return b.film_info.total_rating - a.film_info.total_rating;

    case `date`:
      return Date.parse(a.film_info.release.date) - Date.parse(b.film_info.release.date);

    default: return a;
  }
}
