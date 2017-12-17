

//1.导入http模块
var http = require('http');

//2.创建服务器
var server = http.createServer();

//3.给服务器注册一个监听客户端请求的事件
/**当服务器接收到客户端的请求的时候会调用该方法
 * 第一个参数：request 请求事件
 * 第二个参数：回调函数  
 *      * request:请求对象   客户端给服务器器的请求
 *      * response：响应对象   服务器响应给客户端的数据
 */

 //官网描述：每次接收到一个请求时触发。 注意，每个连接可能有多个请求（在 HTTP keep-alive 连接的情况下）。
server.on('request',function(req,res){
    //该方法每接收到一个请求时，会调用一次 ，会调用多次

    //获取客户端请求的路径
    console.log(req.url);//请求路径
    console.log(req.method);//请求的方法
});

//4.监听端口号
/**
 * 第一个参数：端口号  范围：0-65535   1024以下的被系统占用了
 * 第二个参数ip地址：可选参数   如果不写则默认为本机ip
 * ip地址作用：找到你的这台电脑  端口号：找到你的这台电脑的应用程序
 */
server.listen(3000,function(){
    console.log('服务器启动成功');
});