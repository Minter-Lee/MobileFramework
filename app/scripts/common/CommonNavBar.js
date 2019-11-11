import React from 'react';
import {NavBar} from 'antd-mobile';
import less from '../../style/common/commonNavBar.less';

import {observer} from 'mobx-react';
import commonNavBarStore from '../store/CommonNavBarStore';

/**
 * @description: 全局导航栏
 * @author: MinterLee@hotmail.com
 * @Date: 2018-10-12 20:48:32
 * @Last Modified by: MinterLee@hotmail.com
 * @Last Modified time: 2019-11-11 15:58:43
 */
@observer class CommonNavBar extends React.Component {
	constructor( props ) {
		super(props);
	}

	render() {
		const {title, onLeftClick, rightContent, showLeft} = commonNavBarStore;
		return <div className='bs-common-nav-bar'>
			<NavBar mode='light' onLeftClick={onLeftClick} rightContent={rightContent}
				leftContent={showLeft ? <img src='/images/icon_navigation_return.svg' /> : null}
			>{title}</NavBar>
		</div>;
	}
}
export default CommonNavBar;