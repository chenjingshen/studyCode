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
        // 接受用户的数据
       $userName=  $_POST['userName'];
       $userPass= $_POST['userPass'];

       // 使用假数据模拟
       $userArr = array(
        'westblueflower'=>'123456',
        'jack'=>'111111',
        'rose'=>'666666',
        'icemountain'=>'888888'
        );

       // 定义标识变量
       $isTrue = false;

        // 验证提交的数据
        // 用户名
        if(isset($userArr[$userName])==true){
            // 根据输入的用户名 获取 对应的密码
            $truePass = $userArr[$userName];
            // 验证密码
            if($userPass ==$truePass){
                $isTrue = true;
            }else{
                $isTrue = false;
            }
        }else{
            $isTrue = false;
        }
        // 根据结果 返回不同的内容
    ?>
    <?php if($isTrue==true){?>
        <h2>欢迎你，你可算来啦。等死我啦</h2>
    <?php }else {?>
        <h2>哎呀，你的用户名或密码不太对哦，检查一下吧 (づ￣ 3￣)づ</h2>
    <?php } ?>
</body>
</html>
