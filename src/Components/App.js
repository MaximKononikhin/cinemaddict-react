import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Main from './Main';
import MovieDetails from './Movie-details';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact render={() => <Main/>}/>
        <Route path='/movie' exact render={() => <MovieDetails/>}/>
      </Switch>
    </Router>
  )
}

export default App;
