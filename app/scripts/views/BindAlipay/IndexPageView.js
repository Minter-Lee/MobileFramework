import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { observable, action, useStrict } from 'mobx';
import { observer } from 'mobx-react';

import less from '../../../style/BindAlipay/indexPage.less';
import { Steps, Modal, WingBlank, Button } from 'antd-mobile';

import BindAlipayStep1View from './BindAlipayStep1View';
import BindAlipayStep2View from './BindAlipayStep2View';

useStrict(true);

class IndexStore{
    @observable visible = false;
    @action changeVisible = (visible) => {
        this.visible = visible;
    }
}

const indexStore = new IndexStore();

const Step = Steps.Step;

const steps = [{
    title: '去绑定'
},{
    title: '系统确认'
},{
    title: '绑定成功'
}].map((s, i)=> <Step key={i} title={s.title}/>)

/**
 * @author MinterLee@hotmail.com
 * @description: 支付宝绑定
 * @Last Modified by: MinterLee@hotmail.com
 * @Last Modified time: 2018-01-31 14:42:05
 */
@observer
export default class IndexPageView extends Component {

    constructor( props, context ) {
        super(props, context);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal(e) {
        e.preventDefault();
        indexStore.changeVisible(true);
    }

    hideModal(e) {
        indexStore.changeVisible(false);
    }

    render() {
        const currentStep = (parseInt(this.props.history.location.pathname.split('/')[2]) - 1) || 0;
        return <div className='bind-alipay' >
            <div className='bind-alipay-step' key='bind-alipay-step'>
                <Steps direction='horizontal' current={currentStep} >{steps}</Steps>
            </div>
            <div className='bind-alipay-split-line'></div>
            <div className='bind-alipay-content' key='bind-alipay-content'>
                <Switch>
                    <Route extra path='/BindAlipay/2' component={BindAlipayStep2View}></Route>
                    <Route path='/BindAlipay/' component={BindAlipayStep1View}></Route>
                </Switch>
            </div>
            <Button onClick={this.showModal} size='small' key='bind-alipay-button-desc' >绑定说明</Button>
            <Modal 
                visible={indexStore.visible} 
                title='支付宝绑定说明'
                onClose={this.hideModal}
                transparent={true}
                popup={true}
                className='bind-alipay-modal'
                key='bind-alipay-modal'
                footer={[
                {
                    text:'我知道啦',
                    onPress: this.hideModal
                }]}
            >
                <WingBlank>
                    <p className='modal-desc'>使用 通用餐需要关联支付宝账号，您在 通申请的企业用餐券会发放到您的支付宝卡包中，用于餐厅买单时扣减。</p>
                    <div className='modal-img'></div>
                </WingBlank>
            </Modal>
        </div>
    }
}
