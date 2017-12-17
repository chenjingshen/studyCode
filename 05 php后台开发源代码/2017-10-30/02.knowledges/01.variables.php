<?php
    // 设置编码格式
    header('content-type:text/html;charset=utf-8');


    // 使用全局变量 会有隐患 是变量可以被 随意的修改
    $foodName = '碳烤榴莲';

    // 函数
    function eatFood(){
        // echo '碳烤榴莲','超级好吃';
        // PHP的函数中 默认是无法访问全局变量的
        // 如果要使用全局变量 需要先声明一下
        global $foodName;
        echo $foodName,'超级好吃';
    }

    // 修改变量的值
    $foodName = '逆风十里臭豆腐';

    // 调用函数
    // eatFood();

    // 常量 声明之后 无法修改
    // 常量声明之后 无法修改 如果硬要赋值 报错
    define('goodFoodName','香菜');

    // 使用常量
    echo goodFoodName;

    // goodFoodName = '芹菜';

?>