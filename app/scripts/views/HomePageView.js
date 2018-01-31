import { TabBar, NavBar, Icon } from 'antd-mobile';
import { Component } from 'React';
import DinnerView from './Dinner/IndexPageView';
import TicketView from './Ticket/IndexPageView';
import PersonCenterView from './PersonCenter/IndexPageView';
import less from '../../style/homePage.less';

/**
 * @author: MinterLee@hotmail.com
 * @description: 首页TAB
 * @Last Modified by: MinterLee@hotmail.com
 * @Last Modified time: 2018-01-31 14:41:55
 **/ 
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
        const icons = [
            
        ]
        return <TabBar tintColor={'#FAB325'} unselectedTintColor={'#B5B8BB'} key={'home-tab'}>
            <TabBar.Item 
                title={dinnerTabName}
                selected={dinnerTabName == activeTabName}
                icon={<img src='../../images/Home_Tab_Restr_Normal.svg'/>}
                selectedIcon={<img src='../../images/Home_Tab_Restr_Selected.svg'/>}
                onPress={() => {
                    this.setState({
                        activeTabName: dinnerTabName
                    });
                }}
                key='dinner'>
                <DinnerView/>
            </TabBar.Item>
            <TabBar.Item 
                title={ticketTabName}
                selected={ticketTabName == activeTabName}
                icon={<img src='../../images/Home_Tab_Coupon_Normal.svg'/>}
                selectedIcon={<img src='../../images/Home_Tab_Coupon_Selected.svg'/>}
                onPress={() => {
                    this.setState({
                        activeTabName: ticketTabName
                    });
                }}
                key='ticket'><TicketView /></TabBar.Item>
            <TabBar.Item 
                title={personCenterTabName}
                selected={personCenterTabName == activeTabName}
                icon={<img src='../../images/Home_Tab_User_Normal.svg'/>}
                selectedIcon={<img src='../../images/Home_Tab_User_Selected.svg'/>}
                onPress={() => {
                    this.setState({
                        activeTabName: personCenterTabName
                    });
                }}
                key='personCenter'><PersonCenterView/></TabBar.Item>
        </TabBar>
    }
}