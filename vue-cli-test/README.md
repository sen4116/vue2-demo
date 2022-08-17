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

7.注意：通过`this.$refs.xxx.$on('eventName',callback)`绑定自定义事件时，回调函数<font color=red>要么配置在methods中，要么就是回调函数就使用箭头函数，</font>否则this**`指向会出现问题`**



## 10.全局事件总线

1.一种组件间通信的方式，适用于<font color="red">任意组件间通信</font>

2.安装全局事件总线：

```
new Vue({
	...
	beforeCreate(){
		Vue.peototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm 
	}
	...
})
```

3.使用事件总线

​	1.接收数据：A组件想要接收数据，则在A组件中给$bus 绑定自定义事件，事件的<font color="red">回调留在A组件自身</font>

```
methods(){
	demo(data){
		...
	}
}
mounted: {
	this.$bus.$on('eventName', demo)
}
```

​	2.提供数据（触发自定义事件）：`this.$bus.$emit('eventName',携带数据)`

4.最好在beforeDestroy钩子中，用$off去解绑<font color="red">当前组件所用到的事件</font>



## 11.消息订阅与发布（pubsub）

1.一种组件间通信的方式，适用于<font color="red">任意组件间通信</font>

2.使用步骤：

​	1.安装pubsub：`npm i pubsub-js`

​	2.引入	`import pubsub from 'pubsub-js'`

​	3.接收数据：A组件想接收数据，则在A组件中订阅消息，订阅的<font color="red">回调留在A组件自身</font>

​	

```
methods：{
	demo(data){}
}
...
mounted(){
	this.pid = pubsub.subscribe('eventName',this.demo)//订阅消息
},
beforeDestroy(){
	pubsub.unsubsrcibe(this.pid) //取消订阅
}
```

4.提供数据：`pubsub.publish('eventName',数据)`

5.最好在beforeDestroy钩子中，用`pubsub.unsubsrcibe(this.pid)` 去<font color="red">取消订阅</font>



## 12.nextTick

1.语法：`this.$nextTick(callback)`

2.作用：在下一次DOM更新结束后执行其指定的回调

3.使用场景：当改变数据后，要基于更新后的新DOM经行某一些操作，要在nextTick所指定的回调函数中执行  ===> 可以理解为：执行方法中，<font color="red">有操作更新DOM数据和操作原生DOM事件的同时，</font>Vue会先将方法执行完，不会立即去更新DOM，从而导致操作原生DOM事件没有生效，所以此时就应该使用nextTick全局api



## 13.Vue封装得过度与动画

1.作用：在插入、更新或者移除DOM元素时，在合适的时候给元素添加样式类名。

2.图示

![image-20220811172536340](https://picgo-image-sen.oss-cn-zhangjiakou.aliyuncs.com/Typora/202208111725347.png)

3.使用场景：

Vue 提供了 `transition` 的封装组件，在下列情形中，可以给任何元素和组件添加进入/离开过渡

- 条件渲染 (使用 `v-if`)
- 条件展示 (使用 `v-show`)
- 动态组件
- 组件根节点

4.写法

1）准备好样式：

- 元素进入的样式：
  1. v-enter :进入的起点
  2. v-enter-active :进入执行的过程
  3. v-enter-to :进入的终点

- 元素离开的样式：
  1. v-leave :离开的起点
  2. v-leave-active :离开执行的过程
  3. v-leave-to :离开的终点



2）使用`<transition>`包裹要过度的元素，并且配置name属性，确保唯一性

```
<transition-group name="firstBox" appear>
        <div v-show="!isBox" class="boxTwo" key="1">我陈平安有一🗡</div>
        <div v-show="isBox" class="box" key="2">你好呀！李银河(test3)</div>
</transition-group>
```



3）备注：若是多个元素需要过度，则需要使用:`<transition-group>`,且每一个元素都要指定key值



## 14.Vue的请求代理 

![image-20220814105942678](https://picgo-image-sen.oss-cn-zhangjiakou.aliyuncs.com/Typora/202208141059075.png)

### Vue脚手架配置

#### 方法1：

在vue.config.js添加如下配置

```
devServer: {
    proxy: 'http://localhost:4000'
}
```

说明:

1. 优点：配置简单，请求资源直接发给前端（8080）即可
2. 缺点：不能配置多个代理，不能灵活的控制请求是否走代理
3. 工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器（优先匹配前端资源）

#### 方法2：

在vue.config.js添加如下配置

```
devServer: {
    proxy: {
      // 通过代理前缀区别代理服务配置  /fiction
      '/fiction': {
      	//目标请求地址
        target: 'http://localhost:8001',
        ws: true,
        changeOrigin: true,
        // pathRewrite（对象/函数）重写目标的 url 路径，确保返回时路径。对象键将用作正则表达式以匹配路径。
        pathRewrite:{'^/fiction':''}
      },
      '/car': {
        target: 'http://localhost:8002',
        pathRewrite:{'^/car':''}
      }
    }
  }
  
  changeOrigin: 默认值为true，服务器收到的请求头中的host跟服务器ip地址一致，若为false，则会暴露请求服务的ip
  
```

说明：

1. 优点：可以配置多个代理，且可以灵活的控制请求时候走代理
2. 缺点：配置略微繁琐，请求资源时必须加前缀



## 15.插槽

1.作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于 <font color="red"> 父组件 ===> 子组件</font>

2.分类：默认插槽、具名插槽、作用域插槽

3.使用方式：

> 1.默认插槽

```
父组件中：
<Category title="美食">
<!-- 
向子组件的插槽传入内容
-->
	<div>
		<ul v-for="(item, index) in foods" :key="index">
			<li>{{ item }}</li>
		</ul>
	</div>
</Category>

子组件中：
<div>
	<slot>插槽默认内容</slot>
</div>
```

> 2.具名插槽

```
父组件中：
<Category title="美食">
<!-- 
向子组件的插槽传入内容
-->
	<template v-slot:插槽名>
        <div>
            <ul v-for="(item, index) in foods" :key="index">
                <li>{{ item }}</li>
            </ul>
        </div>
	</template>
</Category>

子组件中：
<div>
	<slot name="插槽名">插槽默认内容</slot>
</div>
```

> 3.作用域插槽

🎇🎇🎇

理解：<font color="red">数据在子组件本身，但是根据数据生成的结构需要组件的使用者来决定。</font>(foods数据在子组件中，但是数据所遍历出来的结构有父组件决定)

```
父组件中
<Category title="美食">
	<template slot-scope="value">
		<div>
			<ul v-for="(item, index) in value.foods" :key="index">
				<li>{{ item }}</li>
			</ul>
		</div>
	</template>
	<template v-slot:key1="{sex}">{{sex}}</template>
</Category>

子组件中
<div>
	<slot :foods="foods" :fictions="fictions" :nba="nba"></slot>
    <slot name="key1" sex="男">我是默认插槽1</slot>
</div>
```

<font color="red">在Vue 2.6版本中template模板 slot属性被遗弃</font> 

建议采用   ✨✨✨ <font color="blue">条件在template标签中使用</font>

v-slot:default="插槽名"   ===> 默认插槽写法

v-slot:插槽名  或  #插槽名 ===>  具名插槽写法  

v-slot:插槽名=“{data:slotData}”   ===>  作用域解构插槽写法（slotData: 子组件插槽传入的值）

v-slot:[dynamicSlotName]  ===>  动态插槽名 （dynamicSlotName：需要在父组件中定义）



## 16.vuex

1.概念：
