<?php
    // 判断变量是否存在
    $age = 18;

    // $result = isset($age);
    $result = isset($name);
    // var_dump($result);

    $starInfo = array(
        'name'=>'jack',
        'skill'=>'画画'
    );

    // $result2 = isset($starInfo['name']);
    $result2 = isset($starInfo['wife']);

    var_dump($result2);
?>