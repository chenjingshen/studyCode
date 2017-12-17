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
        span{
            color:hotpink;
            font-size:66px;
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
        for($i=0;$i<count($starArray);$i++){ ?>
            <h2><?php echo $starArray[$i]['name']; ?><span><?php echo $starArray[$i]['skill']; ?></span></h2>
       <?php } ?>
       <!-- 
            ctrl+ +
            ctrl+-
        -->
</body>
</html>