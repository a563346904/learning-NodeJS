/**
 * Created by dllo on 17/7/31.
 */

//'r' - 以读取模式打开文件。如果文件不存在则发生异常
//'r+' -以读写模式打开。如果文件不存在则发生异常。
//'rs+' - 以同步读写模式打开文件。命令操作系统绕过本地文件系统缓存
//这对NFS挂载模式下打开文件很有，因为他可以让你跳过潜在的旧本地缓存。他对I/O的性能有明显的影响，所以除非需要否则不要使用此标志
    //注意，这个不会使 fs.open()进入同步阻塞调用。如果那时你想要的，则应该使用fs.openSync()。
//'w'-以写入模式打开文件。文件会被创建(如果文件不存在)或截断(如果文件存在)
//'wx' - 类似 'w' ，但如果path存在，则失败
//'w+' - 以读写模式打开文件。文件会被创建(如果文件不存在)或截断(如果文件存在)
//'a' - 以追加模式打开文件。如果文件不存在，则会被创建
//'ax' - 类似于 'a' ， 但如果path存在，则失败。
//'a+' - 以读取和追加模式打开文件。如果文件不存在，则会被创建
//'ax+' - 类似于 'a+'，但如果path存在，则失败

// mode 可是这文件模式(权限和sticky位)，但只有当文件被创建时才有效。默认为0o666,可读写 该毁掉有两个参数(err,fd)




// fs.open(path, flags, [mode], [callback(err,fd)])
var fs = require('fs');

fs.open('./1.txt','r',function (err,fd) {
    if (err)  return
    console.log(fd);
    // console.log(123)
})


// fs.utimes(path,atime,mtime,callback)
//path<string> | <Buffer> | <URL>
//atime<integer>
//mitme<integer>
//callback<Function>
//改变指定的路径所指向的文件的文件时间戳
//注意：atime和mtime参数遵循以下规则
/*
* 1 值应该是一个以秒为单位的Unix时间戳。例如，date.now()返回毫秒，所以在传入前应该除以1000.
* 2 如果值是一个数值字符串，如'123456789'，则该值会被转换为对应的数字
* 3 如果只是NaN、Infinity或-Infinity，则会抛出错误
* */
//
// var atime = new Date();
// var mtime = new Date();
//
// fs.utimes('./1.txt',atime,mtime,function (err) {
//     if (err) return;
//     console.log('time update')
// })


// fs.watchFile(filename[,options],listener)
//filename <string> | <Buffer> | <URL>
/*
* options<Object>
*     persistent<boolean> Default:true
*     interval<integer>Default:5007
* */
//listener<Function>
//监听filename的变化。回调listener 会在每次访问文件时被调用

//options 参数可被省略。如果提供的话，它应该是一个对象 options对象可能包含一个名为persisent的布尔值，表明当文件正在被监听是，进程是否应该继续运行。options对象可以指定一个interval属性，表示目标应该每隔多少毫秒被轮询。默认值为{persistent：true，interval：5007}、
// These stat objects are instances of fs.Stat.这里的状态对象是fs.Stat
// fs.watchFile('./1.txt',{interval:20},function (curr,prev) {
//     if (Date.parse(prev.ctime)==0){
//         console.log('文件被创建')
//     } else if (Date.parse(curr.ctime) == 0){
//         console.log('文件被删除');
//     } else if (Date.parse(curr.mtime) != Date.parse(prev.mtime)){
//         console.log('文件有修改');
//     }
// })

// fs.unwatchFile(文件完整路径那个, 清除的监听器)
// 停止监视 filename 文件的变化。
// 如果指定了 listener则只移除特定的监听器。
//  否则，所有的监听器都会被移除，且已经有效地停止监视 filename。
// fs.unwatchFile('./1.txt', watchFile);

fs.link('./1.txt', './module/1.txt', function (error) {
    if(!error){
         console.log("成功");
     }else {
         console.error(error);
     }
})