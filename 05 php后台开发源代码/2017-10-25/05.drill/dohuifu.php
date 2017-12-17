<?php
    //接受数据
    $id=$_GET['id'];
    //连接数据库
    $link=mysqli_connect('localhost','root','root','study');
    //执行sql代码
    mysqli_query($link,"update lol set isDelete = 'no' where id=$id ");
    //关闭连接
    mysqli_close($link);

?>
<script>
    window.location.href='./index.php';
</script>