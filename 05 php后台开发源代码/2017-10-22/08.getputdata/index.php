<?php
    // 每次访问这个页面  在原有数据的基础上 增加 一条 并且 保存到硬盘中
    $result = file_get_contents('./data/user.txt');
    // var_dump($result);
    $arr = unserialize($result);
    // var_dump($arr);

    // 直接追加元素
    $arr[] = '123456';
    // var_dump($arr);

    // 把数组 ->字符串
    $putStr = serialize($arr);

    // 写入文本文件
    file_put_contents('./data/user.txt',$putStr);
    
?>