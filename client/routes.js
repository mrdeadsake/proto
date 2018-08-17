import React from 'react';
import ProtoApp from './layouts/ProtoApp';
import { Router, Route, IndexRoute, Redirect, IndexRedirect } from 'react-router';

export default function routes (history) {
    return (
        <Router history={ history }>
            <Route path="/" component={ ProtoApp }>
            </Route>
        </Router>
    );
}
