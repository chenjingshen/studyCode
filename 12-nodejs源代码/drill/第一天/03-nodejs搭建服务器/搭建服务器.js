var http=require('http');
// 导入http模块
var server=http.createServer();
server.on('request',function(req,res){
    console.log(req.url);
    console.log(req.method);
})
server.listen(4000,function(){
    console.log('服务器启动成功');
})