/**
 * Created by dllo on 17/8/1.
 */

var querystring = require('querystring');


//查询字符串
//http：//www.baidu.com/1/img?width=100&height=100
var string = 'width=100&height=200';
//1.将字符串解析成json 对象
//   参数1：要解析的字符串
//   参数2：链接方式  键值对 例 & key=value&key=value
//   参数3：键值间连接方式  例  = key = value
//   参数4：选项 解析函数 最大解析条数
var obj = querystring.parse(string);
//console.dir  打印对象
console.log(obj)
//2.stringify 将json对象字符串化
//   参数1：要字符串化的对象
//   参数2：链接方式  键值对 例 & key=value&key=value
//   参数3：键值间连接方式  例  = key = value
//   参数4：选项 字符串化函数
var json = {
    name: "xiaoming",
    age : 18
}
var query = querystring.stringify(json);
console.log(query)