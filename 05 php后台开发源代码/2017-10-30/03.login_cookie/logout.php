<?php
    // 清除cookie
    setcookie('isLogin','yes',time()-100);
    // 设置去 登录页
    header('location:./login.php');
?>