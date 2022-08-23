// 引用VueRouter
import VueRouter from 'vue-router';
// 引用路由展示组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Details from '../pages/Details'


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
                    component:News
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'key1',
                            path:'details/:id/:title',//使用占位符声明接收params参数
                            component:Details
                        }
                    ]
                }
            ]
        }
    ]
})

// 导出router
export default router
