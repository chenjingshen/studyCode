<?php
    // 设置中文编码
    header('content-type:text/html;charset=utf-8');

    // 使用数组保存用户
    $userArr = array(
        'westblueflower'=>'123456',
        'jack'=>'111111',
        'rose'=>'666666'
    );

    // 验证用户名 跟密码
    $userName = 'westblueflower';
    $userPass = '123456';

    // 验证用户名是否存在
    if(isset($userArr[$userName])==true){
        // 如果存在 验证密码
        // 获取真实的密码 跟 输入的密码做对比
        $truePassWord = $userArr[$userName];
        if($truePassWord == $userPass){
            echo '恭喜你';
        }else{
            echo '用户名或密码错误';
        }
    }else{
        echo '用户名或密码错误';
    }
?>