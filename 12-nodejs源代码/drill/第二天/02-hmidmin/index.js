var http = require('http');
var fs = require('fs');
var path = require('path');
// 导入art-template模块
var template = require('art-template');
// 创建服务器
var server = http.createServer();
// 注册监听客户端请求事件
server.on('request', function (req, res) {
    // 请求路径
    var urlPath = req.url;
    // 请求方法
    var method = req.method;
    // 设计接口文档(路由)
    if (urlPath === '/' && method === 'GET') {
        // 读取要渲染的数据
        fs.readFile(path.join(__dirname, 'hero.json'), 'utf-8', function (err, jsonData) {
            if (err) {
                throw err;
            }
            //测试是否能够成功读取数据
            console.log(jsonData);
            var jsonObj = JSON.parse(jsonData);
            var html = template(path.join(__dirname, 'views', 'heroList.html'), jsonObj);
            // 测试是否成功替换了字符串
            console.log(html);
            res.end(html);
        })
    } else if (urlPath === '/heroAdd' && method === 'GET') {
        // 展示添加页面
    } else if (urlPath === '/heroAdd' && method === 'POST') {
        // 添加数据到数据库（将post数据保存带=到数据库）
    } else if (urlPath === '/heroInfo' && method === 'GET') {
        // 展示英雄详情页面
    } else if (urlPath === '/heroDelet' && method === 'GET') {
        // 删除英雄
    } else if (urlPath.indexOf('/images') === 0 || urlPath.indexOf('/node_modules') === 0) {
        // 访问静态页面
        fs.readFile(path.join(__dirname, urlPath), function (err, data) {
            if (err) {
                throw err;
            }
            res.end(data);
        })
    } else {
        res.end('404 not found' + urlPath);
    }

})
// 监听端口号
server.listen(3000, function () {
    console.log('服务器开启成功');
});