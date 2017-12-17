var http = require('http');
// 创建服务器
var server = http.createServer();
server.on('request',function(req,res){
    console.log(req.url);
    if(req.url=="/1"){
        res.end('一去二三里');
    }else if(req.url=="/2"){
        res.end('沿村四五家');
    }else if(req.url=="/3"){
        res.end('亭台六七座');
    }else{
        res.end('你的输入找不到');
    }
})

server.listen(3000,function(){
    console.log("服务器开启成功");
})
