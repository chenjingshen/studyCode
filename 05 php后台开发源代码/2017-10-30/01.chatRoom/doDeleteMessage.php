<?php
    // 引入函数
    require_once './functions.php';
    // 找到信息的 唯一标识 id
    // 接受id
    $id = $_GET['id'];

    // 执行删除语句
    $rowNum = my_execute("DELETE FROM chat_message WHERE id = $id");

    // 返回index
    header('location:./index.php');

?>