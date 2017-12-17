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
    console.log('接收到一个请求');
   // console.dir(req);
    console.log(req.url);

    var url = req.url;

    //响应客户端数据
    //req的路径一定时以 / 开头
    /**需求：如果路径是 /home  响应返回  'welcome to home'
     * 如果路径是  /blackhorse  响应返回 '黑马程序员'
     * 如果路径是  /  响应返回首页  h1标签
     * */
    if(url === '/home'){
        res.end('welcome to home');
    }else if(url === '/blackhorse'){
        res.end('黑马程序员');
    }else if(url === '/'){
        res.end('<h1>index</h1>');
    }else{
        res.end('404 not found' + url);
    }

  
});
//4.监听ip+端口号
server.listen(3000,function(){
    console.log('服务器启动成功');
});