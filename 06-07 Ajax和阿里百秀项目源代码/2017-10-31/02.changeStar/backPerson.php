<?php
    // 接受数据
    $name = $_GET['name'];

    // 准备假数据
    $personData = array(
        '彭林'=>array(
            'path'=>'./img/pl.png',
            'info'=>'额呵，额呵，o不ok,'
        ),
        '林利群'=>array(
            'path'=>'./img/llq2.png',
            'info'=>'这是一个寂寞的天，下着有些伤心的雨，要不我们去吃个串吧'
        ),
        '风骚林'=>array(
            'path'=>'./img/fsl.png',
            'info'=>'一样一样的，了改不！@！@'
        )    
    );

    // 返回一个 路径
    echo $personData[$name]['path'];

    // 增加一个 用来切割的内容
    echo '|O(∩_∩)O|';

    // 返回 个性签名
    echo $personData[$name]['info'];

?>