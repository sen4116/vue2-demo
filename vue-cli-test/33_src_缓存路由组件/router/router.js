// 引用VueRouter
import VueRouter from 'vue-router';
// 引用路由展示组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Details from '../pages/Details'
import newDetails from '../pages/newDetails'


const router = new VueRouter({
    routes :[
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children:[
                {
                    path:'news',
                    component:News,
                    children:[{
                        name:'key2',
                        path:'newDetails',
                        component:newDetails,
                        props($route){
                            return {
                                id:$route.query.id,
                                title:$route.query.title
                            }
                        }
                    }]
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'key1',
                            // path:'details/:id/:title',//使用占位符声明接收params参数
                            path:'details',
                            component:Details,
                            // 第一个种写法,对象写法.该对象中所有的key-value的组合最终都会通过props传给Details组件
                            // props:{id:666,title:'你好'}

                            // 第二种写法,布尔值,当值为true时,把路由接收到的所有params参数通过props传给details组件
                            // props:true,     
                            //布尔值只能搭配 params使用并且需要在path路径中需要写好占位符

                            // 第三种写法,函数式,该函数返回的对象中每一足key-value都会通过props传给details组件
                            // 函数式中的第一个参数就是 this.$route(唯一的路由)   
                            // 函数式只能搭配query传参使用  注意传值也得是query属性
                            props($route){
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

// 导出router
export default router
