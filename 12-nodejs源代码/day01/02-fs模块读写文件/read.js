//nodejs使用的是ECMAJavascript标准，但是js语言本身无法胜任服务端开发的工作，所以nodejs作者写了一套js的工具包，可以让我们js开发服务端
    // nodejs的官方API底层基于c++编写的一套js的API

//在nodejs中工具包称之为模块（fs文件），这样做的好处有两点：1.便于维护 2.开发简单（要用什么功能就用什么模块）

//1.导入模块
//nodejs中所有的模块都是通过导入来使用
/**
 * require函数有一个参数：模块标识符
 * 返回值是一个对象，所有该模块的API都是这个对象的方法
 */
var fs = require('fs');

//模块得到的是一个对象，node官网中该模块所有的api都是这个对象的方法
// console.dir(fs);

//2.读取文件

/**
 * 第一个参数：path文件路径
 * 第二个参数：可选  数据编码类型  默认文件是二进制数据
 *  * 字符串：'utf-8'
 * 第三个参数：回调函数  err:报错信息  data：文件数据  读取的文件数据只能是两种 二进制和文本
 */
fs.readFile('./hello.txt','utf-8',function(err,data){
    if(err){
        //抛出异常  throw作用是停止nodejs程序，并且抛出异常
        throw err;
    };

    console.log(data);
});

console.log('11111');

fs.readFile('./hello.txt','utf-8',function(err,data){
    if(err){
        //抛出异常  throw作用是停止nodejs程序，并且抛出异常
        throw err;
    };
    console.log(data + '22222');
});

console.log('33333');