<?php
    // 设置
    header('content-type:text/html;charset=utf-8');

    // PHP中默认没有开启SESSION的使用
    session_start();
    // 通过 超全局变量去取值
    var_dump($_SESSION);
?>