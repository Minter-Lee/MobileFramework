import { Button } from 'antd-mobile';

import less from '../../../style/BindAlipay/bindAlipayStep1.less';

/**
 * @author MinterLee@hotmail.com
 * @description: 支付宝绑定-步骤1
 * @Last Modified by: MinterLee@hotmail.com
 * @Last Modified time: 2018-01-31 14:42:09
 */
export default (props) => {
    const handlerClick = () => {
        props.history.push('/BindAlipay/2');
    }
    return [
        <img 
            className='bind-alipay-img' 
            src='../../../images/bindAlipayStep1.jpg' 
            key='bind-alipay-img'/>,
        <Button 
            onClick={handlerClick} 
            key='bind-alipay-button' 
            type='primary' 
            style={{
                width: '70%',
                margin: '0 auto'
            }}>去绑定</Button>
    ]
}