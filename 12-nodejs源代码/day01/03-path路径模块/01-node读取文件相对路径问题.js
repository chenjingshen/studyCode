

var fs = require('fs');

/**
 * 问题：在node中，我们的相对路径（。/）相对的不是当前js文件所在的路径，相对的是我们执行node命令所在的路径
 * 例如 在：’C:\Users\张晓坤‘  目录下执行node命令，那么此时的./就相当于  ’C:\Users\张晓坤‘ 路径
 * 
 * 解决方案：通过两个属性  __
 */

 console.log(__dirname);//获取当前js文件所在目录的文件夹绝对路径
 console.log(__filename);//获取当前js文件绝对路径


 var filePath = __dirname + '/a.txt';

 console.log(filePath);

fs.readFile(filePath,'utf-8',function(err,data){
    if(err){
        throw err;
    }
    console.log(data);
});