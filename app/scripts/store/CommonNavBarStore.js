import {observable, action} from 'mobx';
/**
 * @description: 描述
 * @author: MinterLee@hotmail.com
 * @Date: 2018-10-15 19:32:32
 * @Last Modified by: MinterLee@hotmail.com
 * @Last Modified time: 2019-11-11 16:00:08
 */
class CommonNavBarStore {
	constructor() {
		this.defaultLeftAction = () => {
			this.showLeft && history.back();
		}
	}
	@observable title = '卖车宝';
	@observable onLeftClick = this.defaultLeftAction;
	@observable rightContent;
	@observable showLeft = true;
	@action reset() {
		this.onLeftClick = this.defaultLeftAction;
		this.showLeft = true;
	}
}
export default new CommonNavBarStore();