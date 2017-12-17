<?php
    // 引入函数
    require_once './functions.php';

    // 接受id
    $id = $_GET['id'];

    // 执行SQL语句
    // $deleteSQL  = "UPDATE cq set hero_status = 'deleted' WHERE id = $id ";

    // 修改sql语句 让他变得支持 批量修改
    $deleteSQL  = "UPDATE cq set hero_status = 'deleted' WHERE id in($id)";

    // 调用函数
    $rowNum = my_execute($deleteSQL);


    // var_dump($_SERVER['HTTP_REFERER']); 
    // 跳转回首页
    // header('location:./index.php');
    // header('location:'.$_SERVER['HTTP_REFERER']);
    $fromUrl = $_SERVER['HTTP_REFERER'];
    header("location:$fromUrl");

?>