/**
 * webpack生产配置文件
 * author : lei.li@fenbeitong.com
 * date : 2017.12.26
**/
var webpack = require('webpack');
var baseConfig = require('./webpack.config.js');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// 生产环境追加sourceMap和压缩
baseConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new UglifyJSPlugin({
    cache: true,
    sourceMap: true
  })
);

module.exports = baseConfig;