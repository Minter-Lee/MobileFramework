/**
* 模拟页面
*/

import {WingBlank, WitheSpace, NavBar, InputItem} from 'antd-mobile';
import less from '../../style/PersonInfo/personInfo.less';

const state = {
    companyName: '北京分贝金服有限公司',
    phoneNumber: '111111111111',
    personName: '王某某'
}

const PersonInfoView = () => ([
    <div style={{backgroundColor:'#fff'}} key={1}>
        <WingBlank size='lg'>
            <div className='avatar'>
                <label>头像</label>
                <div className='img'></div>
            </div>
        </WingBlank>
    </div>,
    <InputItem editable={false} disabled={false} value={state.personName} key={2}>姓名</InputItem>,
    <InputItem editable={false} disabled={false} value={state.companyName} key={3}>公司</InputItem>,
    <InputItem editable={false} disabled={false} value={state.phoneNumber} key={4}>手机</InputItem>
]);

export default PersonInfoView;

