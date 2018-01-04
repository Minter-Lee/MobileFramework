import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
import Home from '../views/Home';
import StoreDetailView from '../views/storeDetail';
import Other from '../views/Other';
import HomeDetail from '../views/homeDetail';

const routes = (history) => (
	<Router history={history}>
        <div>
            <Route exact path='/'component={Home} />
            <Route path='/other/' component={Other} />
            <Route path='/home/' component={Home} />
            <Route path='/detail/' component={StoreDetailView} />
            <Route path='/homeDetail/:id/:name' component={HomeDetail} />
        </div>
	</Router>
);

export default routes;
