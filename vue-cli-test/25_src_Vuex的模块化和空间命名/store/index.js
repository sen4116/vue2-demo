//引用vue
import Vue from 'vue'
//引用vuex
import Vuex from 'vuex'

import countOptions from './count'
import personOptions from './person'




Vue.use(Vuex)
// 创建store实例
export default new Vuex.Store({
    modules: {
        counts: countOptions,
        persons: personOptions
    }
})

