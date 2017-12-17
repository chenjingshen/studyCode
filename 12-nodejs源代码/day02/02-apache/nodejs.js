

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

    //url是一个字符串，我们根据路径字符串的不同而做出不同的处理
    if(req.url === '/'){
        //如果没有任何路径，则url只是一个 /  ，我们响应一个html文件
        fs.readFile(path.join(__dirname,'home.html'),function(err,data){
            if(err){
                res.end('服务器内部错误');
            }
            res.end(data);
        })
      
    }else if(req.url === '/home.css'){
        fs.readFile(path.join(__dirname,'home.css'),function(err,data){
            if(err){
                res.end('服务器内部错误');
            }
            res.end(data);
        })
    }else if(req.url === '/images/01.gif'){
        fs.readFile(path.join(__dirname,'images','01.gif'),function(err,data){
            if(err){
                res.end('服务器内部错误');
            }
            res.end(data);
        })
    }else if(req.url === '/images/01.jpg'){
        fs.readFile(path.join(__dirname,'images','01.jpg'),function(err,data){
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