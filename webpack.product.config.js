/**
 * webpack生产配置文件
 * author : MinterLee@hotmail.com
 * date : 2017.12.26
**/
var webpack = require('webpack');
var baseConfig = require('./webpack.config.js');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

baseConfig.devtool = 'cheap-module-source-map';
baseConfig.mode = 'productioin';

// 生产环境追加sourceMap和压缩
baseConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('PROD')
  }),
  new UglifyJSPlugin({
    cache: true,
    sourceMap: true,
    uglifyOptions: {
      compress: {
        warnings: false,  //删除无用代码时不输出警告
        drop_console: true,  //删除所有console语句，可以兼容IE
        collapse_vars: true,  //内嵌已定义但只使用一次的变量
        reduce_vars: true,  //提取使用多次但没定义的静态值到变量
      },
      output: {
        beautify: false,
        comments: false
      }
    }
  })
);

module.exports = baseConfig;