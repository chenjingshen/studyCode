<?php
    // 连接数据库
    $link = mysqli_connect('localhost','root','root','study');

    // 执行SQL语句
    mysqli_query($link,'delete from user sdfgdhjkgytysrddszfgxhcgjhvkdsawezrty where id = 26');

    // 获取结果
    $rowNum = mysqli_affected_rows($link);
    // 查看是否执行成功 0 1 正数  -1执行失败(SQL语句写错了)
    var_dump($rowNum);

    // 关闭连接
    mysqli_close($link);
?>