/**
 * Created by dllo on 17/8/2.
 */
    //题目：边界一个服务  读取对应文件内容

    //1.先创建服务
    //2.创建需要访问的文件
    //3.读取文件
    //4.获取url，根据url的pathname进行文件读取
    //5.引入url模块，进行request.url的解析
    //6.判断路径是否正确，正确200；错误404
    //7.拼接绝对路径  __dirname pathname
    //8.读取 response.end()
var fs = require('fs')
// fs.readFile('./http.txt','utf-8',function (err,data) {
//     console.log(data);
// })



var http = require('http')
var url = require('url')
var path = require('path')

var server = http.createServer(function (request,response) {
    var urlObj = url.parse(request.url);
    console.log(urlObj)
    //payhname query
    console.log(urlObj)
    var pathname = urlObj.pathname
    if (pathname === '/http.txt'){
        var finalPath = path.join(__dirname,pathname)
        fs.readFile(finalPath,'utf-8',function (err,data) {
            console.log(data);
            response.end(data)
        })

    } else {
        response.statusCode = 404
        response.end('文件未找到');
    }


})

server.listen(8080,function () {
    //监听完毕时，会去执行函数
    console.log('服务运行在http://localhost:8000')
})
