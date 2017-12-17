<?php
    $id= $_GET['id'];
    //连接数据库
    $link = mysqli_connect('localhost','root','root','study');
    //执行sql代码
    mysqli_query($link,"delete from lol where id ='$id'");
    //关闭连接
    mysqli_close($link);
    //返回回收站

?>
<script>
    window.location.href='./recycle.php';
</script>