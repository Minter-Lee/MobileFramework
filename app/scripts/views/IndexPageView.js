import { Component } from 'React';
// import { observable, action } from 'mobx';
// import { observer } from 'mobx-react';
// import MFetch from '../untils/MFetch.js';

// class IndexStore {
//     @observable initialInfo = {
//         userName: null,
//         userId: null,
//         token: null,
//         firstLoginIn: false,
//         needLoginIn: false
//     }
//     @action getInitialInfo = () => {
//         // Toast.loading('加载中...');
//         // MFetch('/api/getInitialInfo.json','GET', {name:'name'}, res => {
//         //     Toast.hide();
//         //     this.initialInfo = res.data;
//         //     localStorage.setItem('MF_AUTH_TOKEN', res.data.token);
//         // });
//     }
// }

// const indexStore = new IndexStore();

/**
 * @author MinterLee@hotmail.com
 * @description: 主页
 * @Last Modified by: MinterLee@hotmail.com
 * @Last Modified time: 2019-11-08 17:08:13
 */
// @observer
export default class IndexPageView extends Component {
    constructor( props, context ) {
        super(props, context);
    }

    // componentDidMount() {
    //     // indexStore.getInitialInfo();
    //     // webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({data: {
    //     //     name: '123',
    //     //     code: '456'
    //     // }}));
    // }

    render() {
        return <div>
            welcome!
        </div>; 
    }
}