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
    routes: [
        {
            name: "guanyu",
            path: '/about',
            component: About,
            meta: { isAuth: false, title: '关于' }//元信息，程序员可以在路由组件中存信息
        },
        {
            name: "zhuye",
            path: '/home',
            component: Home,
            meta: { isAuth: false, title: '主页' },
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' },
                    children: [{
                        name: 'key2',
                        path: 'newDetails',
                        component: newDetails,
                        props($route) {
                            return {
                                id: $route.query.id,
                                title: $route.query.title
                            }
                        }
                    }]
                },
                {
                    name: "xiaoxi",
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '' },
                    children: [
                        {
                            name: 'key1',
                            path: 'details',
                            component: Details,
                            props($route) {
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
