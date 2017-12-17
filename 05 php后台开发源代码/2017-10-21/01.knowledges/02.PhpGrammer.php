<?php
    // 设置中文编码
    header('content-type:text/html;charset=utf-8');

    // php基础语法 变量定义
    // 字符串
    $food = '西兰花';
    $food2 = "烤玉米";

    echo $food,$food2;

    echo '<br>';

    // 整型
    $age = 19;
    echo $age;

    echo '<br>';

    // 小数 浮点
    $pi = 3.141592653;
    echo $pi;

    echo '<br>';
    

    // 布尔
    $male = true;
    $male2 = false;

    // echo $male,$male2;
    // 如果要输出 布尔值 函数
    // 输出bool值 主要用来 输出 变量的 类型 以及变量的值
    var_dump($male);
    var_dump($male2);

    echo '<br>';
    

    // 逻辑语句
    if($male2==true){
        echo 'man';
    }else{
        echo '萌妹子';
    }

    echo '<br>';
    // 选择语句switch
    $day = '礼拜八';

    switch ($day) {
        case '礼拜一':
        case '礼拜二':
        case '礼拜三':
        case '礼拜四':
        case '礼拜五':
            echo '早起，上班班';
            break;
        case '礼拜六':
            echo '准备好好睡一个懒觉，一个电话，要加班';
            break;
        case '礼拜天':
            echo '睡个好觉，起来high，high玩，继续睡觉，迎接新的一个礼拜';
            break;
        default:
            echo '没有这么一天呢，你肯定是没睡醒';
            break;
    }

?>