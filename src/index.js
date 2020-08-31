import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import { reducer } from './Store/reducer';
import thunk from 'redux-thunk';

import './index.css';
import App from './Components/App';
import api from './api';
import { Provider } from 'react-redux';

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

