//引用vue
import Vue from 'vue'
//引用vuex
import Vuex from 'vuex'

/*
    注册Vuex插件放在 store的原因：
    在vue的脚手架中，在解析main.js文件时，会将所有的import导入的代码全部整理放在一起，
    这样就会导致store中的代码会先执行，vuex注册插件后执行，所以才会导致报错
*/


//准备 actions 对象——响应组件中的用户的动作
const actions = {
    jia(context,value) {
        // context: 上下文对象
        // console.log(context,value)
        context.commit('Jia',value)
    },
    jian(context,value){
        context.commit('Jian',value)
    },
    jiaOdd(context,value){
        if(context.state.sum % 2){
            context.commit('Jia',value)
        }else{
            alert('当前和不是奇数')
        }
    },
    jiaWait(context,value){
        setTimeout(()=>{
            context.commit('Jia',value)
        },5000)
    }
}
//准备 mutations对象——修改state中的数据
const mutations = {
    Jia(state,value){
        state.sum += value
    },
    Jian(state,value){
        state.sum -= value
    },
}
//准备 state 对象——保存共享数据
const state = {
    sum: 1,
    name:'陈平安',
    fiction:'剑来',
}

// getter类似于vue的component
const getters= {
    bigSum(){
        return state.sum*10
    }
}

Vue.use(Vuex)
// 创建store实例
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

