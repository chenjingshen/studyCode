// get的工具函数
// url xxx.php?
// data 约定 格式必须是 key=value&key2=value2
// callback   回调函数
function get(url,data,callback){
    // 创建对象
    var xhr = new XMLHttpRequest();

    // 设置请求行
    // 格式
    url+='?';
    url+=data;
    xhr.open('get',url);

    // 设置请求头

    // 注册回调函数
    xhr.onload = function(){
        // console.log(xhr.responseText);
        callback(xhr.responseText);
    }

    // 设置请求主体 发送
    xhr.send(null);
}

// post的工具函数
// url xxx.php
// data 约定 格式必须是 key=value&key2=value2
// callback   回调函数
function post(url,data,callback){
    // 创建对象
    var xhr = new XMLHttpRequest();

    // 设置请求行
    // 格式
    xhr.open('post',url);

    // 设置请求头
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    // 注册回调函数
    xhr.onload = function(){
        // console.log(xhr.responseText);
        callback(xhr.responseText);
    }

    // 设置请求主体 发送
    xhr.send(data);
}