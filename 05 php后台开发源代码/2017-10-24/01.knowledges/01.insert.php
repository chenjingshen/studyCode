<?php
    // 连接上数据库
    // 数据库地址 本机使用 localhost
    // 用户名
    // 用户密码
    // 数据库的名字
    // 返回值是 数据库的 连接信息
    $link = mysqli_connect('localhost','root','root','study');

    // var_dump($link);

    // 通知数据库 执行 某一些 语句
    mysqli_query($link,"insert into user (userName,userPass,userAddress,userHabbit) values ('jack','123456','冰山上','jump')");

    // 获取执行完毕的结果
    // 获取受影响的行数
    $rowNum = mysqli_affected_rows($link);
    var_dump($rowNum);

    // 关闭数据库连接
    mysqli_close($link);

    // mysql_connect
    // mysqli_connect
    // mysql_query
?>