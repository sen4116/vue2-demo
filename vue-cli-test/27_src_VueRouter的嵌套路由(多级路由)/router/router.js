// 引用VueRouter
import VueRouter from 'vue-router';
// 引用路由展示组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'


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
                    component:Message
                }
            ]
        }
    ]
})

// 导出router
export default router
