<?php 
    // 获取登陆信息
    if(isset($_POST['userName'])){
        // 获取用户名
        $userName = $_POST['userName'];
        // 获取密码
        $userPass = $_POST['userPass'];

        // 获取 remember的值
        // 如果被勾上上 是 on
        $remember = $_POST['remember'];
        // var_dump($remember);

        // 验证是否正确
        if($userName=='jack'&&$userPass=='123456'){
            // 登陆成功
            header('location:./index.php');
            // 保存cookie 让浏览器记住已经登陆啦
            if($remember=='on'){
                setcookie('isLogin','ok',time()+7*24*60*60);
            }else{
                setcookie('isLogin','ok');
            }
        }else{
            // 登陆失败
            header('location:./login.php');
        }
    }

    // 是否登陆的判断
    if(isset($_COOKIE['isLogin'])){
        // 已经登陆
        // 跳转到首页
        echo '<h2>您已经登陆</h2>';
        // php直接设置间隔跳转
        // header('refresh:2;url=./index.php');
        header('location:./index.php');
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
        <input type="checkbox" name='remember'>七天免登录
        <br>
        <input type="submit" >
    </form>
</body>
</html>