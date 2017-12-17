

var fs = require('fs');

/**
 * 第一个参数：写入文件的路径
 * 第二个参数：要写入的数据
 * 第三个参数：可选 编码类型  一般无需设置会自动跟你写入的数据转换类型
 * 第四个参数：回调函数  err：错误信息
 */
fs.writeFile('./a.txt','大家好，我是黑马颜值担当',function(err){
    if(err){
        throw err;
    }
    console.log('success');
});

fs.appendFile('./a.txt','大家好，我是黑马罗大佑',function(err){
    if(err){
        throw err;
    }
    console.log('追加数据成功');
});