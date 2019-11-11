import {observable, action} from 'mobx';
import {Toast} from 'antd-mobile';
import {push} from '../routes/history';

const pathMap = new Map([
    ['home', 'home'],
    ['domesticAirSearch', 'domesticAir'],
    ['hotelSearch', 'hotel'],
    ['order', 'order'],
])

/**
 * @description: 验证码登录Store
 * @author: MinterLee@hotmail.com
 * @Date: 2018-10-18 19:17:01
 * @Last Modified by: MinterLee@hotmail.commail.com
 * @Last Modified time: 2019-11-11 11:22:17
 */
class LoginStore {

    // 向Storage中注入信息
    setLoginInfoToStorage = data => {
        const {login_info, user_info, company_info, auth_info} = data;

        // // 注入登录信息
        // sessionStorage.setItem('BS_Login_Info_Token', login_info.token);
        // sessionStorage.setItem('BS_Login_Info_New_User', login_info.is_new_user);
        // sessionStorage.setItem('BS_Login_Info_Bind_Wechart', login_info.is_weixin_bind);

        // // 注入公司信息
        // sessionStorage.setItem('BS_Company_Info_Id', company_info.id);
        // sessionStorage.setItem('BS_Company_Info_Name', company_info.name);
        // sessionStorage.setItem('BS_Company_Info_Logo', company_info.logo_url);
        // sessionStorage.setItem('BS_Company_Info_User_Name', company_info.user_name);
        // sessionStorage.setItem('BS_Company_Info_Org_Id', company_info.org_unit.id);
        // sessionStorage.setItem('BS_Company_Info_Org_Name', company_info.org_unit.name);

        // // 注入用户信息
        // sessionStorage.setItem('BS_User_Info_Id', user_info.id);
        // sessionStorage.setItem('BS_User_Info_Name', user_info.name);
        // sessionStorage.setItem('BS_User_Info_Phone', user_info.phone);
        // sessionStorage.setItem('BS_User_Info_Avatar', user_info.head_url);

        // // 注入权限信息
        // sessionStorage.setItem('BS_Auth_Info', JSON.stringify(auth_info));
    }

    @action loginInByAuthCode = async (phoneNum, authCode) => {
        const loginData = await fetch(`${sessionStorage.getItem('BS_Request_Domain')}/webapp/auth/login/captcha`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                os_type: '4',
                phone: phoneNum,
                captcha: authCode
            })
        })
        .then( result => result.status !== 200 ? console.error(result) : result.json())
		.then( result => {
            const {code, msg, data} = result;
            return code === 0 ? data : Toast.fail(msg);
        });

        if(loginData) {
            this.setLoginInfoToStorage(loginData);
            return true;
        }
        return false;
    }

    @action sendAuthCode = phoneNum => {
        const url = `${sessionStorage.getItem('BS_Request_Domain')}/webapp/auth/captcha?captcha_type=1&business_type=0&mobile=${phoneNum}`;
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then( result => result.status !== 200 ? console.error(result) : result.json())
		.then( result => {
            const {code, msg, data} = result;
            return code === 0 ? data : Toast.fail(msg);
        });
    }

    @action loginOut = async () => {
        await fetch(`${sessionStorage.getItem('BS_Request_Domain')}/webapp/auth/logout`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-Token': sessionStorage.getItem('BS_Login_Info_Token')
            }
        });
        Toast.show('退出成功');
        // // 注销登录信息
        // sessionStorage.removeItem('BS_Login_Info_Token');
        // sessionStorage.removeItem('BS_Login_Info_New_User');
        // sessionStorage.removeItem('BS_Login_Info_Bind_Wechart');

        // // 注销公司信息
        // sessionStorage.removeItem('BS_Company_Info_Id');
        // sessionStorage.removeItem('BS_Company_Info_Name');
        // sessionStorage.removeItem('BS_Company_Info_Logo');
        // sessionStorage.removeItem('BS_Company_Info_User_Name');
        // sessionStorage.removeItem('BS_Company_Info_Org_Id');
        // sessionStorage.removeItem('BS_Company_Info_Org_Name');

        // // 注销用户信息
        // sessionStorage.removeItem('BS_User_Info_Id');
        // sessionStorage.removeItem('BS_User_Info_Name');
        // sessionStorage.removeItem('BS_User_Info_Phone');
        // sessionStorage.removeItem('BS_User_Info_Avatar');

        // // 注销权限信息
        // sessionStorage.removeItem('BS_Auth_Info');
    }

    @observable ssoError = false;
    @action ssoByParam = async param => {
        const url = `${sessionStorage.getItem('BS_Request_Domain')}/webapp/auth/join`;
        const result = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(param)
        }).then( result => {
            if(result.status === 200) {
                return result.json();
            } else {
                this.ssoError = true;
            }
        });
        const {code, msg, data} = result;
        if(code === 0) {
            this.ssoError = false;
            this.setLoginInfoToStorage(data);
            push('home');
        } else {
            this.ssoError = true;
        }
    }
}
export default new LoginStore();