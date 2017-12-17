<?php
    // 设置编码
    header('content-type:text/html;charset=utf-8');
    
    // 引入 其他的php文件
    // 可以理解为 等同于 把引入的文件的 内容 ctrl+c ctrl+v拷贝到这个位置
    include './data/star.php';
    

    // 可以使用 $star
    var_dump($star);

?>