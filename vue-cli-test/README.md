# vue-cli笔记

## 1.分析脚手架的目录结构

![image-20220729181028300](https://picgo-image-sen.oss-cn-zhangjiakou.aliyuncs.com/Typora/202207291810733.png)

    (1).gitignore: 配置git忽略文件不配git管理
    (2)babel.config.js：es6转es5转换文件(不需要自己动手改配置)
    (3)jsconfig.json：目录中存在jsconfig.json文件表示改目录是JavaScript项目的根目录。jsconfig.json的配置可以对你的文件所在目录下的所有js代码做出个性化支持。这是VS code 自己生成的。
    (4)package-lock.json: 项目版本控制文件，确定插件版本
    (5)package.json：项目说明书。里面有 node 指令说明 (scripts serve：运行，build：项目打包线上，lint：语法检查)、插件依赖(dependencies)
    (6)README.md: 项目介绍
    (7)vue.config.js: 可以配置vue的脚手架
    (8)src文件夹: 业务代码编辑区
    (9)src文件夹之assets文件：存放静态资源
    (10)src文件夹之components文件: 存放组件
    (11)src文件夹之App.vue: 所有组件的父组件
    (12)src文件夹之main.js：项目入口文件
    (13)public文件夹: 公用文件夹
    (14)node_modules文件夹: 插件包

## 2.关于不同版本的Vue
    (1)vue.js与vue.runtime.xxx.js的区别
        (a).vue.js 是完整的Vue。包含了核心功能(生命周期、指令) + 模版解析器
        (b).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能：没有模板解析器
    (2)vue.runtime.xxx.js如何渲染模板
        因为没有模板解析器，所以就不能使用template配置项，需要使用render函数接收到createElement函数去指定具体内容

## 3.vue.config.js配置文件
   >  使用命令：vue inspect > output.js 只能查看Vue脚手架的默认配置项
   >  使用vue.config.js可以对脚手架进行个性化定制，详情见 https://cli.vuejs.org/zh/