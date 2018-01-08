import React from 'react';
import {Router, Route} from 'react-router-dom';
import IndexPageView from '../views/IndexPageView';
import BindAlipayView from '../views/BindAlipay/IndexPageView';
import HomePageView from '../views/HomePageView';

const routes = (history) => (
	<Router history={history}>
        <div className="height100per">
            <Route exact path='/'component={IndexPageView} />
            <Route path='/BindAlipay/' component={BindAlipayView} />
            <Route path='/Home/'component={HomePageView} />
        </div>
	</Router>
);

export default routes;

/*  <IndexRoute path='/PersonCenter/' component={Other} ></IndexRoute>
    <Route path='/Dinner/' component={Other} ></Route>
    <Route path='/Ticket/' component={Other} ></Route>
*/
