//1.导入HTTP模块
var http = require('http');

var fs = require('fs');
var path = require('path');
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
    console.log('接收到一个请求');
   // console.dir(req);
    console.log(req.url);

    var url = req.url;
    //响应客户端数据
    //响应返回html文件
    /**1.使用fs模块读取文件数据
     * 2.响应返回读取到的文件的数据
     * */

     
    if(url === '/a'){
        //1.读取文件
        fs.readFile(path.join(__dirname,'home.html'),function(err,data){
            if(err){
                throw err;
            }
            //2.响应返回读取到的数据(二进制)
            res.end(data);
        });
    }else if(url === '/11111'){
        //1.读取文件
        fs.readFile(path.join(__dirname,'11111.png'),function(err,data){
            if(err){
                throw err;
            }
            //2.响应返回读取到的数据(二进制)
            res.end(data);
        });
    }
    else{
        res.end('404 not found' + url);
    }

});
//4.监听ip+端口号
server.listen(3000,function(){
    console.log('服务器启动成功');
});