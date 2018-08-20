import React from 'react';
import ProtoApp from './layouts/ProtoApp';
import BasePage from './layouts/BasePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function routes () {
    return (
        <Router>
        <div>
            <Route path="/" component={ BasePage } />
        </div>
        </Router>
    );
}
