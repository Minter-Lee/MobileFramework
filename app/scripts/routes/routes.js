import React, {Fragment}from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import Error404PageView from '../views/error/Error404PageView';
import SSOPageView from '../views/login/containers/SSOPageView';
import HomeRoutes from './homeRoutes';
import history from './history';

const ChannelRoutesCfg = [{
	path: 'home/',
	loadRoutes: HomeRoutes
}];

/**
 * 主页布局
 * 通过路由，确定导航条显示和渲染模式，分别为路由的第一部分和第二部分。这两部分也是全局路由的前缀
 * 	第一部分 nav 显示导航条 noNav 隐藏导航条
 * 	第二部分 normal 标准模式（浏览器或普通内嵌）emb 特殊内嵌（需要嵌入API，如钉钉）
 * @param {*} props
 */
const MainLayout = props => {
	const pathArr = location.pathname.split('/'),
		hasNav = pathArr[1] || 'nav',
		mode = pathArr[2] || 'normal';

	// 验证路由规则--第一段，导航 -- 第二段，模式
	if(['nav', 'nonav'].includes(hasNav) && ['embe', 'normal'].includes(mode)) {
		// 全局路由前缀
		sessionStorage.setItem('BS_PathPrefix', `/${hasNav}/${mode}`);
		sessionStorage.setItem('BS_RenderMode', mode);
	} else {
		location.pathname = '/error/404';
		return null;
	}

	const getFromPath = () => {
		let path = '/';
		if(pathArr[1]) {
			path += pathArr[1];
			if(pathArr[2]) {
				path += `/${pathArr[2]}`;
			}
		}
		return path;
	}

	return <Fragment>
		{ hasNav === 'nav' ? <CommonNavBar key='container-nav'/> : null }
		<Switch>
			{
				ChannelRoutesCfg.map( item => {
					const {path, loadRoutes} = item,
						lastPath = `${sessionStorage.getItem('BS_PathPrefix')}/${path}`;
					return <Route path={lastPath} key={lastPath} component={loadRoutes} />
				})
			}
			<Redirect exact from={getFromPath()} to={`/${hasNav}/${mode}/home`} />
		</Switch>
	</Fragment>
}

const renderDevTools = () => {
	if(process.env.NODE_ENV !== 'production') {
		const DevTools = require('mobx-react-devtools').default;
		return <DevTools />
	}
}

// 注入前缀信息
let webGateDomain = 'https://webapp-gate-dev.l2l-fca-h5.com',
	NODE_ENV = process.env.NODE_ENV;

if( NODE_ENV === 'production') {
	webGateDomain = 'https://webapp-gate.fenbeitong.com';
}

sessionStorage.setItem('BS_Request_Domain', webGateDomain);

window.addEventListener('onorientationchange' in window ? 'orientationchange' : 'resize',
    function () {
        if (window.orientation === 90 || window.orientation === -90) {
            Toast.info('为了更好的体验，建议您竖屏使用', 2);
        }
    }, false
);

export default () => <Router history={history}>
	<Switch>
		<Route exact path='/sso' component={SSOPageView}/>
		<Route exact path='/error/404' component={Error404PageView}/>
		<Route path='/' component={MainLayout}/>
		<Redirect from='*' to='/error/404' />
		{ renderDevTools() }
	</Switch>
</Router>