<?php
    // 请求这个页面时

    // 清除session即可
    session_start();

    // 这个案例 只用到了 两个session 没有其他的 那么可以直接destory
    session_destroy();

    // 返回首页
    header('location:./index.php');

?>