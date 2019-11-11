/**
 * webpack配置文件
 * author : MinterLee@hotmail.com
 * date : 2019.11.07
 **/
var webpack = require("webpack");
var path = require("path");

var htmlWebpackPlugin = require("html-webpack-plugin"),  
	htmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin"),
	happypack = require("happypack"),
  	BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// antdMobile主题色--空缺
let antdTheme = {
  	"brand-primary": "#FAB325",
  	"brand-primary-tap": "#FFB526",
  	"brand-wait": "#FAB325"
};

var WebpackCfg = {
	context: path.join(__dirname, "app"),
	
	resolve: {
		modules: [path.resolve(__dirname, 'node_modules')],
		mainFields: ['main'],
		// alias: {
		// 	'react': path.resolve(__dirname, './node_modules/react/umd/react.production.min.js'),
		// 	'mobx': path.resolve(__dirname, './node_modules/mobx/lib/mobx.es6.js')
		// },
		extensions: ['.js', '.less']
	},

	//页面入口文件
	entry: {
		index: ["./scripts/index.js"]
	},

	//出口文件输出配置
	output: {
		filename: "[name]Bundle.js",
		path: path.join(__dirname, "app/bundles"),
		publicPath: "/bundles/",
		chunkFilename: '[name].js'
	},

	// 优化
	optimization: {
		// 模块拆分，然后利用插件放入HTML中，注意vendors仅匹配主要的module
		splitChunks: {
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/](react|react-dom|mobx|mobx-react|antd-mobile|core-js|style-loader)/,
					chunks: 'all',
					name: 'vendors'
				},
				commons: {
					minChunks: 4,
					chunks: 'initial',
					name: 'commons'
				}
			}
		}
	},

	//模块
	module: {
		// 解析过滤
		// noParse: [/react\.min\.js$/],
		//加载器配置
		rules: [{
			test: /\.css$/,
			use: ["style-loader", "css-loader"]
		},{
			test: /\.js$/,
			use: ['happypack/loader?id=babel'],
			exclude: /node_modules/
		},{
			test: /\.(png|jpg|jpeg)$/,
			use: 'url-loader?limit=8192'
		},{
			test: /\.html$/,
			use: "html-loader" //将html转为String
		},{
			test: /\.svg$/,
			use: ['happypack/loader?id=svg']
		},{
			test: /\.less$/,
			include: /node_modules/,
			use: ['happypack/loader?id=antdLess']
		},{
			test: /\.less$/,
			include: path.resolve(__dirname, 'app/style'),
			use: ['happypack/loader?id=less']
		}]
	},

	//插件部分
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV)
			}
		}),
		new htmlWebpackPlugin({
			filename: path.join(__dirname, 'app/index.html'),
			template: 'indexTpl.html',
			chunks: ['vendors', 'commons', 'index'],
			inject: 'body',
			alwaysWriteToDisk: true
		}),
		new webpack.ProvidePlugin({
			React: "React"
		}),
		new htmlWebpackHarddiskPlugin(),
		new webpack.NamedModulesPlugin(),
		new happypack({
			id: 'svg',
			loaders: ['svg-url-loader']
		}),
		new happypack({
			id: 'babel',
			loaders: ['babel-loader?cacheDirectory']
		}),
		new happypack({
			id: 'antdLess',
			loaders: [
				'style-loader',
				'css-loader',
				{
					loader: 'less-loader',
					options: {
						javascriptEnabled: true,
						modifyVars: antdTheme
					}
				}
			]
		}),
		new happypack({
			id: 'less',
			loaders: [
				'style-loader',
				'css-loader',
				'postcss-loader',
				{
					loader: 'less-loader',
					options: {
						javascriptEnabled: true
					}
				}
			]
		})
	],

	// 动态监听配置
	watchOptions: {
		ignored: /node_modules/,
		aggregateTimeout: 300,
		poll: 1000
	}
};

module.exports = WebpackCfg;