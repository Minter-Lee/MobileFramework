import { Component } from 'React';
import { NavBar, Icon, Steps, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import less from '../../style/Home/Home.less';
import { observer } from 'mobx-react';
import { observable, action, useStrict } from 'mobx';

useStrict(true);

class Store {
	@observable data = {
		loading: true
	};
	@action getHomeData = () => {
		fetch('/test/home.json')
			.then(action((response) => response.json()))
			.then(action((json) => {
				console.info("json",json);
				this.data = json.data;
				this.data.loading = false;
			}));
	};
	@action changeId = (aed) => {
		this.data.id += aed
	}
}

const homeStore = new Store();

@observer
export default class HomeView extends Component{
	constructor(props, context) {
		super(props, context);
		this.handlerClick.bind(this);
	}

	handlerClick() {
		homeStore.changeId(1);
	}

	render() {
		if (!homeStore.data.loading) {
			return <div>
				<span>{homeStore.data.id}</span>
				<Button onClick={this.handlerClick}>{"替换ID"}</Button>
			</div>
		} else {
			return <div>"loading......"</div>
		}
	}

	componentDidMount() {
		homeStore.getHomeData();
	}
};