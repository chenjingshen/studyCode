<?php
    // 连接数据库
    $link = mysqli_connect('localhost','root','root','study');

    // 执行SQL语句 不同的操作 只是 执行的语句不同而已
    mysqli_query($link,'update user set userName ="Babay Baby" where id =10');

    // 获取结果
    $rowNum = mysqli_affected_rows($link);

    // 关闭连接
    mysqli_close($link);

?>