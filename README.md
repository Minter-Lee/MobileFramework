# MobileFramework
移动端架构，包括适配适配、路由、Mobx状态管理等

1. 打包使用webpack，本地开发时可用npm run startDev ,来运行webpack-dev-server,进行开发。
2. 生产环境打包使用中加入了ugly和sourceMap，保证代码压缩等问题
3. 为了方便搭建环境这里面使用了Antd组件库
4. 已经加入淘宝前端适配方案，但是做了一些小修改，压缩后直接copy到主页上了
5. 本项目样式使用less，但是未提供px2rem，用sublime的cssrem插件替代了
6. 加入了Mobx的相关代码，但是影响高阶组件的使用了，用了好多形式，勉强单独的Store传递给高阶组件来完成相关判定操作，这部分结合的还不是很好，后续有时间的情况下还会进一步去优化这种形式，目前可以通过若干配置完成页面切换间的loading统一管理。
7. Mobx用起来确实要方便很多，许多内容很直接，因为抽象的多，所以能改的地方也少，但是上手较快，就目前来讲用起来还不错，虽然和高阶组件的通信有点儿冲突，但至少还有些方案来解决，期待更多的使用，更多的问题和坑和方案的诞生。

# 第二版

#### 软件架构
软件架构说明
##### 项目打包
采用webpack4.x版本，使用happypack增效打包过程，构建了webpackdevserver本地开发服务，使用postcss处理前端适配方案，升级为babel7处理代码转义，后续将加入动态加载模块，DLL优化打包等内容。
##### 项目技术
主栈技术采用react，项目的路由管理为react-router5.x，使用分布式路由管理项目所有页面。react状态管理工具采用mobx5.x。前端适配方案采用viewport方案，字体采用MideaQuery进行修正，border问题暂时忽略。支持react hooks功能。
##### 技术规范
大量的规范已经使用eslint进行了配置，开发者需要保证eslint check后没有红色error警告，若对规则有异议请找minter.li@boldseas.com，协商解决。
任何项目，都是靠团队不断迭代维护了，但是每一个开发者代码风格，不可能完全相同，我们需要的是，保证我们开发的代码，要安全、稳定、可读性高，这是一个循序渐进的过程，规范框架很多，在此不再赘述。
##### 项目主要目录介绍

├── app
│   ├── bundles
│   │   ├── indexBundle.js		———————— 打包文件
│   │   └── vendors.js			———————— 公共文件，webpack中配置
│   ├── images					———————— 图片目录，内部按照使用目的或业务频道进行目录规划
│   ├── index.html
│   ├── indexTpl.html
│   ├── scripts
│   │   ├── common				———————— 公共组件，用于各个业务频道的通用组件
│   │   │   └── CommonNavBar.js
│   │   ├── index.js
│   │   ├── routes				———————— 路由相关文件
│   │   │   ├── history.js
│   │   │   ├── homeRoutes.js
│   │   │   └── routes.js		———————— 主路由文件，包含基本路由校验和页面布局
│   │   ├── store				———————— 公共组件使用store目录
│   │   │   └── CommonNavBarStore.js
│   │   ├── tools				———————— 公共工具
│   │   │   └── BSFetch.js		———————— 全局fetch对象，会对标准接口做公共处理
│   │   └── views				———————— 视图目录，第一级为业务频道，第二级为container、component等视图分层目录
│   │       ├── error
│   │       │   └── Error404PageView.js
│   │       ├── home
│   │       │   └── HomePageView.js
│   │       └── login
│   │           ├── components		———————— 存储container使用的component
│   │           └── containers		———————— 即为路由配置的PageView
│   │               └── SSOPageView.js
│   ├── style
│   │   ├── base.css					———————— 全局基本样式，主要是清除各大浏览器标签默认样式
│   │   ├── base.less					———————— 基础less，定义了全局使用的颜色等参数，方便多主题定制
│   │   ├── common						———————— 公共组件对应的样式目录
│   │   │   └── commonNavBar.less		
│   │   ├── error
│   │   │   └── error404Page.less
│   │   └── login
│   │       └── ssoPage.less
│   └── test								———————— 假数据接口
│       └── getInitialInfo.json
├── package.json							———————— 项目相关配置文件
├── postcss.config.js
├── webpack-dev-server.js
├── webpack.config.js
├── webpack.dev.config.js
└── webpack.product.config.js

#### 安装及使用

1. 	访问项目地址（[这里](https://gitee.com/l2l/l2l-fca-h5)），Fork项目后，进入自己的工作台，下载Fork的项目。
2. 	进入项目目录，执行npm install。安装项目所需的所有包。
3.	执行 npm run start 启动本地开发服务，访问localhost:8088进行本地开发，注意此地址可能变化，注意查看webpack-dev-server.js的配置信息

