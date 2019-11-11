import React from 'react';
import {Button} from 'antd-mobile';
import {push} from '../../routes/history';
import less from '../../../style/error/error404Page.less';

/**
 * @description: 404页 
 * @author: MinterLee@hotmail.com 
 * @Date: 2019-11-11 11:05:44 
 * @Last Modified by: MinterLee@hotmail.com
 * @Last Modified time: 2019-11-11 13:50:40
 */
const Error404PageView = props => <section className='bs-error-container'>
    <img src='/images/404.svg' />
    <Button className='error-container-btn' onClick={() => push('home')}>返回主页</Button>
</section>
export default Error404PageView;