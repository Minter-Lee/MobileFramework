import ReactDom from 'react-dom';
import routes from './routes/index';
import createHistory from 'history/createBrowserHistory';

//告知该文件及其所有关联被修正时，进行热替换
if (module.hot) {
  module.hot.accept();
}

ReactDom.render((
  <div>
    {routes(createHistory())}
  </div>
), document.getElementById('container'));