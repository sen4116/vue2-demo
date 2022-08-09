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
    
    props 接收数据被Vue浅监听，只监听接收数据存储的外层数据变化，没有监听数据底层的变化。
    如：接收是一个对象obj，而此时修改obj.a,这种情况Vue是监听不了的，但是修改obj = "xxx",这样操作会被Vue所监听
    
    也可以接受父组件传入的函数方法
    父组件：
    <Demo :propsName="methodsName"> methods:{methodsName(e){}}
    子组件：
    <childDemo >  props:['propsName'] 此时父组件事件在vc实例上
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

## 7.插件
    功能：用于增强Vue
    本质：包含install方法的一个对象，install的第一个参数是Vue构造函数，第二个以后的参数是插件使用者传递的数据
    定义插件：
        对象.install = function(){
            // 1. 添加全局过滤器
            Vue.filter()
    
            // 2.添加全局指令
            Vue.directive()
    
            // 3.配置全局混入
            Vue.mixin()
    
            // 4.添加实例方法
            Vue.prototype.$myMethod = function(){}
            Vue.prototype.$myProperty = xxx
        }
    使用插件：Vue.use()

## 8.组件样式书写 scoped
    作用：让样式在局部生效，防止文件之间的样式名冲突
    写法：<style scoped>

## 9.组件的自定义事件

1.一种组件间通信的方式，适用于：<font color=red>子组件 ===> 父组件</font>

2.使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件(<font color=red>事件回调在A中</font>)

3.绑定自定义事件：

​	1.第一种方式：在父组件中：`<Demo @事件名="回调函数" />`	或者	`<Demo v-on:事件名="callback">` 

​	2.第二种方式：在父组件中

```
<Demo ref="demo" />
......
methods(){
	this.$refs.demo.$on('事件名',callback)
	//若想让自定义事件只能触发一次，可以使用 $once 或者是 在标签里使用修饰符 .once
	//this.$refs.demo.$once('eventName',callback)
}
```

4.触发自定义事件： `this.$emit('eventName',callback)` <font color=blue>（在子组件中使用）</font>

5.解绑自定义事件：`this.$off()`  	若 `this.$off()` 中没有传eventName,那么则会清除子组件标签中所有绑定的自定义事件

```
this.$off() //清除所有
this.$off('eventName') //清除指定自定义事件
this.$off(['eventName'....]) //清除多个自定义事件
```

6.组件上也可以绑定原生DOM事件，需要在子组件标签中使用`.native`修饰符

```
<Demo @click.native="callback" />
```

🎇🎇🎇

7.注意：通过`this.$refs.xxx.$on('eventName',callback)`绑定自定义事件时，回调函数<font color=red>要么配置在methods中，要么就是回调函数就使用箭头函数，</font>否则this指向会出现问题
