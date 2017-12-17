<?php
    // 读取json
    $jsonString = file_get_contents('./data/info.json');

    // 返回读取的json
    echo $jsonString;

?>