/**
 * webpack配置文件
 * author : MinterLee@hotmail.com
 * date : 2019.11.07
 **/
var webpack = require("webpack");
var path = require("path");

var precss = require("precss"),
	autoprefixer = require("autoprefixer"),
  	cssnano = require("cssnano"),
	pxToViewpost = require("postcss-px-to-viewport"),
	htmlWebpackPlugin = require("html-webpack-plugin"),  
	htmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin"),
	happypack = require("happypack"),
  	BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// antdMobile主题色--空缺
let antdTheme = {
  	"brand-primary": "#FAB325",
  	"brand-primary-tap": "#FFB526",
  	"brand-wait": "#FAB325"
};

// postCss配置
var postCssLoaderCfg = {
  	loader: "postcss-loader",
  	options: {
    	plugins: loader => [
			precss,
			autoprefixer,
			cssnano,
			pxToViewpost({
				viewportWidth: 750,
				viewportHeight: 1334,
				viewportUnit: "vw",
				selectorBlackList: [],
				minPixelValue: 1,
				mediaQuery: false
			})
		]
	}
};

var WebpackCfg = {
	context: path.join(__dirname, "app"),
	
	resolve: {
		modules: [path.resolve(__dirname, 'node_modules')],
		// mainFields: ['main'],
		alias: {
			'react': path.resolve(__dirname, './node_modules/react/umd/react.production.min.js'),
			'mobx': path.resolve(__dirname, './node_modules/mobx/lib/mobx.es6.js')
		},
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
		noParse: [/react\.min\.js$/],
		//加载器配置
		rules: [{
			test: /\.css$/,
			use: ["style-loader", "css-loader"]
		},{
			test: /\.js$/,
			// use: ['happypack/loader?id=babel'],
			use: ['babel-loader?cacheDirectory'],
			exclude: /node_modules/
		},{
			test: /\.(png|jpg|jpeg)$/,
			use: 'url-loader?limit=8192'
		},{
			test: /\.html$/,
			use: "html-loader" //将html转为String
		},{
			test: /\.svg$/,
			// use: ['happypack/loader?id=svg']
			use:['svg-url-loader']
		},{
			test: /\.less$/,
			include: /node_modules/,
			// use: ['happypack/loader?id=antdLess'],
			use: [
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
		},{
			test: /\.less$/,
			include: path.resolve(__dirname, 'app/style'),
			// use: ['happypack/loader?id=less']
			use: [
				'style-loader',
				'css-loader',
				postCssLoaderCfg,
				{
					loader: 'less-loader',
					options: {
						javascriptEnabled: true
					}
				}
			]
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
		new htmlWebpackHarddiskPlugin(),
		new webpack.NamedModulesPlugin(),
		// new happypack({
		// 	id: 'svg',
		// 	loaders: ['svg-url-loader']
		// }),
		// new happypack({
		// 	id: 'babel',
		// 	loaders: ['babel-loader?cacheDirectory']
		// }),
		// new happypack({
		// 	id: 'antdLess',
		// 	loaders: [
		// 		'style-loader',
		// 		'css-loader',
		// 		{
		// 			loader: 'less-loader',
		// 			options: {
		// 				javascriptEnabled: true,
		// 				modifyVars: antdTheme
		// 			}
		// 		}
		// 	]
		// }),
		// new happypack({
		// 	id: 'less',
		// 	loaders: [
		// 		'style-loader',
		// 		'css-loader',
		// 		postCssLoaderCfg,
		// 		{
		// 			loader: 'less-loader',
		// 			options: {
		// 				javascriptEnabled: true
		// 			}
		// 		}
		// 	]
		// })
	],

	// 动态监听配置
	watchOptions: {
		ignored: /node_modules/,
		aggregateTimeout: 300,
		poll: 1000
	}
};

module.exports = WebpackCfg;


// "@babel/plugin-proposal-class-properties": "^7.7.0",
//     "@babel/plugin-proposal-decorators": "^7.7.0",
//     "@babel/plugin-proposal-do-expressions": "^7.6.0",
//     "@babel/plugin-proposal-export-default-from": "^7.5.2",
//     "@babel/plugin-proposal-export-namespace-from": "^7.5.2",
//     "@babel/plugin-proposal-function-bind": "^7.2.0",
//     "@babel/plugin-proposal-function-sent": "^7.7.0",
//     "@babel/plugin-proposal-json-strings": "^7.2.0",
//     "@babel/plugin-proposal-logical-assignment-operators": "^7.2.0",
//     "@babel/plugin-proposal-nullish-coalescing-operator": "^7.4.4",
//     "@babel/plugin-proposal-numeric-separator": "^7.2.0",
//     "@babel/plugin-proposal-optional-chaining": "^7.6.0",
//     "@babel/plugin-proposal-pipeline-operator": "^7.5.0",
//     "@babel/plugin-proposal-throw-expressions": "^7.2.0",
//     "@babel/plugin-syntax-dynamic-import": "^7.2.0",
//     "@babel/plugin-syntax-import-meta": "^7.2.0",
//     "@babel/plugin-transform-runtime": "^7.6.2",
//     "@babel/polyfill": "^7.7.0",
//     "@babel/preset-env": "^7.7.1",
//     "@babel/preset-react": "^7.7.0",
//     "@babel/runtime": "^7.7.2",
//     "@babel/runtime-corejs2": "^7.7.2",

// "env": {
// 	"location": {
// 		"plugins": [
// 			[
// 				"react-transform",
// 				{
// 					"transforms": [
// 						{
// 							"transform": "react-transform-catch-errors",
// 							"imports": [
// 								"react",
// 								"redbox-react"
// 							]
// 						},
// 						{
// 							"transform": "react-transform-hmr",
// 							"imports": [
// 								"react"
// 							],
// 							"locals": [
// 								"module"
// 							]
// 						}
// 					]
// 				}
// 			]
// 		]
// 	}
// }