<?php
    // 点击登陆之后

    // 数据提交给自己
    if(isset($_POST['userName'])){
        // 如果用户名密码正确 记录登陆状态
        $userName = $_POST['userName'];
        $userPass = $_POST['userPass'];

        if($userName=='rose'&&$userPass=='123456'){

            // 记录成功状态
            session_start();
            $_SESSION['isLogin']='yes';

            // 去首页
            header('location:./index.php');

        }else{
            // 反之 提示用户
            echo '<h2>用户名或密码错误</h2>';
            header('location:./login.php');
        }
    }



?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h2>登陆页面</h2>
    <form method='post'>
        <input type="text" name='userName' placeholder="请输入用户名">
        <br>
        <input type="password" name='userPass' placeholder="请输入密码">
        <br>
        <input type="submit" >
    </form>
</body>
</html>