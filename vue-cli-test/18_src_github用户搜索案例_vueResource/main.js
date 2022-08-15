/*
  该文件是整个项目的入口文件
*/
// 引用Vue
import Vue from 'vue'
// 引用App组件，它是所有组件的父组件
import App from './App.vue'
// 引用Vue-resource
import vueRsourse from 'vue-resource'
// 关闭Vue的生产提示
Vue.config.productionTip = false

// 在实例中 $http 就是请求插件   vue-resource
Vue.use(vueRsourse)
//创建Vue的实例对象---vm 
new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
//$mount 挂载容器
