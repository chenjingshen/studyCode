<?php
    // 设置中文编码
    header('content-type:text/html;charset=utf-8');

    // php中的索引数组
    $foodArr = array('西兰花炒蛋','卤蛋','鱼香肉丝','麻辣小龙虾');

    // 增加元素
    $foodArr[] = '紫菜蛋花汤';

    // echo 如果输出复杂数据类型 只能输出类型 不能输出值
    // echo $foodArr;
    // 复杂数据类型 也是可以输出的
    var_dump($foodArr);
    
    echo '<br>';

    // 直接获取某一个值
    // var_dump($foodArr[3]);
    // var obj = {name:'jack'}  obj.name  obj['name'];
    echo $foodArr[3];
    echo '<br>';

    // 关系型数组
    $foodInfo = array(
        'name'=>'臭豆腐',
        'skill'=>'闻起来臭，吃起来香',
        'info'=>'黑色黄金，逆风十里，招待外宾特供'
    );
    
    echo $foodInfo['info'];

    

    

?>