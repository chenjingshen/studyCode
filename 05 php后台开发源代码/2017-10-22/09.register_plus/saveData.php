<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
   <?php
    // 读取文本文件的数据 ---》string
    $arrString = file_get_contents('./data/user.txt');

    // 转化为数组    array
    $userArr = unserialize($arrString);

    $userName = $_POST['userName'];
    $userPass = $_POST['userPass'];

    // 判断是否存在
    if(isset($userArr[$userName])==true){
        // 存在
        // echo '已被使用了哦';
        echo '<h1>',$userName,'已被使用</h1>';
        echo '<p>要不你试试',$userName,'123','</p>';
    }else{
        // 不存在
        // 往数组中添加数据
        $userArr[$userName] = $userPass;
    
        // 保存回 文本文件中(硬盘中)
        $putString = serialize($userArr);//将数组转化为字符串
    
        file_put_contents('./data/user.txt',$putString); //保存到文本文件中
    }

   
   ?>
</body>
</html>