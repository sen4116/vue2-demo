/*
  该文件是整个项目的入口文件
*/
// 引用Vue
import Vue from 'vue'
// 引用App组件，它是所有组件的父组件
import App from './App.vue'

//引用VueRouter
import VueRouter from 'vue-router'
import router from './router/router'
// 关闭Vue的生产提示
Vue.config.productionTip = false

// 应用VueRouter插件
Vue.use(VueRouter)

//创建Vue的实例对象---vm 
new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  router:router
}).$mount('#app')
//$mount 挂载容器
