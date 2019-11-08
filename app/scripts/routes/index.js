import React from 'react';
import {Router, Route} from 'react-router-dom';
import IndexPageView from '../views/IndexPageView';

export default history => <Router history={history}>
    <Route exact path='/' component={IndexPageView} />
</Router>