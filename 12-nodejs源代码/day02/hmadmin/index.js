//1.导入模块
var http = require('http');

var fs = require('fs');

var path = require('path');

//导入art-template模块
var template = require('art-template');

//2.创建服务器
var server = http.createServer();

//3.注册监听客户端请求事件
server.on('request',function(req,res){
    console.log(req.url);

    //请求路径
    var urlPath = req.url;
    //请求方法
    var method = req.method;

    //设计接口文档（路由）
    if(urlPath === '/' && method === 'GET'){
        /**模板引擎渲染流程
         * 1.读取要渲染的json数据
         *  * 注意：文件读取的数据只能是二进制和字符串，模板引擎渲染的参数是json对象
         * 2.调用art-template官方的API进行模板引擎渲染
         */
       //第一步 读取要渲染的数据
       fs.readFile(path.join(__dirname,'hero.json'),'utf-8',function(err,jsonData){
        if(err){
            throw err;
        }
        //测试是否能够成功读取json数据
        //console.log(jsonData);
        //由于arttemplate的参数数据是一个json对象，而文件读取只能是字符串和二进制数据
        //读取到的json字符串转为json对象
        var jsonObjc = JSON.parse(jsonData)

        //第二步调用art-template的官方api进行渲染
        /**
         * 第一个参数：要渲染的html模板的文件路径
         * 第二个参数：要渲染的数据（json）
         */
        var html = template(path.join(__dirname,'views','heroList.html'),jsonObjc);
        //检测是否成功替换了字符串
        //console.log(html);
        //响应返回渲染好的html
        res.end(html);
    });     
    }else if(urlPath === '/heroAdd' && method === 'GET'){
        //展示添加界面
    }else if(urlPath === '/heroAdd' && method === 'POST'){
        //添加英雄到数据库（将post数据保存到数据库）
    }else if(urlPath === '/heroInfo' && method === 'GET'){
        
        //展示英雄详情界面
    }else if(urlPath === '/heroDelet' && method === 'GET'){
        //删除英雄
    }else if(urlPath.indexOf('/images') === 0  || urlPath.indexOf('/node_modules') === 0){
        //访问静态资源
        fs.readFile(path.join(__dirname,urlPath),function(err,data){
            if(err){
                throw err; 
            }
            res.end(data);
        }); 
    }else{
        res.end('404 not found' + urlPath);
    }
});

//4.监听端口号
server.listen(3000,function(){
    console.log('服务器启动成功');
});
