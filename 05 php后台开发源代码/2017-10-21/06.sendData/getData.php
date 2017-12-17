<?php
    // 设置编码
    header('content-type:text/html;charset=utf-8');

    // echo '你提交数据过来啦';


    // PHP中获取提交的数据
    // 超全局变量
    // array(1) { ["starName"]=> string(9) "刘嘉玲" }
    var_dump($_GET);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=s">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h2>没想到呀，你竟然喜欢-- <?php echo $_GET['starName'];  ?></h2>
</body>
</html>