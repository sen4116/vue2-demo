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

### 1.vuex是什么？

1.概念：专门在Vue中实现集中式状态管理（数据）管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的一种方式，且适用于任意组件间通信。

2.Github地址：[vuejs/vuex: 🗃️ Centralized State Management for Vue.js. (github.com)](https://github.com/vuejs/vuex)



### 2.什么时候使用vuex

1. 多个组件依赖于同一个状态
2. ；来自于不同组件的行为需要变更同一状态



### 3.分析流程图

![image-20220817230416562](https://picgo-image-sen.oss-cn-zhangjiakou.aliyuncs.com/Typora/202208172304297.png)



> 属性分析

1. 有Actions、state、mutations这三大属性的前提是，必须在创建好的 store对象（实例化store对象）中使用。
2. state：对象类型，是存放共享对象的地方
3. actions：对象类型，当需要请求外网数据时，可以在此处调用ajax请求
4. mutations：对象类型，操作共享对象的方法，每个方法的第一个参数可以拿到state。第二参数是commit 传入的参数
5. dispatch、commit方法：是store提供的

> 执行步骤

1. state存放的共享数据被render方法自动更新到了 vue components组件上，当在组件对共享数据做操作，需要用手动调用dispatch方法（dispatch('事件名'，参数)），actions对象属性中存在的事件名方法被调用，在该事件方法执行完的最后一步调用commit（commit（'事件名'，参数）），mutations对象属性中存在的事件名方法被调用，该方法一般用作于对state的共享数据操作，操作完后vuex自动调用mutate方法将共享数据更新，state被更新的数据最终也会进过render方法更新在vue components组件上。
2. state存放的共享数据被render方法自动更新到了 vue components组件上，当在组件对共享数据做操作，可以直接调用commit（commit（'事件名'，参数）），mutations对象属性中存在的事件名方法被调用，该方法一般用作于对state的共享数据操作，操作完后vuex自动调用mutate方法将共享数据更新，state被更新的数据最终也会进过render方法更新在vue components组件上。

🗿🗿🗿 两个执行步骤区别在于：是否经过actions的处理。(如果组件操作明确自己的传值，就可以不要经过actions的处理)



### 4.搭建Vuex的环境

1.创建文件：`src/store/index.js`

```
//引用vue
import Vue from 'vue'
//引用vuex
import Vuex from 'vuex'

//准备 actions 对象——响应组件中的用户的动作
const actions = {}
//准备 mutations对象——修改state中的数据
const mutations = {}
//准备 state 对象——保存共享数据
const state = {}

/*
    注册Vuex插件放在 store的原因：
    在vue的脚手架中，在解析main.js文件时，会将所有的import导入的代码全部整理放在一起，
    这样就会导致store中的代码会先执行，vuex注册插件后执行，所以才会导致报错
*/
Vue.use(Vuex)

// 创建store实例
const store = new Vuex.Store({
	actions,
    mutations,
    state
})

//导出store
export default store
```

2.在`main.js`中创建vm传入store配置项

```
//引用store
import store from './store/index.js'
······
new Vue({
  render: h => h(App),
  //配置store
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
```



### 5.vuex的基本使用

1.初始化数据，配置actions、mutations、state，操作store.js文件

```
//引用vue
import Vue from 'vue'
//引用vuex
import Vuex from 'vuex'

//准备 actions 对象——响应组件中的用户的动作
const actions = {
	// context: 上下文对象，也可以在此方法调用actions中其他方法，用context.dispatch()
	jian(context,value){
        context.commit('Jian',value)
    }
}
//准备 mutations对象——修改state中的数据
const mutations = {
	Jian(state,value){
        state.sum -= value
    }
}
//准备 state 对象——保存共享数据
const state = {
	sum: 0,
}

// 创建store实例
const store = new Vuex.Store({
	actions,
    mutations,
    state
})
```

2.组件中读取Vuex的数据: `$store.state.sum`

3.组件中修改Vuex的数据：`$store.dispatch('actions的方法名',数据)` 或 `$store.commit('mutations中的方法名',数据)`

🧨🧨🧨

备注：若没有网络请求或其他业务逻辑，组件中也可以越过actions，即不写`dispatch'`,直接编写`commit`



### 6.四个map方法的使用

🎉🎉🎉 在使用的前提需要在组件中引用`import { mapState, mapGetters, mapMutations,mapActions} from "vuex";`

1.mapState方法：用于帮助我们映射`state`中的数据为计算属性，对于`this.$store.state`的简写

```
computed:{
	// 用于帮助我们映射state 中的数据为计算属性（对象写法）
    ...mapState({ name: "name", fiction: "fiction" }),
    
    // 用于帮助我们映射getters 中的数据为计算属性（对象写法）
    // ...mapGetters({ bigSum: "bigSum" }),
}
```

2.mapGetters方法：用于帮助我们映射`getter`中的数据为计算属性,对于`this.$store.getters`的简写

```
computed:{
	// 用于帮助我们映射getters 中的数据为计算属性（对象写法）
    // ...mapGetters({ bigSum: "bigSum" }),
    
    // 用于帮助我们映射getters 中的数据为计算属性（数组写法）
    ...mapGetters(["bigSum"]),
}
```

3.mapMutations方法：用于帮助我们生成与`mutations`对话的方法，即:包含`$store.commit(xxx)`的函数

```
methods:{
	//对象写法 key：调用方法名，value：mutations中对应的方法名， 🎆🎆🎆 不过此处是传不了参数的，mutations中对应方法接收的是event参数，所以想传值可以在调用的时候传
    ...mapMutations({increment:'Jia',decrement:'Jian'}),
    //数组写法，那么调用的方法名要与mutations对应的方法名一致
    // ...mapMutations(['Jia','Jian']),
}
```

4.mapActions方法：用于帮助我们生成与`actions`对话的方法，即:包含`$store.dispatch(xxx)`的函数

```
methods:{
    //对象写法 key：调用方法名，value：mutations中对应的方法名，
    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
     //数组写法，那么调用的方法名要与mutations对应的方法名一致
    // ...mapActions(["jiaOdd","jiaWait"])
}
```



### 7.Vuex模块化 + 命名空间

1.目的：让代码更好维护，让多种数据分类更加明确

2.修改`store.js`

```
const countAbout = {
 nameSpaced:true, //开启命名空间
 mutations:{...},
 state:{...},
 getters:{...},
 actions:{...}
}

//在vuex中模块化引用 modules中的key值是模块名，value是模块的内容
export default new Vuex.Store({
	modules:{
		count : countAbout
	}
})
```

3.开启命名空间，组件中读取state数据

```
//方式一：借助mapState读取
...mapState('counts',['name','fiction','sum']),
...mapState('persons',{personList:'personList'}),
//方式二：自己直接读取
this.$store.state.persons.personList
```

4.开启命名空间，组件中读取getters数据：

```
//方式一：借助mapGetters读取
...mapGetters('counts',["bigSum"]),
...mapGetters('counts',{bigSum:"bigSum"}),
//方式二：自己直接读取
this.$store.getters['persons/firstPersonName'].name
```

5.开启命名空间，组件中调用dispatch跟actions联系

```
//方式一：借助mapActions
...mapActions('counts',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
...mapActions('counts',['jiaOdd','jiaWait'])
//方式二：自己调用  dispatch(传入路径) 路径以模块名开头，在模块中找到actions里联系的方法
this.$store.dispatch('persons/addPersonServer')
```

6.开启命名空间，组件中调用commit跟mutations联系

```
//方式一：借助mapMutations
...mapMutations('counts',{increment:'Jia',decrement:'Jian'}),
...mapMutations('counts',['Jia','Jian'])
//方式二：自己调用 
this.$store.commit('persons/ADD_PERSON',personObj)
```

## 17.vue- router路由

### 1.vue-router的理解

​	vue的一个插件库，专门来实现SPA应用

### 2.对于SPA应用的理解

1. 单页Web应用（single page web application ，SPA）。
2. 整个应用只有一个完整的页面
3. 点击页面的导航链接<font color="red">不会刷新</font>页面，只会做页面的<font color=red>局部更新</font>。
4. 数据需要通过ajax请求获取

### 3.路由的理解

#### 1.什么是路由？

1. 一个路由就是一组映射关系（key-value）
2. key 为路径，value可能function 或 component

#### 2.路由分类

1. 后端路由：

   1）理解：value是function，用于处理客户端提交的提交。

   2）工作过程：服务器接收到一个请求，根剧**请求路径**找到匹配的函数来处理请求，返回响应数据。

2. 前端路由：

   1）理解：value是component，用于展示页面内容。

   2）工作过程：当浏览器的路径改变时，**对应的组件就会显示**
   
   

### 4.基本使用

1. 安装vue-router，命令npm i vue-router@版本号 vueRouter 3版本对应 vue2 ，vueRouter 4版本对应 vue3
2. 引用插件： `import VueRouter from 'vue-router'`
3. 应用插件：`Vue.use(VueRouter)`
4. 编辑`router.js`文件

```javascript
// 引用VueRouter
import VueRouter from 'vue-router';
// 引用路由展示组件
import About from '../components/About'
import Home from '../components/Home'
//创建router实例对象，去管理一组一组的路由规则
const router = new VueRouter({
    routes :[
        {
            path: '/about',
            component: About
        },
        {
            path: '/Home',
            component: Home
        }
    ]
})

// 导出router
export default router
```

5. 实现切换(active-class可以配置高亮样式)

   ```
   <router-link active-class="active" to="/about">About</router-link>
   ```

   <router-link>标签最后被vue解析成<a>标签,所以需要修改样式的话，最后应该是指向<a>标签

   ```css
   .nav > a {
     color: #fff;
     //去掉下划线
     text-decoration: none;
   }
   ```

6. 指定展示位置

   ```
   <router-view></router-view>
   ```

✨✨✨

备注：

1.路由组件和页面组件分开存放，页面组件存放在`component`文件夹中，路由组件存放在`pages`文件夹中

2.每个路由组件中的`vc(vueComponent)`实例上都是存在`$route`和`$router`,每个组件中`$router`是不一样的，存放的都是自己的信息，但是<font color=red>每个组件中$router是vue中唯一的router（</font>路由器）

3.当切换路由组件时，会将隐藏的路由组件进行销毁，显示的路由组件会被重新渲染
