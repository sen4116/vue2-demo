export default {
    install(Vue){
        // console.log('@@@插件install'+Vue) vue构造函数

        // 全局自定义指令
        Vue.directive('FBind',{
            // 指令与元素成功绑定时（初始化）
            bind(element,binding){
                element.value = binding.value * 2
            },
            // 指令所在元素被插入页面时
            inserted(element,binding){
                element.focus()
            },
            // 指令所在的模板被重新解析时
            update(element,binding){
                element.value = binding.value * 2
            }
        })

        // 全局过滤器
        Vue.filter('myFilter',(value)=>{
            value = value.toString()
            return value.slice(0,4)
        })

        // 全局混入
        Vue.mixin({
            data(){
                return {
                    x: 1,
                    y: 2, 
                }
            }
        })
    }
}