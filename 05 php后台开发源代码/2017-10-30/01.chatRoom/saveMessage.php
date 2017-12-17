<?php
    // 引入函数
    require_once './functions.php';

    // 接受数据
    $content = $_POST['content'];
    // cookie中获取用户的id 因为已经保存了用户的id
    $user_id = $_COOKIE['userId'];

    // 保存到数据库
    $rowNum = my_execute("INSERT INTO chat_message (user_id,content) values($user_id,'$content')");

    // 去index页面
    header('location:./index.php');
?>