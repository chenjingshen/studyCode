
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php
        /*
            1.接受用户提交的数据
            2.验证是否已被注册(先不做)
            3.保存起来
            4.提示用户
        */
        // 用户名
        $userName = $_POST['userName'];
        // 用户密码
        $userPass = $_POST['userPass'];

        // 直接保存起来
        $userInfo = array();
        // 保存到 userInfo 变量中
        $userInfo[$userName] = $userPass;

        // var_dump($userInfo);
        // 转化为字符串
        $saveString = serialize($userInfo);

        // 保存数据
        // 参数1 写入的文件
        // 参数2 写入的数据
        file_put_contents('./data/user.txt',$saveString);
    ?>
</body>
</html>