<?php 
    // 接受id
    $id = $_GET['id'];

    // 连接数据库
    $link = mysqli_connect('localhost','root','root','study');

    // 执行SQL 删
    mysqli_query($link,"DELETE FROM lol  WHERE id = $id  ");

    // 获取受影响的行数
    $rowNum = mysqli_affected_rows($link);

    // 关闭连接
    mysqli_close($link);

    // 返回首页

?>
<script>
    window.location.href ='./recycle.php';
</script>