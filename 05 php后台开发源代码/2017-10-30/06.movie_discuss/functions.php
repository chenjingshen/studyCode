<?php

// 声明常量

// 常量的名字 用大小写字母 都是可以的 但是 建议 用大写 目的是跟普通的变量去区分（编码规范）
define('HOSTNAME','127.0.0.1');
define('USERNAME','root');
define('USERPASS','root');
define('DBNAME','movie');


// 查询
function my_select($sql)
{
    // 连接数据库
    $link = mysqli_connect(HOSTNAME, USERNAME, USERPASS, DBNAME);
    
    // 执行SQL语句
    $result = mysqli_query($link, $sql);
    
    // 解析结果
    $data = mysqli_fetch_all($result);
    
    // 关闭连接
    mysqli_close($link);

    // 返回结果
    return $data;
}
        // 增删改
function my_execute($sql)
{
    // 连接数据库
    $link = mysqli_connect(HOSTNAME, USERNAME, USERPASS, DBNAME);    

    // 执行SQL语句
    $result = mysqli_query($link, $sql);

    // 受影响的行数
    $rowNum = mysqli_affected_rows($link);

    // 关闭连接
    mysqli_close($link);

    // 返回结果
    return $rowNum;
}


// 保存上传文件
function my_saveFiles($fileKey, $fileName)
{
    // 假设 放到 ./images/
    // 转码
    $targetPath_GBK = iconv('utf-8', 'gbk', $fileName.$_FILES[$fileKey]['name']);

    // 保存上传的文件
    move_uploaded_file($_FILES[$fileKey]['tmp_name'], $targetPath_GBK);

    // 文件的 完整的 路径 ./icon/xxx.jpg;
    return  iconv('gbk', 'utf-8', $targetPath_GBK);
}

?>
