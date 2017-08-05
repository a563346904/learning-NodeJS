var http = require('http');
var server = http.createServer(function (req,res) {
    res.end('hello,node.js')
}).listen(8080,function () {
    console.log('服务器运行在8080上')
});