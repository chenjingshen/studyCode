var http=require('http');
var fs=require('fs');
var path=require('path');
// 导入template模板
var template=require('art-template');
// 监听数据请求事件
var server=http.createServer();
server.on('request',function(req,res){
    console.log(req.url);
    // 请求地址
    var urlPath=req.url;
    // 请求方法
    var method=req.method;
    
})