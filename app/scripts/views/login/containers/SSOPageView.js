import React, {Component} from 'react';
import loginStore from '../../../store/LoginStore';
import {observer} from 'mobx-react';
import less from '../../../../style/login/ssoPage.less';
/**
 * @description: 单点登录(SSO)
 * @author: MinterLee@hotmail.com
 * @Date: 2018-11-01 17:11:25
 * @Last Modified by: MinterLee@hotmail.com
 * @Last Modified time: 2019-11-11 11:19:30
 */
@observer class SSOPageView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const param = {};
        location.search.slice(1).split('&').map(item => {
            param[item.split('=')[0]] = item.split('=')[1];
        });
        loginStore.ssoByParam(param);
    }

    render() {
        const {ssoError} = loginStore;
        return <section className='fin-sso-container' >
            <img src={`/images/${ssoError ? 'sys_error_page' : 'sys_login_page'}.svg`} />
            {
                ssoError ? <span className='error'>账号异常，请联系管理员</span>
                    : <span>正在登录，请稍后</span>
            }
        </section>
    }
}

export default SSOPageView;
