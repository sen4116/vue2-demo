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
                    beforeEnter: (to, from, next) => {
                        console.log('独享路由守卫激活')
                        console.log("111", to); //到达的目的地位置
                        // console.log("222",from); //前一步的位置或是来自于哪里
                        if (to.meta.isAuth) {
                            if (to.name == "xinwen" || to.name == "xiaoxi") { //鉴权
                                if (localStorage.getItem('userName') === 'asen') {
                                    next();
                                } else {
                                    alert('你没有该权限')
                                }
                            } else {
                                next()
                            }
                        } else {
                            next()
                            //     }
                        }
                    },
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



// 全局后置路由守卫，初始化执行，每次路由切换后执行,如果前置路由没放行，那么后置路由就执行不了
router.afterEach((to,from)=>{
    // console.log("111",to); //到达的目的地位置
    // console.log("222",from); //前一步的位置或是来自于哪里
    if(to.meta.title){
        document.title = to.meta.title;
    }else{
        document.title = "vue-cil-test"
    }
})
// 导出router
export default router
