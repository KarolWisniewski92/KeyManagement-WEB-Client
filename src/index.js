import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './index.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from '../src/Data/store';

const store = configureStore();

ReactDOM.render(
  <Fragment>
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <App />
      </Router>
    </Provider>
  </Fragment>,
  document.getElementById('root')
);