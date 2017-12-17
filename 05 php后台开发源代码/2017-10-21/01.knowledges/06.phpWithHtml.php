<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        h2{
            font-size:88px;
            color:yellowgreen;
            font-weight: 100;
            background-color: orange;
        }
    </style>
</head>
<body>
    <h2>感觉自己<?php echo '萌萌哒'; ?></h2>
    <h2>大伙不要学习他们</h2>
    <?php
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
        for($i=0;$i<count($starArray);$i++){
            echo '<h2>',$starArray[$i]['name'],'-------',$starArray[$i]['skill'],'</h2>';
        }
        /*
            易错点
                1.变量的定义 使用 都必须先写上 $
                2.关键字 array for 等不要写错
                3.编辑器默认提示的是 php 如果要写html 可以切换为html
        */
    ?>
    
</body>
</html>