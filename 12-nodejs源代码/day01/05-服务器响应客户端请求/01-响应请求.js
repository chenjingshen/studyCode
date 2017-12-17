//1.导入HTTP模块
var http = require('http');
//2.创建服务器
var server = http.createServer();
//3.监听客户端请求
/**web开发本质六个字 请求处理响应
 * 请求：req:request
 * 处理：逻辑代码
 * 响应：res：respone
 * 
 */
server.on('request',function(req,res){
   // console.dir(req);
    console.log(req.url);

    //响应客户端数据

    //第一步：写入数据（服务器发给浏览器）
    // res.write('1');
    // res.write('2');
    // //注意：第二步 一定要结束响应，否则浏览器会一直等待响应
    // res.end();

    //上面两个步骤可以用下面一行代码代替
    //注意：服务端响应给客户端只能时两种数据  字符串和二进制 
    // var arr = ['1','2'];
    res.end('12');
});
//4.监听ip+端口号
server.listen(3000,function(){
    console.log('服务器启动成功');
});