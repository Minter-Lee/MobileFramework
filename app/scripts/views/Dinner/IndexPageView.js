import DinnerHeadView from './DinnerHead/IndexPageView';
import DinnerListView from './DinnerListView';
/**
 * @author: MinterLee@hotmail.com
 * @description: 用餐主页
 * @Last Modified by: MinterLee@hotmail.com
 * @Last Modified time: 2018-01-29 17:17:25
 **/ 
export default (props) => [
    <DinnerHeadView key='dinner-head-view'/>,
    <DinnerListView key='dinner-list-view'/>
]