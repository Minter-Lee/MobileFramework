import ReactDom from 'react-dom';
import React from 'react';

import routes from './routes/index';
import { createBrowserHistory } from 'history';

//告知该文件及其所有关联被修正时，进行热替换
if (module.hot) {
  module.hot.accept();
}

const browserHistory = createBrowserHistory();

debugger;
// routes(browserHistory)
ReactDom.render(<div>123</div>, document.getElementById('container'));