var fs = require('fs');
var path = require('path');
var http = require('http');
// 创建数据库
var server = http.createServer();
server.on('request', function (req, res) {

    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'home.html'), function (err, data) {
            if (err) {
                res.end('服务器内部错误');
            }
            res.end(data);
        })
    } else if (req.url === '/home.css') {
        fs.readFile(path.join(__dirname, 'resourse','home.css'), function (err, data) {
            if (err) {
                res.end('home.css服务器内部错误');
            }
            res.end(data);
        })
    } else if (req.url === '/images/01.gif') {
        fs.readFile(path.join(__dirname,'resourse', 'images', '01.gif'), function (err, data) {
            if (err) {
                res.end('01.gif服务器内部错误');
            }
            res.end(data);
        })
    } else if (req.url === '/images/01.jpg') {
        fs.readFile(path.join(__dirname, 'resourse','images', '01.jpg'), function (err, data) {
            if (err) {
                res.end('01.jpg服务器内部错误');
            }
            res.end(data);
        })
    } else {
        res.end('未定义');
    }



})
server.listen(3000, function () {
    console.log('服务器开启成功');
})