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
            ["id"]=> string(3) "142"
            ["champion_name"]=> string(3) "123" 
            ["champion_title"]=> string(3) "123" 
            ["champion_tags"]=> string(3) "123" 
            ["champion_info"]=> string(8) "12313123" }
     -->
    <?php
        // 获取图片
        // 转码
        $champion_icon = './images/'.$_FILES['champion_icon']['name'];
        $champion_icon_GBK =  iconv('utf-8','gbk','./images/'.$_FILES['champion_icon']['name']);

        // 保存起来
        move_uploaded_file($_FILES['champion_icon']['tmp_name'],$champion_icon_GBK);


        // 接收数据
        // var_dump($_POST);
         $id = $_POST['id'];
         $champion_name = $_POST["champion_name"];
         $champion_title = $_POST["champion_title"];
         $champion_tags = $_POST["champion_tags"];
         $champion_info = $_POST["champion_info"];

        // 连接数据库
        $link = mysqli_connect('localhost','root','root','study');

        // 执行SQL语句
        $sql = "update lol set champion_name='$champion_name', champion_title='$champion_title', champion_tags='$champion_tags', champion_info='$champion_info',champion_icon='$champion_icon' where id = $id ";

        // var_dump($sql);

        mysqli_query($link,$sql);

        // 获取受影响的行数
        $rowNum = mysqli_affected_rows($link);

        // 关闭连接
        mysqli_close($link);

        // 跳转回首页
    
    ?>
</body>
</html>
<script>
    window.location.href ='./index.php';
</script>