/**
 * webpack配置文件
 * author : lei.li@fenbeitong.com
 * date : 2017.12.26
**/
var webpack = require('webpack');
var path = require('path');

var WebpackCfg = {
  context: path.join(__dirname, "app"),
  //页面入口文件
  entry: {
    "index": [
      "./scripts/index.js"
    ]
  },
  //出口文件输出配置
  output: {
    filename: '[name]Bundle.js',
    path: path.join(__dirname, 'app/bundles'),
    publicPath: "/"
  },
  //插件部分
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react',
      'ReactDom': 'react-dom',
      'Fetch': 'whatwg-fetch'
    })
  ],
  //模块
  module: {
    //加载器配置
    rules: [{
        test: /\.css$/,
        // 使用CSSmodule对CSS进行处理
        // loader: 'style-loader!css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5] '
        use:['style-loader','css-loader']
    },
    {
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: /node_modules/
    }, 
    {
      test: /\.(png|jpg)$/,
      use: 'url-loader?limit=8192' //图片文件小于8K，直接转码base64
    }, {
      test: /\.html$/,
      use: 'html-loader' //将html转为String
    }, {
      test: /\.less$/,
      use:['style-loader','css-loader','less-loader']
    }]
  }
}

module.exports = WebpackCfg;