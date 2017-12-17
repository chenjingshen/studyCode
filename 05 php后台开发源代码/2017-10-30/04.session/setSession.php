<?php
    // PHP中默认没有开启SESSION的使用
    session_start();

    // 增删改查 全部通过 这个超全局变量即可 关系型数组
    // 新增
    $_SESSION['userName'] = 'jack';
    $_SESSION['userName'] = 'rose';
    $_SESSION['userName2'] = 'ice';
    $_SESSION['userName3'] = 'robot';

    // 保存复杂的数据
    // 可以保存 复杂的数据 数组 关系型数组 二位数组 多维数组
    $_SESSION['foodList'] = array(
            array(
                'name'=>'北京烤鸭',
                'color'=>'金黄色'
            ),
            array(
                'name'=>'驴肉火烧',
                'color'=>'白色'
            ),
            array(
                'name'=>'羊蝎子',
                'color'=>'酱色'
            )
        );

?>