// get的工具函数
// url xxx.php?
// data 约定 格式必须是 key=value&key2=value2
// callback   回调函数
function get(url, data, callback) {
    // 创建对象
    var xhr = new XMLHttpRequest();

    // 设置请求行
    // 格式
    url += '?';
    url += data;
    xhr.open('get', url);

    // 设置请求头

    // 注册回调函数
    xhr.onload = function () {
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
function post(url, data, callback) {
    // 创建对象
    var xhr = new XMLHttpRequest();

    // 设置请求行
    // 格式
    xhr.open('post', url);

    // 设置请求头
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // 注册回调函数
    xhr.onload = function () {
        // console.log(xhr.responseText);
        callback(xhr.responseText);
    }

    // 设置请求主体 发送
    xhr.send(data);
}

// 自己人为选择 参数的 ajax工具函数
/*
    // function ajax(url, method, data, callback) {
    //     // 创建对象
    //     var xhr = new XMLHttpRequest();

    //     // 设置请求行
    //     // 格式
    //     if(method=='get'){
    //         url+='?';
    //         url+=data;
    //         // 如果是get请求
    //         data=null;
    //     }
    //     xhr.open(method, url);

    //     // 设置请求头
    //     if(method=='post'){
    //         xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //     }

    //     // 注册回调函数
    //     xhr.onload = function () {
    //         // console.log(xhr.responseText);
    //         callback(xhr.responseText);
    //     }

    //     // 设置请求主体 发送
    //     xhr.send(data);
    // }
*/
// 如果使用多个形参 在用户传递参数时 不太好记 所以一般建议只传入一个对象即可
// ajax("xxx.php",'get','name=巴拉巴拉小魔仙&skill=乌卡卡魔法能量',function(data){
//     console.log(data);
// })

/*
    只传入一个参数

    {
        url:'xxx.php'
        type:'get'
        data:'name=jack'
        success:function(data){
            console.log(data);
        }
    }
*/
function ajax(options) {
    // 创建对象
    var xhr = new XMLHttpRequest();

    // 设置请求行
    // 格式
    if (options.type == 'get') {
        options.url += '?';
        options.url +=  options.data;
        // 如果是get请求
        options.data = null;
    }
    xhr.open( options.type,  options.url);

    // 设置请求头
    if ( options.type == 'post') {
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    }

    // 注册回调函数
    xhr.onload = function () {
        // console.log(xhr.responseText);
        // callback(xhr.responseText);
        // options.success(xhr.responseText);

        // 如果返回的数据是XML 那么 
        if(xhr.responseXML!=null){
            options.success(xhr.responseXML);
        }else{
            // 字符串
            // 下面这一行代码 可能会出错
            try {
                // JSON格式的字符串
                // 返回的格式 不是 JSON格式
                options.success(JSON.parse(xhr.responseText));
            } catch (error) {
                // 不是JSON的字符串--->普通字符串
                // console.log('133行代码出错了');
                options.success(xhr.responseText);
            }
        }
        // 什么情况下 是JSON呢?
    }

    // 设置请求主体 发送
    xhr.send(options.data);
}