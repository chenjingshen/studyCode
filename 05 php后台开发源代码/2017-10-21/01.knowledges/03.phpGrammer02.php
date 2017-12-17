<?php
    // 设置中文编码
    header('content-type:text/html;charset=utf-8');
    // 次数确定的 for
    for($i=0;$i<10;$i++){
        echo '感觉自己萌萌哒',$i,'<br>';

    }

    $age = 0;

    // while 根据条件可能 一次都不自信
    // while($age<18){
    //     echo '不能进网吧',$age,'<br>';
    //     $age++;
    // }

    // do while 最起码执行一次
    do {
        echo '可以光明正大的进网吧了';
    } while ($age >18);

?>