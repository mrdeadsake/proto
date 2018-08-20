require('./stylesheets/application');
require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';

import { useQueries } from 'react-router';
import Navigation from './components/Navigation';

import routes from './routes';


Navigation.configure({
  sitePath: `/`,
});

function renderAction () {
  ReactDOM.render((
      <Provider store={store}>
      { routes() }
      </Provider>
    ), document.getElementById('react-container'));
}

window.addEventListener('load', () => {
  renderAction();
});
