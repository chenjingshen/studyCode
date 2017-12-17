<?php
    // 设置中文
    header('content-type:text/html;charset=utf-8');

    // 连接数据库
    $link = mysqli_connect('localhost','root','root','study');

    // 执行SQL语句
    $result = mysqli_query($link,'select * from user');

    // 解析结果
    // 渲染到页面上 使用 table
    $data = mysqli_fetch_all($result);

    // echo '<pre>';
    // var_dump($data);
    // echo '</pre>';

    // 关闭连接
    mysqli_close($link);

?>
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
            border: 1px solid #000;
            width: 500px;
            margin: 0 auto;
            border-collapse: collapse;
            text-align: center;
            background-color: hotpink;
        }
        th{
            border: 1px solid #000;
            font-size:30px;
        }
        td{
            border: 1px solid #000;
        }
    </style>
</head>
<body>
    <table>
        <!-- 表头 ctrl+d -->
        <thead>
                <th>用户ID</th>
                <th>用户名</th>
                <th>用户密码</th>
                <th>用户地址</th>
                <th>用户爱好</th>
        </thead>
        <tbody>
        <!-- 循环生成 HTML结构 -->
        <?php for($i=0;$i<count($data);$i++){?>
            <tr>
                <td><?php echo $data[$i][0]; ?></td>
                <td><?php echo $data[$i][1]; ?></td>
                <td><?php echo $data[$i][2]; ?></td>
                <td><?php echo $data[$i][3]; ?></td>
                <td><?php echo $data[$i][4]; ?></td>
            </tr>
        <?php } ?>
        </tbody>
    </table>
</body>
</html>