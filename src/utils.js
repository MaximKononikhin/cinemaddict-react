export const getDuration = (duration) => {
  return `${Math.floor(duration / 60)}h ${Math.floor(duration % 60)}min`;
};

export const updateMovie = (movies, movie) => {
  const index = movies.findIndex((it) => it.id === movie.id);
  if (index === -1) {
    return null;
  }
  return [].concat(movies.slice(0, index), movie, movies.slice(index + 1));
}