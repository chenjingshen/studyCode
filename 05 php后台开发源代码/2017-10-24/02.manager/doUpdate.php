<?php
    // 接受数据
    $userName = $_POST['userName'];
    $userPass = $_POST['userPass'];
    $userAddress = $_POST['userAddress'];
    $userHabbit = $_POST['userHabbit'];
    $userId = $_POST['id'];

    // 连接数据库
    $link = mysqli_connect('localhost','root','root','study');

    // 执行SQL语句
    $sql = "update user set userName ='$userName',userPass ='$userPass',userAddress ='$userAddress',userHabbit ='$userHabbit' where id = $userId";
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