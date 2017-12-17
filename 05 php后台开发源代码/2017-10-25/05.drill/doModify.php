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
        //获取图
        $champion_icon = './images/'.$_FILES['champion_icon']['name'];
        $champion_icon_gbk = iconv('utf-8','gbk','./images/'.$_FILES['champion_icon']['name']);
        //保存起来
        move_uploaded_file($_FILES['champion_icon']['name'],$champion_icon_gbk);
        //接受数据
        $id= $_POST['id'];
        $champion_name = $_POST["champion_name"];
        $champion_title = $_POST["champion_title"];
        $champion_tags = $_POST["champion_tags"];
        $champion_info = $_POST["champion_info"];
        //连接数据库
        $link = mysqli_connect('localhost','root','root','study');
        //执行sql语句
        $sql = "UPDATE lol set champion_name = '$champion_name',
        champion_title ='$champion_title',
        champion_tags ='$champion_tags',
        champion_info ='$champion_info',
        champion_icon ='$champion_icon' WHERE id =$id ";
        mysqli_query($link,$sql);
        //获取受影响的行数
        $rowNum = mysqli_affected_rows($link);
        //关闭连接
        mysqli_close($link);
        //跳转回首页

    ?>
</body>
</html>
<script>

    window.location.href="./index.php";
</script>