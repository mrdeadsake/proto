require('./stylesheets/application');
require('babel-polyfill');
require('bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import BasePage from './layouts/BasePage';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import ProtoApp from './layouts/ProtoApp';
import createBrowserHistory from 'history/createBrowserHistory';

window.env.basename = `${window.env.appURL}`
const history = createBrowserHistory({basename: window.env.location})

class Application {
  constructor () {
    this.env = null;
  }

  init({env}) {
    this.env = env;
  }
}

const app = new Application

app.init({
  env: window.env,
  }) 




window.addEventListener('load', () => {
  ReactDOM.render((
    <Provider store={store}>
    <ProtoApp
      history={history}
      />
      </Provider>
    ), window.document.getElementById('react-container'));
})


