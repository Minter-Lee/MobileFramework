# MobileFramework
移动端架构，包括适配适配、路由、Mobx状态管理等

打包使用webpack，本地开发时可用npm run startDev ,来运行webpack-dev-server,进行开发。
生产环境打包使用中加入了ugly和sourceMap，保证代码压缩等问题
为了方便搭建环境这里面使用了Antd组件库
已经加入淘宝前端适配方案，但是做了一些小修改，压缩后直接copy到主页上了
本项目样式使用less，但是未提供px2rem，用sublime的cssrem插件替代了
