<?php
    // 删除记录登陆状态的值
    session_start();

    // 只删除了某一条
    // 一般是单条删除 不会清空
    // unset($_SESSION['isLogin']);
    session_destroy();

    // 去登录页
    header('location:./login.php');

?>