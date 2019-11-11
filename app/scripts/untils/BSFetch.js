import {Modal, Toast} from 'antd-mobile';

/**
 * @author: minter.li@boldseas.com
 * @description: 统一Fetch处理
 * @Last Modified by: MinterLee@hotmail.com
 * @Last Modified time: 2019-11-11 10:28:43
 * @param {String} url
 * @param {String} method
 * @param {Object} params
 * @param {Function} callback
 **/
export default (url, method, params, needCode = false) => {
	let options={};

    const authToken = sessionStorage.getItem('BS_Login_Info_Token');

	if( !authToken ) {
		Modal.alert('登录错误', '登录信息失效', [{
			text: '重新登录',
			onPress: () => {
				// 不适用history的push，会携带前缀
				location.pathname = '/login';
			}
		}]);
		return;
	}

	switch( method ) {
		case 'POST': {
			options = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					// 'X-Auth-Token': authToken
				},
				body: JSON.stringify(params)
			}
			break;
		}
        case 'POST_JSON': {
            options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'X-Auth-Token': authToken
                },
                body: JSON.stringify(params)
            }
            break;
        }
		case 'UPLOAD': {
			const formData = new FormData();
			for( let key in params) {
				formData.append(key, params[key]);
			}
			options = {
				method: 'POST',
				headers: {
					// 'X-Auth-Token': authToken
				},
				body: formData
			}
            break;
		}
		case 'GET': {
			url += '?';
			for( let i in params ) {
				url += `${i}=${encodeURI(params[i])}&`;
			}
			url = url.substring(0, url.length-1);
			options = {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					// 'X-Auth-Token': authToken
				}
			}
			break;
		}
		default: {
			options = {
				method: method,
				headers: {
					'Content-Type': 'application/json',
					// 'X-Auth-Token': authToken
				}
			}
			break;
		}
	}

	return fetch(url.indexOf('http') >= 0 ? url
		: `${sessionStorage.getItem('BS_Request_Domain')}${url}`, options)
		.then( result => {
			if(result.status !== 200) {
				console.error(result)
			} else {
				return result.json();
			}
		})
		.then( result => {
			// 需要自行处理Code
			if(needCode) {
				return result;
			} else {
				const {code, msg, data} = result;
				return code === 0 ? (data || 'success') : Toast.fail(msg);
			}
		}).catch(reason => {
            console.error(reason)
		});
}
