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
    //接受提交过来的图片
    //直接保存起来，这个是没有转码的，目的是保存到数据库中
    $champion_icon = './images/'.$_FILES['champion_icon']['name'];
    //转换了编码格式的字符串 目的是为了保存图片 gbk编码格式涵盖的文字量更大
    $champion_icon_gbk = iconv('utf-8','gbk',$champion_icon);
    //把图片保存起来，但images中 图片有可能有中文名 所以转换文件编码
    move_uploaded_file($_FILES['champion_icon']['tmp_name'],$champion_icon_gbk);
    //接受post提交过来的数据
    $champion_name = $_POST["champion_name"];
    $champion_title = $_POST["champion_title"];
    $champion_tags = $_POST["champion_tags"];
    $champion_info = $_POST["champion_info"];
    //执行数据库
    $link = mysqli_connect('localhost','root','root','study');
    //执行sql语句
    mysqli_query($link,"insert into lol (champion_name,champion_title,champion_tags,champion_info,champion_icon) values ('$champion_name','$champion_title','$champion_tags','$champion_info','$champion_icon')");
    //获取受影响的行数
    $rowNum = mysqli_affected_rows($link);
    //关闭连接
    mysqli_close($link);
?>
</body>
</html>
<script>
    window.location.href = './index.php';
</script>