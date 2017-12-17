//导入path路径模块
var path = require('path');


//拼接文件路径

//join方法会将多个参数组合成一个完整的路径
/**
 * join方法有两个好处
 * * 1.无需添加路径的分隔符，会自动根据当前系统的路径分隔符进行拼接（不同的系统路径分隔符是不一样  ）
 * * 2.它可以自动帮你讲错误的路径格式进行正确的转换  无论你在路径的前面怎样加分隔符都会被正确的转换
 */
var path1 = path.join(__dirname,'////////test','\\\\\\\a','b.txt');

console.log(path1);

//拓展  解析文件路径
//得到的是一个对象，对象记录的一个完整路径的五个部分
/**
 * * root：根磁盘（C://   D://）
* dir:文件所在文件夹路径 \04-源代码\02-Day\01-path路径模块
* base:文件的相对路径  helloworld.html
* ext:文件拓展名  html  js
* name:文件名  hellowworld
 */
console.log(path.parse(__filename));
