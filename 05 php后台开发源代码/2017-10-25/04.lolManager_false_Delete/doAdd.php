<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <!-- 
        array(1) { 
            ["champion_icon"]=> 
                array(5) { 
                    ["name"]=> string(35) "艾尔菲亚特·华伦泰_icon.png" 
                    ["type"]=> string(9) "image/png" 
                    ["tmp_name"]=> string(50) "C:\Users\autumnfish\AppData\Local\Temp\php3149.tmp" 
                    ["error"]=> int(0) 
                    ["size"]=> int(921) } }

        post提交的数据
        array(4) { 
            ["champion_name"]=> string(3) "123" 
            ["champion_title"]=> string(3) "123" 
            ["champion_tags"]=> string(3) "123" 
            ["champion_info"]=> string(8) "12313123" }

            champion_name, champion_title, champion_tags, champion_info,
     -->
    <?php
        // 接受提交过来的图片
        // var_dump($_FILES);
        // 直接保存起来 这个是没有转码的 目的是 保存到数据库中
        $champion_icon = './images/'.$_FILES['champion_icon']['name'];
        // 转换了编码格式的 字符串 目的是为了保存图片 GBK 编码格式 涵盖的文字量更大
        $champion_icon_gb2312 = iconv('utf-8','gbk',$champion_icon);
        // 图片保存起来  images中  图片有可能有中文名 转换文件编码
        move_uploaded_file($_FILES['champion_icon']['tmp_name'],$champion_icon_gb2312);

        // var_dump($champion_icon_gb2312);

        // 接受提交过来的数据 post
        // var_dump($_POST);
        $champion_name = $_POST["champion_name"]; 
        $champion_title = $_POST["champion_title"]; 
        $champion_tags = $_POST["champion_tags"]; 
        $champion_info = $_POST["champion_info"];

        // 连接数据库
        $link = mysqli_connect('localhost','root','root','study');

        // 执行SQL语句
        mysqli_query($link,"insert into lol (champion_name, champion_title, champion_tags, champion_info,champion_icon) values ('$champion_name', '$champion_title', '$champion_tags', '$champion_info','$champion_icon')");

        // var_dump("insert into lol (champion_name, champion_title, champion_tags, champion_info,champion_icon) values ('$champion_name', '$champion_title', '$champion_tags', '$champion_info','$champion_icon')");
        

        // 获取受影响的行数
        $rowNum = mysqli_affected_rows($link);

        // 关闭连接
        mysqli_close($link);
    ?>
</body>
</html>
<script>
    window.location.href = './index.php';
</script>