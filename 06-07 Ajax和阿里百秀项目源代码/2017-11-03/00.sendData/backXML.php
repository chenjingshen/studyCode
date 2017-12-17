<?php
    // 返回
    header('content-type:text/xml;charset=utf-8');
    echo  file_get_contents('./data/person.xml');

?>