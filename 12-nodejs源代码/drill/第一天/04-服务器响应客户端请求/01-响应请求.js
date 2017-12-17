var http=require('http');
// 创建服务器
var server=http.createServer();
server.on('request',function(req,res){
    console.log(req.url);
    console.log(res);
    res.end('我收到了你的请求');
})
server.listen(3000,function(){
    console.log('服务器启动成功');
})