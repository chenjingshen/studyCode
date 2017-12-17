<?php
    // 设置中文编码
    header('content-type:text/html;charset=utf-8');

    // 二维数组 也可以衍生出多维数组
    $starArray = array(
        array(
            'name'=>'莫少聪',
            'skill'=>'自High'
        ),
        array(
            'name'=>'柯震东',
            'skill'=>'一起High'
        ),
        array(
            'name'=>'房祖名',
            'skill'=>'坑爹'
        )
    );

    // echo $starArray[2]['name'];
    // 获取数组的长度
    // echo count($starArray);

    // 输出一个style标签
    echo '<style>
        h1{
            font-size:200px;
            color:yellow;
        }
    </style>';



    // 遍历数组 获取每一个值
    for($i=0;$i<count($starArray);$i++){
        // echo $starArray[$i];
        // echo '<h1 style="color:red;font-size:100px;">','我的名字是',$starArray[$i]['name'],'我的技能是',$starArray[$i]['skill'],'</h1>';
        echo '<h1 >','我的名字是',$starArray[$i]['name'],'我的技能是',$starArray[$i]['skill'],'</h1>';
        echo '<br>';

    }
?>