require('./stylesheets/application');
require('babel-polyfill');
require('bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';

import routes from './routes';

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
