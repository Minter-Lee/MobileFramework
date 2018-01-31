import React from 'react';
import {Router, Route} from 'react-router-dom';
import IndexPageView from '../views/IndexPageView';
import BindAlipayView from '../views/BindAlipay/IndexPageView';
import HomePageView from '../views/HomePageView';
import WelcomePageView from '../views/WelcomePageView';

const routes = (history) => (
	<Router history={history}>
        <div className="height100per">
            <Route exact path='/'component={IndexPageView} />
            <Route path='/BindAlipay/' component={BindAlipayView} />
            <Route path='/Home/'component={HomePageView} />
            <Route path='/WelcomePage/' component={WelcomePageView} />
        </div>
	</Router>
);

export default routes;