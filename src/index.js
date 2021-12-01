import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './index.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <Router>
      <App />
    </Router>
  </Fragment>,
  document.getElementById('root')
);