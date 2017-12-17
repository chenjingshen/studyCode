var http=require('http');
// 创建服务器
var server=http.createServer();
server.on('request',function(req,res){
    console.log(req.url);
    var url=req.url;
    res.writeHead(200,{
        // plain普通的文本
        'content-type':'text/plain;charset=utf-8'
    })
    if(url==='/home'){
        res.end('welcome to home');
    }else if(url==='/blackhorse'){
        res.end('黑马程序员');
    }else if(url==='/'){
        res.writeHead(200,{
            'content-type':'text/html;charset=utf-8'
        })
        res.end('<h1>index</h1>');
    }else{
        res.end('404 not found'+url);
    }
})
// 监听ip+端口号
server.listen(3000,function(){
    console.log('服务器启动成功');
})