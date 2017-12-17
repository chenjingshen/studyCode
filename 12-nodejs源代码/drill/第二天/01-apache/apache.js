var fs=require('fs');
var path=require('path');
var http=require('http');
// 创建服务器
var server=http.createServer();
server.on('request',function(req,res){

    console.log(req.url);
    if(req.url==='/'){
        fs.readFile(path.join(__dirname,'home.html'),function(err,data){
            if(err){
                res.end('服务器内部错误');
            }
            res.end(data);
        })
    }else if(req.url.indexOf('/resourse')==0){
        // res.writeHead(200,{
        //     'content-Type':'text/plain;charset=utf-8'
        // })
        fs.readFile(path.join(__dirname,req.url),
        function(err,data){
            if(err){
                res.end('服务器内部错误');
            }
            res.end(data);
        })
    }else{
        res.end('404 not found' + req.url);
    }

})
server.listen(3000,function(){
    console.log('服务器启动成功');
})