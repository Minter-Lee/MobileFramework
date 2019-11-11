import ReactDom from 'react-dom';
import routes from './routes/routes';
import 'whatwg-fetch';
if (module.hot) {
	module.hot.accept();
}

ReactDom.render(routes(), document.getElementById('container'));
