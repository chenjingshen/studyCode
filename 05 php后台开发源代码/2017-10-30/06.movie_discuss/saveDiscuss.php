<?php
    // 引入函数
    require_once './functions.php';
    
    // 开启session
    session_start();

    // 获取提交的数据
    $content = $_POST['content'];
    $movieId = $_POST['movieId'];
    $userId = $_SESSION['userInfo'][0][0];

    // 写入数据
    $sql = "INSERT INTO moviereview (review_content,movie_id,user_id) values('$content','$movieId','$userId')";

    $rowNum = my_execute($sql);
    // var_dump($rowNum);

    // 返回过来的页面
    header('location:'.$_SERVER['HTTP_REFERER']);
?>