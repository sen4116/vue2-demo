//引用 express 框架
const express = require('express')
// 创建实例对象
const app = express();
// 创建路由规则
app.get('/server', (request, response) => {
    console.log('有人请求了服务器1')
    let students = {
        students: [
            {
                id:'001',
                name: '陈平安',
                age: '18'
            },
            {
                id:'002',
                name: '阿良',
                age:'39'
            },
            {
                id:'003',
                name: '齐静春',
                age:'32'
            },
            {
                id:'004',
                name: '崔巉',
                age:'35'
            },
            {
                id:'005',
                name: '老夫子',
                age:'50'
            },
        ]
    }
    students = JSON.stringify(students)
    response.send(students)
})

app.listen(8001,()=>{
    console.log('服务器启动成功')
})