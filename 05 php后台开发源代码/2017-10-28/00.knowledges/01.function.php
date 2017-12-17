<?php
    // php中的函数 跟js非常的类似
    function sayHi($name){
        echo $name,'how old are you';
    }

    // 实参
    // sayHi('rose ');

    function sum($num1,$num2){
        return $num1+$num2;
    }

    $result = sum(998,2);

    echo $result;

    // 封装的步骤
    // 重复的代码 抽取出来
    // 不固定的部分 作为 参数
    // 结果 一般 是 作为返回值

?>