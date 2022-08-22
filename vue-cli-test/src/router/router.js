// 引用VueRouter
import VueRouter from 'vue-router';
// 引用路由展示组件
import About from '../components/About'
import Home from '../components/Home'

const router = new VueRouter({
    routes :[
        {
            path: '/about',
            component: About
        },
        {
            path: '/Home',
            component: Home
        }
    ]
})

// 导出router
export default router
