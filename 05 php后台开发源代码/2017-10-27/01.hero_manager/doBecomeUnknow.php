<?php  
    // 导入函数
    require_once './functions.php';

    // 接受id
    $id = $_GET['id'];

    // 执行SQL
    $sql = "UPDATE cq SET hero_sex ='unknow' WHERE id in ($id) ";
    $rowNum = my_execute($sql);

    // 返回原来的那个首页
    header('location:'.$_SERVER['HTTP_REFERER']);
?>