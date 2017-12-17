<?php
    // 设置返回的数据是XML
    header('content-type:text/xml;charset=utf-8');

    // 读取XML数据
    $xmlString = file_get_contents('./person.xml');

    // 返回读取的XML数据
    echo $xmlString;

?>