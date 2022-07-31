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

## 4.ref属性
    1.被用来给元素或子组件注册引用信息(id的替身)
    2.应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象(vc)
    3.使用方式： xxx是自定义绑定的名称
        打标识：<h1 ref="xxx"></h1> 或 <school ref="xxx"></school>
        获取：this.$refs.xxx
## 5.配置项props
    
    功能：让组件接收外部传过来的数据
    1.传入数据：
        <Demo name="xxx">
    2.接受数据：
        第一种方式（只接收）：
        props:['name]
        第二种方式(接收并限制类型)：
        props:{
            name:String
        }
        第三种方式(限制类型、限制必要性、指定默认值)
        props:{
            name:{
                type: String,//类型
                required: true,//必要性
                default: '陈平安',//默认值
            }
        }
    备注：✨✨✨
    props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，
    若业务需求确定修改，那么请复制props的数据到data中一份，然后去修改子组件data的数据

## 6.mixin(混入)
    功能：可以把多个组件公用的配置提取成一个混合对象
    使用方法：
        第一步：定义混合 创建js文件，暴露数据
        export default {
            data(){
                return{

                }
            },
            methods:{

            },
            mounted(){

            }
        }
        第二步：使用混入
            全局注册：Vue.mixin(valueName)
            局部注册：mixins:[valueName]
        
    备注：✨✨✨
    若被接收的组件中data属性名和mixin.js混合的data属性名一致，组件数据覆盖，混合数据 ===>接收组件优先级高
    mixin.js的生命周期和接收混合的组件执行顺序优先级===>混合的优先级更高