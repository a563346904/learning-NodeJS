/**
 * Created by dllo on 17/7/31.
 */
var fs = require('fs');

//1.读取文件
//参数1：路径：可以为相对也可以绝对
//参数2 选项：读取文件编码格式 默认为2进制（Buffer）
//参数3 回调函数，包含两个参数error和data
//      其中data为读取内容的结果

fs.readFile('./1.txt','utf-8',function (err,data) {
    if (err) return
    console.log(data)
});
var options = {
    //flag 默认为'w'覆盖
    //          'a'追加
    flag:'a'
}
//2.写入文件
//参数1 路劲
//参数2 写入内容
//参数3 选项： flag
fs.writeFile('./1.txt',123456,options,function (error) {
    console.log(error)
})
//3.追加文件内容
fs.appendFile('./1.txt','天儿不错',function() {

})
//删除文件
// fs.unlink('01.NodeJS基础/1.txt');

//5创建文件
fs.createWriteStream('./1.txt');

//6创建文件夹
// fs.mkdir('file',0000)

//7.修改文件夹/文件权限
// fs.chmod('./file',0777)

//8.移除文件夹
fs.rmdir('./file');