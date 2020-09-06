import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Main from './Main';
import MovieDetails from './Movie-details';
import { useSelector, useDispatch } from 'react-redux';
import { loadMovies } from '../Store/actions';
import Statistic from './Statistic';

const App = () => {
  const movies = useSelector(state => state.movies);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadMovies())
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route path='/' exact render={() => <Main movies={movies}/>}/>
        <Route path='/movie/:id' exact render={(props) => {
          const selectedMovie = movies.find((movie) => movie.id === props.match.params.id);
          return <MovieDetails movie={selectedMovie}/>
        }}/>
        <Route path='/statistic' exact render={() => <Statistic movies={movies}/>}/>
      </Switch>
    </Router>
  )
}

export default App;
