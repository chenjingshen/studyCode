<?php
    // 引入函数
    require_once './functions.php';
    // 接受数据
    $id = $_GET['id'];

    // 执行SQL
    $sql = "UPDATE cq SET hero_status ='normal' WHERE id in ($id)";
    $rowNum = my_execute($sql);


    // 返回来回收站
    header('location:./index.php');

?>