<?php

    session_start();

    // 删除不是设置为空
    // $_SESSION['userName'] ='';

    // 单独删除某一条
    // unset($_SESSION['userName']);

    // 如果要删除所有
    session_destroy();
?>