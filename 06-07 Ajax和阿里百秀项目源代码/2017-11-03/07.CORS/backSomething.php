<?php
    // CORS
    /*
        这种方案 是HTML5中推出的
        老版本的浏览器无法使用 主要指的是IE系列
        1.要使用这种方案 服务器 需要设置一个 允许的头
        2.并且浏览器支持这种跨域方案 那么就可以没有限制的 发送请求
        虽然现在的发展趋势是 ie越来越少
        如果我们要兼容性好一些 JSONP 
    */
    header('Access-Control-Allow-Origin: *');
    // 设置允许跨域访问即可
    echo '你偷偷的过来拉';
?>