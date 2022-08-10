/*
  该文件是整个项目的入口文件
*/
// 引用Vue
import Vue from 'vue'
// 引用App组件，它是所有组件的父组件
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建全局事件总线 原理：VueComponent.prototype.__proto__  ===  Vue.prototype
// 第一种方法
// const Demo = Vue.extend({});
// const d = new Demo() // 创建VueComponent
// Vue.prototype.x = d //将创建好的VC放在 Vue 显示原型属性上

// 全局事件总线  
// 缺点： 
// 1.绑定的事件名可能会冲突，所以一般在src里需要创建config 文件 里等得config.js文件去说明你用了那些事件名
// 2.在组件销毁之前需要将绑定的事件解绑

//创建Vue的实例对象---vm 
new Vue({
   //将aap组件放入容器中，调用了vm.$mount(),挂载容器
  render: h => h(App), 
  beforeCreate() {
    Vue.prototype.$bus = this //第二种写法 ===> 第二种方法最常用
  },
}).$mount('#app')
//$mount 挂载容器
