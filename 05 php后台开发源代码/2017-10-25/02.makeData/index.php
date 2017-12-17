
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
        // 把在代码中的数据 插入到数据库中
        // 插入到数据库中 insert into 
        // 循环数据 生成  一堆 sql语句呢？
        include './data_lol_detail.php';

        // 循环数据
        // foreach 可以用来循环 关系型数组
        // 参数1 循环的关系型数组
        // $key 是 键
        // $value 对应的值
        foreach ($heroArr as $key => $value) {
            // var_dump($key);
            // echo '<br>';
            // var_dump($value);
            // echo '<br>';

            /*
                利用了如下快捷键
                    ctrl+d 选到类似的东西
                    home 行头
                    end  行尾
                ctrl +左右键
            */
            $champion_icon = addslashes($value["champion_icon"]);
            $champion_name = addslashes($value["champion_name"]);
            $champion_title = addslashes($value["champion_title"]);
            $champion_info = addslashes($value["champion_info"]);
            $champion_tags = addslashes($value["champion_tags"]);


           echo  "INSERT INTO lol (champion_icon,champion_name,champion_title,champion_info,champion_tags) values ('$champion_icon','$champion_name','$champion_title','$champion_info','$champion_tags');";
           echo '<br>';
        }

        /*
            数据中有'  把单引号 自动添加 \
        */

    ?>
</body>
</html>
