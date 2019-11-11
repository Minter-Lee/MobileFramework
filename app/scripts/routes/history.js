/**
 * @description: 全局router的history
 * @author: MinterLee@hotmail.com
 * @Date: 2018-10-23 21:45:02
 * @Last Modified by: MinterLee@hotmail.com
 * @Last Modified time: 2019-11-11 10:44:02
 */
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

export const push = (path, state) => {
    // 判定第二参数，用于跨页面通信传参使用
    if(state) {
        const cleanPath = path.indexOf('?') >= 0 ? path.slice(0, searchIndex) : path;
        history.push({
            pathname: `${sessionStorage.getItem('BS_PathPrefix') || '/nav/normal'}/${cleanPath}`,
            state: JSON.stringify(state)
        });
    } else {
        history.push(`${sessionStorage.getItem('BS_PathPrefix') || '/nav/normal'}/${path}`);
    }
}

export default history;