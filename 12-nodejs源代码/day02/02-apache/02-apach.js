

//fs模块：读写文件
var fs = require('fs');
//path模块：路径的拼接
var  path = require('path');
//http模块：搭建服务器
var http = require('http');


///搭建服务器：四个流程
/**1.导入模块
 * 2.创建服务器对象
 * 3.给服务器注册一个监听事件，监听客户端的请求事件request
 * 4.监听端口号
 */

 //创建服务器对象
 var server = http.createServer();

 //注册监听请求事件
 server.on('request',function(req,res){

    //当浏览器访问本机ip（192.168.33.43：3000）的时候，该方法就会被触发一次

    console.log(req.url);

    var urlStr = req.url;
    console.log(urlStr.indexOf('/resource'));

    //url是一个字符串，我们根据路径字符串的不同而做出不同的处理
    if(req.url === '/'){
        //如果没有任何路径，则url只是一个 /  ，我们响应一个html文件
        fs.readFile(path.join(__dirname,'home.html'),function(err,data){
            if(err){
                res.end('服务器内部错误');
            }
            res.end(data);
        })
    }
    //模拟实现apach服务器的功能：当网络请求的路径与托管的静态资源的目录中的文件路径一致时就会自动响应静态资源
    /**思路
     *第一步：判断这个网络请求是不是访问静态资源目录的请求
            * 判断url路径是以文件目录开头的
    第二步：根据url路径读取对应的文件并响应返回
     */
    else if(req.url.indexOf('/resource') == 0){

        console.log(path.join(__dirname,req.url));
        fs.readFile(path.join(__dirname,req.url),function(err,data){
            if(err){
                res.end('服务器内部错误');
            }
            res.end(data);
        })
    }
    else{
        res.end('404 not found' + req.url);
    }

 });

 //监听端口号
 server.listen(3000,function(){
     console.log('服务器启动成功');
 });