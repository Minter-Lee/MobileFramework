import { Component } from 'React';
import { Route } from 'react-router-dom';
import { observable, action, useStrict } from 'mobx';
import { observer } from 'mobx-react';
import MFetch from '../untils/MFetch.js';
import { Toast } from 'antd-mobile';


useStrict(true);

class IndexStore {
    @observable initialInfo = {
        userName: null,
        userId: null,
        token: null,
        firstLoginIn: false,
        needLoginIn: false
    }
    @action getInitialInfo = () => {
        Toast.loading('加载中...');
        MFetch('/api/getInitialInfo.json','GET', {}, res => {
            Toast.hide();
            this.initialInfo = res.data;
            localStorage.setItem('MF_AUTH_TOKEN', res.data.token);
        });
    }
}

const indexStore = new IndexStore();

/**
 * @author MinterLee@hotmail.com
 * @description: 主页
 * @Last Modified by: MinterLee@hotmail.com
 * @Last Modified time: 2018-01-31 14:41:53
 */
@observer
export default class IndexPageView extends Component {
    constructor( props, context ) {
        super(props, context);
    }

    componentDidMount() {
        indexStore.getInitialInfo();
    }

    render() {
        console.info('indexRender');
        return null; 
    }
}