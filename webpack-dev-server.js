/**
 * webpack-dev-server配置文件
 * author : MinterLee@hotmail.com
 * date : 2017.12.26
**/
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.dev.config.js');
var path = require('path');

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    // 访问根目录路径（index.html所在目录）
    contentBase: 'app',
	filename: '[name]Bundle.js',
	publicPath: '/bundles/',
	hot: true,
	stats: {
		colors: true
	},
	historyApiFallback: true,
	compress:true
    // 关闭可以减少构建时间
    // inline:false
});
server.listen(8088, 'localhost', function() {});