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
        input{
            margin-top: 10px;
            width: 200px;
            height: 50px;
            font-size:30px;
            border-radius: 50%;
            border:none;
        }
    </style>
</head>
<body>
    <!-- 
        安装了 ease server插件之后
        ctrl+shift+enter 即可开启实时预览
     -->
     <h2>首页</h2>
     <table>
         <thead>
             <th>ID</th>
             <th>用户名</th>
             <th>密码</th>
             <th>地址</th>
             <th>爱好</th>
             <th>操作</th>
         </thead>
         <tbody>
        <?php
            // 连接数据库
            $link = mysqli_connect('localhost','root','root','study');

            // 执行SQL语句
            $result = mysqli_query($link,'select * from user');

            // 解析数据
            $data = mysqli_fetch_all($result);

            // 关闭连接
            mysqli_close($link);

            // for循环的上半部分
            for($i=0;$i<count($data);$i++){
        ?>
             <tr>
                 <td><?php echo $data[$i][0]; ?></td>
                 <td><?php echo $data[$i][1]; ?></td>
                 <td><?php echo $data[$i][2]; ?></td>
                 <td><?php echo $data[$i][3]; ?></td>
                 <td><?php echo $data[$i][4]; ?></td>
                 <td>
                     <a href="./doDelete.php?deleteId=<?php echo $data[$i][0]; ?>">删除</a>
                     <a href="./update.php?updateId=<?php echo $data[$i][0]; ?>">编辑</a>
                 </td>
             </tr>
        <?php } ?>
         </tbody>
     </table>
     <input  type="button" value='新增'>
</body>
</html>
<script>
   document.querySelector('input').onclick = function(){
       // 跳转到 新增页
       window.location.href = './insert.html';
   }

</script>