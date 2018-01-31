import { Button, WingBlank } from 'antd-mobile';
import less from '../../style/welcomePage.less';

/**
 * @author: MinterLee@hotmail.com
 * @description: 欢迎页面
 * @Last Modified by: MinterLee@hotmail.com
 * @Last Modified time: 2018-01-31 14:41:51
 **/ 
export default (props) => {
    const handlerClick = (e) => {
        props.history.push('/BindAlipay/');
    }

    return <div className='welcome-page-content'>
        <WingBlank>
            <h1 className='welcome-title'>欢迎！</h1>
            <p className='welcome-desc'>使用 通用餐需要关联支付宝账号，您在 通申请的企业用餐券会发放到您的支付宝卡包中，用于餐厅买单时扣减。</p>
            <div className='welcome-img' ></div>
            <Button onClick={handlerClick} >我知道啦</Button>
        </WingBlank>
    </div>
}