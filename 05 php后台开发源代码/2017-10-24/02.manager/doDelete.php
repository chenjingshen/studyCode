<?php
    // 接受数据
    $deleteId = $_GET['deleteId'];

    // 连接数据库
    $link = mysqli_connect('localhost','root','root','study');

    // 执行SQL语句
    $sql = "delete from user where id = $deleteId";

    // var_dump($sql);
    mysqli_query($link,$sql);

    // 获取受影响的行数
    $rowNum = mysqli_affected_rows($link);

    // 关闭连接
    mysqli_close($link);

    // 跳转回首页
?>
<script>
    window.location.href = './index.php';
</script>