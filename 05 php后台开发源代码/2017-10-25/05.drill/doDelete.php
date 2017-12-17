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
    //获取提交过来的id
    $id = $_GET['id'];
    //连接数据库
    $link = mysqli_connect('localhost','root','root','study');
    //执行sql代码  将isDelete 改为'yes' 就相当于删除了
    mysqli_query($link,"UPDATE lol SET isDelete = 'yes' WHERE id = $id");
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