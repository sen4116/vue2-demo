const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 开启代理服务器   
  /*
    配置单个代理服务写法，
    缺点：不能控制请求是否走代理 和 只能请一个代理服务器
    执行顺序：请求资源时，先走本地的文件寻找，没有在找到再去请求服务器
  */ 
  // devServer: {
  //   proxy: 'http://localhost:8001'
  // }

  // 多个代理服务配置
  devServer: {
    proxy: {
      // 通过代理前缀区别代理服务配置  /fiction
      '/fiction': {
        target: 'http://localhost:8001',
        ws: true,
        changeOrigin: true,
        // pathRewrite（对象/函数）重写目标的 url 路径，确保返回时路径。对象键将用作正则表达式以匹配路径。
        pathRewrite:{'^/fiction':''}
      },
      '/car': {
        target: 'http://localhost:8002',
        pathRewrite:{'^/car':''}
      }
    }
  }
})
