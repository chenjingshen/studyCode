<?php
    // 接受上传的文件
    // var_dump($_FILES);
    /*
        array(1) { 
            ["icon"]=> 
                array(5) { 
                    // 文件名
                    ["name"]=> string(6) "13.jpg"
                    // 文件类型
                    ["type"]=> string(10) "image/jpeg" 
                    // 临时文件名
                    ["tmp_name"]=> string(50) "C:\Users\autumnfish\AppData\Local\Temp\phpE203.tmp" 
                    // 错误 false 没有错
                    ["error"]=> int(0) 
                    // 大小
                    ["size"]=> int(1434) } 
            }
    */
    // 让代码休息一会
    // 这里sleep的目的是 让大伙看到那个临时文件 注释也是没有问题的

    // sleep(1);
    // 获取 文件的名字 这里的. 用来做字符串拼接
    $targetPath = './icon/'.$_FILES['icon']['name'];
    
    // 转换文件编码 utf-8 转换问 gb2312
    // 参数1 默认的编码格式
    // 参数2 要转换为的编码格式
    // 参数3 转换的字符串
    $targetPath=iconv("UTF-8","gb2312",  $targetPath);
    // var_dump($targetPath);


    // 移动文件
    // 参数1 移动的文件
    // 参数2 移动到哪个位置                             ./icon/13.jpg
    // move_uploaded_file($_FILES['icon']['tmp_name'],'./icon/'.$_FILES['icon']['name']);
    move_uploaded_file($_FILES['icon']['tmp_name'],$targetPath);
    

    /*
        问题
            中文图片上传乱码？
                百度，谷歌 找到关键字
                    文档查看使用方法
                解决了问题之后 去文档中看一看 参数是什么意思？
            文件上传完毕之后 预览这张上传的图片
    */
?> 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <img src="<?php echo $targetPath; ?>" alt="">
</body>
</html>