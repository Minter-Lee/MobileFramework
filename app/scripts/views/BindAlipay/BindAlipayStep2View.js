import { WingBlank } from 'antd-mobile';

import less from '../../../style/BindAlipay/bindAlipayStep2.less';

/**
 * @author MinterLee@hotmail.com
 * @description: 支付宝绑定-步骤2
 * @Last Modified by: MinterLee@hotmail.com
 * @Last Modified time: 2018-01-31 14:43:29
 */
export default (props) => {
    const handlerClick = () => {
        console.info('刷新');
    }
    return [
        <img src='../../../images/bindAlipayStep2.jpg' className='bind-alipay-img-2' key='bind-alipay-img-2' />,
        <div className='bind-alipay-switch' key='bind-alipay-switch'>
            <img className='switch-alipay' src='../../../images/alipay.svg'/>
            <div className='switch-refresh' onClick={handlerClick} >
                <img className='refresh-img' src='../../../images/refresh.svg'/>
                <span className='refresh-text' >切换</span>
            </div>
        </div>
    ]
}