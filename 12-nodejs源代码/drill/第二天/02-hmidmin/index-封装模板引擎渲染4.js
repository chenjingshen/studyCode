// 导入模块
var http=require('http');
var path=require('path');
var fs=require('fs');
// 导入art-template模块
var template=require('art-template');
// 创建服务器
var server=http.createServer();
// 注册监听客户端请求事件
server.on('request',function(req,res){

    console.log(req.url);
    // 请求路径
    var urlPath=req.url;
    // 请求方法
    var method=req.method;
    // 给res对象添加一个渲染函数
    addRender(res);

    // 设计接口文档
    if(urlPath==='/'&&method==='GET'){
        res.render('heroList','hero');
    }else if(urlPath==='/heroAdd'&&method==='GET'){
        // 展示添加页面
        res.render('heroAdd');
    }else if(urlPath==='/heroAdd'&&method==='POST'){
        // 添加英雄到数据库
    }else if(urlPath==='/heroInfo'&&method==='GET'){
        // 展示英雄详情界面
    }else if(urlPath==='heroDelet'&&method==='GET'){
        // 删除英雄
    }else if(urlPath.indexOf('/images')===0||urlPath.indexOf('/node_modules')===0){
        // 访问静态资源
        fs.readFile(path.join(__dirname,urlPath),function(err,data){
            if(err){
                throw err;
            }
            res.end(data);
        })
    }else{
        res.end('404 not found'+urlPath)
    }
})

// 监听端口号
server.listen(3000,function(){
    console.log('服务器开启成功');
})

// 封装一个渲染函数，达到代码可以复用的目的
function addRender(res){
    res.render=function(tplFileName,jsonFileName){
        // 拼接html数据
        var tplPath=path.join(__dirname,'views',tplFileName)+'.html';
        // 如果没有第二个参数(json数据的文件名)则表示无需渲染该html，只需要将html读取出来直接返回即可
        if(!jsonFileName){
            fs.readFile(tplPath,function(err,tpldata){
                if(err){
                    throw err;
                }
                res.end(tpldata);
            })
        }else{
            var jsonPath=path.join(__dirname,jsonFileName)+'.json';
            // 读取json数据
            fs.readFile(jsonPath,'utf-8',function(err,jsondata){
                if(err){
                    throw err;
                }
                // 使用模板引擎渲染
                var html=template(tplPath,JSON.parse(jsondata));
                res.end(html);
            })
        }
    }
}