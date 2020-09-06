import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

export const getDuration = (duration) => {
  return `${Math.floor(duration / 60)}h ${Math.floor(duration % 60)}min`;
};

export const getHours = (duration) => {
  return Math.floor(duration / 60);
}

export const getMinRemainder = (duration) => {
  return Math.floor(duration % 60);
}

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
};

export const getMostPopularGenre = (movies) => {
  let arr = [];

  movies.forEach((movie) => {
    movie.film_info.genre.forEach((elem) => arr.push(elem))
  });

  return arr.sort((a,b) => arr.filter(v => v === a).length - arr.filter(v => v === b).length).pop();
}

const getGenres = (movies) => {
  let arr = [];

  movies.forEach((movie) => {
    movie.film_info.genre.forEach((elem) => arr.push(elem))
  });

  return Array.from(new Set(arr));
}

const getGenresAmount = (watchedFilms) => {
  let genresAmount = {};

  // eslint-disable-next-line array-callback-return
  watchedFilms.map((film) => {
    // eslint-disable-next-line array-callback-return
    film.film_info.genre.map((genre) => {
      if (genre in genresAmount) {
        genresAmount[genre]++;
      } else {
        genresAmount[genre] = 1;
      }
    });
  });

  return genresAmount;
};

export const renderChart = (container, movies) => {
  const genresAmount = getGenresAmount(movies);
  const genres = Array.from(getGenres(movies));
  const moviesAmount = Object.values(genresAmount);
  return new Chart(container, {
    plugins: [ChartDataLabels],
    type: `horizontalBar`,
    data: {
      labels: genres,
      datasets: [{
        backgroundColor: `#ffe800`,
        borderColor: `#ffe800`,
        data: moviesAmount
      }]
    },
    options: {
      plugins: {
        datalabels: {
          font: {
            size: 20
          },
          color: `#ffffff`,
          anchor: `start`,
          align: `start`,
          offset: 40,
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: `#ffffff`,
            padding: 100,
            fontSize: 20
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          barThickness: 24
        }],
        xAxes: [{
          ticks: {
            display: false,
            beginAtZero: true
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
        }],
      },
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      }
    }
  });
};
