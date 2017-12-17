<?php
    // 设置中文编码
    header('content-type:text/html;charset=utf-8');

    // 接受提交过来的数据
    // var_dump($_POST);
    $userName = $_POST['userName'];
    $userPass = $_POST['userPass'];
    $userAddress = $_POST['userAddress'];
    $userHabbit = $_POST['userHabbit'];

    // 连接数据库
    $link = mysqli_connect('localhost', 'root', 'root', 'study');

    // 执行SQL语句
    // php中双引号的字符串中 如果写上了变量名 他会自动把变量的值 填充进去
    $sql = "insert into user (userName,userPass,userAddress,userHabbit) values ('$userName','$userPass','$userAddress','$userHabbit');";

    // var_dump($sql);
     mysqli_query($link,$sql);

    // 获取受影响的行数
    $rowNum = mysqli_affected_rows($link);
    var_dump($rowNum);

    // 关闭连接
    mysqli_close($link);

    // 跳转会 首页

?>
<script>
    // 跳转回首页
    window.location.href = './index.php';
</script>
