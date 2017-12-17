<?php
    // 清除 cookie
    // 登陆状态
    // 成功-->首页 记录cookie
    setcookie('isLogin','yes',time()-10);
    // 因为用户的信息 在多个地方可能需要使用 把用户的id页保存起来
    setcookie('userId','kissgoodbye',time()-10);

    // 登录页面
    header('location:./login.php');
?>