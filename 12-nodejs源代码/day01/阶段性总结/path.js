console.log(__filename);

//读取a.txt文件内容

var fs = require('fs');

var path = require('path');

//1.想要获取a.txt的绝对路径
    // 思路： a.txt的绝对路径 = 当前js文件（path.js）所在的文件夹路径 + a.txt

var path1 = path.join(__dirname,'b','a.txt');

console.log(path1);

fs.readFile(path1,'utf-8',function(err,data){
    console.log(data);
});