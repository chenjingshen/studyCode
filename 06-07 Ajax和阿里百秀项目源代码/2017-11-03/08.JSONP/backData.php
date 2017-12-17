<?php
    // 返回一些内容
    // echo 'data';
    // echo 'console.log("你好吗");';

    // get请求发送过来的数据 怎么接
    $callBackName = $_GET['callback'];

    // 返回一个函数调用 doSomeThing();
    echo $callBackName.'({"name":"jack","lover":"rose"})';
?>