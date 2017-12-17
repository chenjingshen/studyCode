<?php
    // 读取JSON
    // 为了让浏览器知道 是JSON一般也会设置一个 header
    header('content-type:application/json;charset=utf-8');
    // 返回json
    echo  file_get_contents('./data/star.json');
    // echo 'kissgoodbye';
?>