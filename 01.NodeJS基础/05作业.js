/**
 * Created by dllo on 17/7/31.
 */
//Assert米快主要用于断言。如果表达式不符合预期，就抛出一个错误
//改模块用于表写程序的单元测试用例，通过require('assert')调用

//这里const指的是常量
//常量是块级作用域，很想使用let语句定义的变量。敞亮的值不能通过重新赋值来改变，并且不能重新声明
const assert = require('assert');
//assert(value 表达式如果表达式不成立 抛出','后面的字符串)
console.assert(1 !== 100, '1绝对不等于100');

var a = 2;
var b = 3;
//assert.deepEqual:
//测试第一个参数是否 == 第二个参数，如果相等什么都不会抛出，
//如果不相等抛出AssertionError ：2 deepEqual 3

// assert.deepEqual(a,b);

//assert.deepStrictEqual:
//他和上面的一样，但是他判断用的是===
// assert.deepStrictEqual(a,b);

// assert.doerNotThrow
//第一个参数是function,第三个参数和第二个参数比较类型
//如果错误类型不相同，或error参数是undefined，则错误会被抛回给调用者.
assert.doesNotThrow(function () {
    console.log(a)
},TypeError,undefined);