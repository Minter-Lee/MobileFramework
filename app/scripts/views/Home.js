/*
 * 测试antd
*/
import { NavBar, Icon, Steps, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import css from '../../style/Home/Home.less';
// import { broswerHistory } from 'react-router-dom';
import {createBrowserHistory} from 'history';

const Step = Steps.Step;

const stepInfo = [{
	title: '绑定支付宝',
	id: 1,
	description: ''
},{
	title: '系统确认',
	id: 2,
	description: 'T+1天'
},{
	title: '成功',
	id: 3,
	description: '开启用餐场景'
}].map((item, index) => <Step key={item.id} title={item.title} description={item.description} />);





const HomeView = (props) => {
	console.info('props',props);
	const handler = (e) =>{
	    console.info('跳转');
	    props.history.push('/homeDetail/:123/:123123',{name:123,id:'abc'})
	}
	return [
		<NavBar mode='light' leftContent={<Icon type='left'/>} key={1}>绑定支付宝</NavBar>,
		<WingBlank key={2} size='lg'>
			<WhiteSpace size='lg'/>
			<Steps current={1} direction="horizontal">{stepInfo}</Steps>
			<WhiteSpace size='xl'/>
			<div className='img'></div>
			<WhiteSpace size='xl'/>
			<article className='homeArticle'>
				<p className='text'>测试文本，测试文本，测试文本测试文本，测试文本，测试文本测试文本，测试文本，测试文本测试文本，测试文本，测试文本</p>
				<WhiteSpace size='xl'/>
				<p className='text'>测试文本，测试文本，测试文本，<span>测试文本</span>测试文本，测试文本，测试文本</p>
			</article>
			<WhiteSpace size='xl'/>
			<Button type='primary'className='button' onClick={handler}>去绑定</Button>
		</WingBlank>
	]
};

export default HomeView;