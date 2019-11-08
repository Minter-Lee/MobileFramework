import { Modal } from 'antd-mobile';
import { action, useStrict } from 'mobx';

useStrict(true);

/**
 * @Author   MinterLee@hotmail.com
 * @DateTime 2018-07-10
 * @param    {[String]}     URL             请求地址
 * @param    {[String]}     Method          请求方法 [POST PUT GET DELETE UPLOAD]
 * @param    {[Object]}     Params          请求参数
 * @param    {[Function]}   Callback        请求成功后回调函数
 * @param    {[Object]}     OtherOptions    请求其余配置项（如：headers等）
 * @return   {[Null]}       无返回结果
 */
export default (url, method, params, callback, otherOptions) => {
    let lastUrl = url, keys = params.keys, options = {
        headers: {
            'content-type': 'application/json',
            'auth-token': localStorage.getItem('MF_AUTH_TOKEN')
        },
        method,
        ...otherOptions
    }

    switch(method) {
        case 'GET': {
            //拼接参数
            // let firstKey = keys.pop();
            // lastUrl += `?${firstKey}=${params[firstKey]}`;
            // keys.map( key => lastUrl += `&${key}=${params[key]}`);
            options.headers['content-type'] = 'application/x-www-form-urlencoded';
            break;
        }
        case 'POST': {
            options.body = JSON.stringify(params);
            break;
        }
        case 'DELETE': {
            options.body = JSON.stringify(params);
            break;
        }
        case 'UPLOAD_P': {
            const formData = new FormData();
            for( let i in params ) {
                formData.append(i, params[i]);
            }
            options.method = 'POST';
            options.body = formData;
            break;
        }
        default: {
            let firstKey = keys.pop();
            lastUrl += `?${firstKey}=${params[firstKey]}`;
            keys.map( key => lastUrl += `&${key}=${params[key]}`);
            break;
        }
    }
    console.info('请求地址——_——_——_——_——_——', url);
    console.info('请求参数——_——_——_——_——_——', params);

    fetch(url, options)
    .then( res => res.json())
    .then( action(response => {
        console.info('请求结果——_——_——_——_——_——', response);
        callback(response);
    }))
    .catch( error => {
        console.error('系统错误', error);
        Modal.alert('系统服务错误',`错误信息：${error}，点击[刷新]按钮，重新进入页面重试`,[
            <Button onClick={() => this.location.reload()} >重试</Button>
        ]);
    });
}





