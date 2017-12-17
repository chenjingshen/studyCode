<?php
    // 设置编码格式
    header('content-type:text/html;charset=utf-8');

    // 接受用户提交的数据
    // var_dump($_POST);

    // 稍微处理一下这个数据
    // $_POST['cartoonName'];
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
    <h2>哎呀，你也喜欢<?php echo  $_POST['cartoonName']; ?></h2>
    <p>我也是的哦，要不交个朋友吧 O(∩_∩)O</p>
    <a href="#">点击立即开始聊天</a>
</body>
</html>