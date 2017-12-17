<?php
    // 接受post数据
    // var_dump($_POST);

    // 如果获取 上传的文件
    // var_dump($_FILES);

    // 保存上传的文件
    move_uploaded_file($_FILES['icon']['tmp_name'],'./files/'.$_FILES['icon']['name']);

    // 返回文件的路径 给浏览器
    echo './files/'.$_FILES['icon']['name'];
?>