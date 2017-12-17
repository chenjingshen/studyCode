<?php
    // 验证用户名 密码
    if(isset($_POST['userName'])){
        $userName = $_POST['userName'];
        $userPass = $_POST['userPass'];
    
        // 验证数据的准确性
        if($userName=='jack'&&$userPass=='123456'){
            //登陆成功  去首页
            // 为了告诉首页 这个用户 登陆成功了
            // 带一个标识登陆成功的数据去首页
            header('location:./shouye.php?isLogin=yes');
        }else{
            // 登陆失败
            header('location:./index.php');
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
    <!-- 提交给自己 action 可以省略
        有密码 post
    -->
    <form method='post'>
        <input type="text" name='userName' placeholder="请输入用户名">
        <br>
        <input type="password" name='userPass' placeholder="请输入密码">
        <br>
        <input type="submit" >
    </form>
</body>
</html>