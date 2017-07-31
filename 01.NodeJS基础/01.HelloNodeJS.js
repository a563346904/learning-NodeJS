/**
 * Created by dllo on 17/7/31.
 */
console.log("Hello,Node.js")

// 引入Node核心模块 http服务
var http = require('http');
// http 创建服务器
// 回调函数
var server = http.createServer(function (request,response) {
    console.log('调用')
    // 响应结果
    response.end('<h1>Hello,Node.js</h1>')
})
//监听端口8080
server.listen(8080);
console.log('服务器运行在http://localhost:8080');