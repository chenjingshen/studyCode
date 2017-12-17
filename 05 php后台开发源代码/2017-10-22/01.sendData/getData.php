<?php
    // 设置编码
    header('content-type:text/html;charset=utf-8');
    
    // 总的数据 
    // 引入的语法 
    include './data/heroData.php';

    // 提交过来的数据
    $heroName = $_GET['heroName'];

    // 使用名字 获取详细信息
    $oneHero = $heroArr[$heroName];

    // 打印测试
    // var_dump($oneHero);
    /*
        array(5) { 
            ["champion_icon"]=> string(24) 
            "images/1412752590005.png" 
            ["champion_name"]=> string(7) "薇恩 " 
            ["champion_title"]=> string(13) "暗夜猎手 " 
            ["champion_info"]=> string(208) "这个世界并不总像人们想象的那么美好。 符文大陆上依旧有许多人通过最黑暗的方式修习魔法， 被那些暗流涌动的黑暗力量腐蚀。 夏娜 - 薇恩深知这一点。 " 
            ["champion_tags"]=> string(28) "tags: 物理, 远程, 隐身" }
    */
    // 获取提交的数据
    /*
        echo  $_GET['heroName'];
    */ 
    /*
        1.接受用户发送过来的数据 （简短的数据）
        2.检索详细数据，查询详细数据
            从总的数据中检索 （目前使用数组进行模拟）
        3.返回给用户（包装一下，好看的html，css，js结构）
    */
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h2><?php echo $oneHero['champion_title']; ?>--- <span><?php echo $oneHero['champion_name']; ?></span></h2>
    <h3><?php echo $oneHero['champion_tags']; ?></h3>
    <p><?php echo $oneHero['champion_info']; ?></p>
    <img src="<?php echo $oneHero['champion_icon']; ?>" alt="">
</body>
</html>