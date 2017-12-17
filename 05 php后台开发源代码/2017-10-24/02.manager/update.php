<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        body{
            background-color: skyblue;
        }
        table{
            width: 600px;
            margin: 0 auto;
            border-collapse: collapse;
            text-align: center;
            border-radius: 10px;
        }
        thead{
            background-color: yellowgreen;
            border-radius: 10px;
        }
        tbody{
            background-color: hotpink;
        }
        th{
            font-size:25px;
            border-radius: 10px;
        }
        th,td{
            /* border: 1px solid #000; */
            border-radius: 10px;
        }
        body{
            text-align: center;
        }
        /* input{
            margin-top: 10px;
            width: 200px;
            height: 50px;
            font-size:30px;
            border-radius: 50%;
            border:none;
        } */
        input{
            margin: 10px;
        }
    </style>
</head>
<body>
    <!-- 
        安装了 ease server插件之后
        ctrl+shift+enter 即可开启实时预览
     -->
     <h2>修改</h2>
     <?php
        // 接受数据
        $updateId = $_GET['updateId'];

        // 连接数据库
        $link = mysqli_connect('localhost','root','root','study');

        // 执行SQL语句
        $sql = "select * from user where id = $updateId";

        // var_dump($sql);s
        $result = mysqli_query($link,$sql);

        // 解析数据
        $data = mysqli_fetch_all($result);
        // var_dump($data);
        // 关闭连接
        mysqli_close($link);

        // 渲染到页面上
     
     ?>
     <form method='post' action="./doUpdate.php">
         <input hidden name='id' type="text" value='<?php echo $data[0][0]; ?>'>
         <br>
         <input name='userName' value='<?php echo $data[0][1] ?>' type="text"  placeholder="用户名">
         <br>
         <input name='userPass' value='<?php echo $data[0][2] ?>' type="text"  placeholder="密码">
         <br>
         <input name='userAddress' value='<?php echo $data[0][3] ?>' type="text"  placeholder="地址">
         <br>
         <input name='userHabbit' value='<?php echo $data[0][4] ?>' type="text"  placeholder="爱好">
         <br>
         <input type="submit" value='保存'>
         <input class='cancel' type="button" value='取消'>
     </form>
    
</body>
</html>
<script>
    document.querySelector('.cancel').onclick = function () {
        window.location.href='./index.php';
      }
</script>
