/**
 * Created by dllo on 17/8/1.
 */

//1.__dirname  完整文件夹目录
console.log(__dirname)
//2.__filename  完整当前文件路径
console.log(__filename)
//3.exports  module.exports 导出模块

// 4. require 引入模块

// 5. console 控制台

// 6. global 全局变量
// 注意：尽量不要在 global 中存放内容
// console.log(global);

// 7. module
module.exports.name = '哈哈';
// console.log(module)

// require 和 exports 以及 module.exports
// 1. 核心模块在引用时，不需要添加路径 。直接使用模块名
// 2. 自行编写的模块，需要添加路径

//require 引入模块，引入的为模块中exports部分的内容
//exports 导出，导出的是对象
var A = require('./A');
console.log(A)

// exports 和 ,module.exports的区别
// 1.默认情况下，exports = module.exports
// 2.require 对应的是module.exports
// 3.当给exports或module.exports赋值对象时
//   1>如果给exports赋值   没有给module.exports赋值    结果 导出模块在被引入时为空
//   2>如果给module.exports赋值 ，不给exports赋值      结果：后续再调用exports.属性时，无效