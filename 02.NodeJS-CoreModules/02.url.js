/**
 * Created by dllo on 17/8/1.
 */
var url = require('url');

//定义一个url
var baiduURL = 'http://www.baidu.com/1/img/1.jpg?width=200&height=200#host';

//1.解析url
var urlJson =  url.parse(baiduURL);
console.log(urlJson);

var urlObj = {
    protocol:"http:",
    host    :'www.baidu.com',
    port    :8080,
    pathname: '/2/text/1.txt',
    search  :'?name=zhangsan&age=20'

}
//2.格式化url对象
var urlStr = url.format(urlObj);
console.log(urlStr);