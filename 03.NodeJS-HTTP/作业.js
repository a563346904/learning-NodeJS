/**
 * Created by dllo on 17/8/2.
 */


var fs = require('fs')
var http = require('http')
var url = require('url')
var path = require('path')

var server = http.createServer(function (request,response) {
    var urlObj = url.parse(request.url);
    var pathname = urlObj.pathname;
    console.log(urlObj.pathname)
    console.log(__dirname)
    if (pathname === '/2.jpg'){
        var finalPath = path.join(__dirname,pathname)
        fs.readFile(finalPath,'binary',function (err,data) {
            response.end(data,'binary')
        })
    } else {
        response.statusCode = 404
        response.end('文件未找到');
    }




})

server.listen(8080,function () {
    //监听完毕时，会去执行函数
    console.log('服务运行在http://localhost:8080')
})
