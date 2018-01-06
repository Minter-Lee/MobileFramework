import { Component } from 'React';
import { NavBar, Icon, Steps, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import less from '../../style/Home/Home.less';
import { observer } from 'mobx-react';
import { observable, action, useStrict, computed } from 'mobx';
import HOCLoadingComponent from './HOCLoadingComponent'; 
import LoadingStore from './common/LoadingStore';

useStrict(true);

class Store {
	@observable data = {};
	@action getHomeData = () => {
		fetch('/test/home.json')
			.then(action((response) => response.json()))
			.then(action((json) => {
				this.data = json.data;
				// 手动调用关闭loading状态
				loadingStore.completedLoading();
			}));
	};
	@action changeId = (aed) => {
		this.data.id += aed;
	};
}

const homeStore = new Store();

// 专门给高阶组件传递loading状态用
const loadingStore = new LoadingStore();

@observer
@HOCLoadingComponent
export default class HomeView extends Component{
	constructor(props, context) {
		super(props, context);
		this.handlerClick.bind(this);
		this.loadingStore = loadingStore;
	}

	handlerClick() {
		homeStore.changeId(1);
	}

	componentDidMount() {
		if(loadingStore.loading) {
			homeStore.getHomeData();
		}
	}

	render() {
		return <div>
			<span>{homeStore.data.id}</span>
			<Button onClick={this.handlerClick}>{"替换ID"}</Button>
		</div>
	}
}

