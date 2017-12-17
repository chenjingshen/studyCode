<?php
    // 引入
    // include './functions.php';
    // include 如果引入的文件路径 不存在 报错，还会继续往下执行
    // include './functions1234567890.php';

    // 如果逻辑需求 引入文件失败 不能往下执行 用哪种方式？
    //  require 如果引入文件失败 报错 不会往下继续执行
    // require 如果多次引入了 一个函数的声明 报错 不能 重复声明 同名的 函数
    // require './functions.php';
    // 中间有 1w行
    // require './functions.php';
    // require './functions1234567890-=.php';



    // 如果要避免 多次引入 产生的 函数重复声明问题 可以使用  require_once
    require_once './functions.php';
    require_once './functions.php';

    // php中引入文件的4中方式
    // include 引入失败 继续执行 多次引入 可能会出现 函数重复声明的问题

    // require 引入失败 不在执行 多次引入 可能会出现 函数重复声明的问题

    // include_once 引入失败 继续执行 多次引入 不会 函数重复声明的问题
    // require_once 引入失败 不会执行 多次引入 不会 函数重复声明的问题
    

    var_dump( my_select('select * from lol'));
?>