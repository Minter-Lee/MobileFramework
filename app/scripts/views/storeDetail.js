/*
 * 模拟页面
 */

import { WingBlank, WhiteSpace, NavBar, Icon} from 'antd-mobile';
import less from '../../style/StoreDetail/storeDetail.less';

const state = {
    storeName:'吉野家',
    averageCon: 25,
    openingHours:'0:00 - 12:00',
    address:'北京市朝阳区东大桥路12号润城中心',
    telephone: '110221332443'
}

const StoreDetailView = () => (
    <div>
        <NavBar leftContent={ <Icon type='left'/> } >{state.storeName}</NavBar>
        <WingBlank size='lg'>
            <ul className='storeDetailInfo' >
                <li>
                    <img  className='img large' />
                    <article>
                        <p>{ state.storeName }</p>
                        <p>{ `人均${state.averageCon}元` }</p>
                    </article>
                </li>
                <WhiteSpace></WhiteSpace>
                <li>
                    <img className='img' />
                    <span>{`营业时间：${state.openingHours}`}</span>
                </li>
                <WhiteSpace></WhiteSpace>
                <li>
                    <img className='img' />
                    <span>{state.address}</span>
                </li>
                <WhiteSpace></WhiteSpace>
                <li>
                    <img className='img' />
                    <span>{`餐厅电话${state.telephone}`}</span>
                </li>
            </ul>
        </WingBlank>
    </div>
);

export default StoreDetailView;