/**
 * @description: 主页路由
 * @author: MinterLee@hotmail.com 
 * @Date: 2019-11-11 11:25:48 
 * @Last Modified by: MinterLee@hotmail.com
 * @Last Modified time: 2019-11-11 11:29:43
 */
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePageView from '../views/home/HomePageView';

const BASE_PATH = `${sessionStorage.getItem('BS_PathPrefix')}`,
    HomeRoutes = () => <Switch>
        <Route exact path={`${BASE_PATH}/home`} component={HomePageView} />
    </Switch>

export default HomeRoutes;