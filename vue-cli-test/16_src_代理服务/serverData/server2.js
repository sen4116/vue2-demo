//引用 express 框架
const express = require('express')
// 创建实例对象
const app = express();
// 创建路由规则
app.get('/server', (request, response) => {
    console.log('有人请求了服务器2')
    let cars = {
        cars: [
            {
                id:'001',
                name: '奔驰',
                pic: '100'
            },
            {
                id:'002',
                name: '大众',
                pic:'30'
            },
            {
                id:'003',
                name: '奥迪',
                pic:'70'
            },
            {
                id:'004',
                name: '捷达',
                pic:'20'
            },
            {
                id:'005',
                name: '别克',
                pic:'60'
            },
        ]
    }
    students = JSON.stringify(cars)
    response.send(cars)
})

app.listen(8002,()=>{
    console.log('服务器启动成功')
})