import { TabBar, NavBar, Icon } from 'antd-mobile';
import { Component } from 'React';
import DinnerView from './Dinner/IndexPageView';
import TicketView from './Ticket/IndexPageView';
import PersonCenterView from './PersonCenter/IndexPageView';
import less from '../../style/homePage.less';


export default class HomePageView extends Component {
    constructor(props, context) {
        super(props, context);
    }

    state = {
        dinnerTabName:'用餐',
        ticketTabName:'券',
        personCenterTabName: '个人',
        activeTabName: '用餐'
    }

    render() {
        const { dinnerTabName, ticketTabName, personCenterTabName, activeTabName } = this.state;
        return [
            <NavBar leftContent={ <Icon type='left'/> } key='NavBar'>{activeTabName}</NavBar>,
            <div className='heightTab' key='TabBarContent'>
                <TabBar >
                    <TabBar.Item 
                        title={dinnerTabName}
                        selected={dinnerTabName == activeTabName}
                        icon={
                          <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                          />
                        }
                        selectedIcon={
                          <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                          />
                        }
                        onPress={() => {
                            this.setState({
                                activeTabName: dinnerTabName
                            });
                        }}
                        key='dinner'><DinnerView/></TabBar.Item>
                    <TabBar.Item 
                        title={ticketTabName}
                        selected={ticketTabName == activeTabName}
                        icon={
                          <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                          />
                        }
                        selectedIcon={
                          <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                          />
                        }
                        onPress={() => {
                            this.setState({
                                activeTabName: ticketTabName
                            });
                        }}
                        key='ticket'><TicketView /></TabBar.Item>
                    <TabBar.Item 
                        title={personCenterTabName}
                        selected={personCenterTabName == activeTabName}
                        icon={
                          <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                          />
                        }
                        selectedIcon={
                          <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                          />
                        }
                        onPress={() => {
                            this.setState({
                                activeTabName: personCenterTabName
                            });
                        }}
                        key='personCenter'><PersonCenterView/></TabBar.Item>
                </TabBar>
            </div>
        ]
    }
}