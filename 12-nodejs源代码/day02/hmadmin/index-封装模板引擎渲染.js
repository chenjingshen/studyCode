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
       renderHTML('heroList','hero',function(err,html){
           if(err){
               throw err;
           }
           res.end(html);
       })

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


//封装一个渲染函数，达到代码可以复用的目的
/**
 * 
 * @param {*} tplFileName   html模板的文件名
 * @param {*} jsonFileName  json数据的文件名
 * callback :回调函数  function（err,html）{};
 */
function renderHTML(tplFileName,jsonFileName,callback){
    /**
     * 1.读取json数据
     * 2.调用art-template模块渲染
     */
    var tplPath = path.join(__dirname,'views',tplFileName) + '.html';
    var jsonPath = path.join(__dirname,jsonFileName) + '.json';

    //1.读取json数据
    fs.readFile(jsonPath,'utf-8',function(err,jsondata){
        if(err){
            callback(err,null);
        };
        //2.使用模板引擎渲染
        var html = template(tplPath,JSON.parse(jsondata));

        callback(null,html);
    });


}
