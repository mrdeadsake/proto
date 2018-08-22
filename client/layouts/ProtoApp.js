import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import routes from '../routes';

export default class ProtoApp extends React.Component {

  static propTypes = {
    history: PropTypes.object,
  };

  constructor(props, ...rest) {
    super(props,...rest);
    const path = window.location.pathname.replace(window.env.basename, '').substr(1);
  }

  render () {
    return (
      <Router history={ this.props.history }>
        {routes()}
      </Router>
    );
  }

}
