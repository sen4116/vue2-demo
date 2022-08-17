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
const store = new Vuex.Store(
    actions,
    mutations,
    state
)

export default store