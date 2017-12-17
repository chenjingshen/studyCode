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
    // 查询
    function my_select($sql){
        // 连接数据库
        $link = mysqli_connect('localhost','root','root','study');
    
        // 执行SQL语句
        $result = mysqli_query($link,$sql);
    
        // 解析结果
        $data = mysqli_fetch_all($result);
    
        // 关闭连接
        mysqli_close($link);

        // 返回结果
        return $data;
    }

    // var_dump(my_select('select * from lol'));
    

    // 增删改
    function my_execute($sql){
        // 连接数据库
        $link = mysqli_connect('localhost','root','root','study');
    
        // 执行SQL语句
        $result = mysqli_query($link,$sql);
    
        // 受影响的行数
        $rowNum = mysqli_affected_rows($link);
    
        // 关闭连接
        mysqli_close($link);

        // 返回结果
        return $rowNum;
    }

    var_dump(my_execute('delete from lol where id = 1'));

    // 保存上传文件
    function my_saveFiles($fileKey,$fileName){
        // 假设 放到 ./images/
        // 转码
        $targetPath_GBK = iconv('utf-8','gbk',$fileName.$_FILES[$fileKey]['name']);

        // 保存上传的文件
        move_uploaded_file($_FILES[$fileKey]['tmp_name'],$targetPath_GBK);

        // 文件的 完整的 路径 ./icon/xxx.jpg;
        return  iconv('gbk','utf-8',$targetPath_GBK);
    }

    // 保存文件
   var_dump(my_saveFiles('icon','./icon/'));

?>
</body>
</html>
