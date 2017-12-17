<?php
    // 设置编码
    header('content-type:text/html;charset=utf-8');
    
    // 总的数据 
    // 引入的语法 
    include './data/heroData.php';

    // 提交过来的数据
    $heroName = $_GET['heroName'];

    // 增加验证的逻辑
    $result = isset($heroArr[$heroName]);
    // var_dump($result);
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
    <!-- 验证通过的逻辑 -->
    <?php  if($result==true){
            // 使用名字 获取详细信息
            $oneHero = $heroArr[$heroName];
    ?>
            <h2>
                <?php echo $oneHero['champion_title']; ?>---
                <span><?php echo $oneHero['champion_name']; ?></span>
            </h2>
            <h3>
                <?php echo $oneHero['champion_tags']; ?>
            </h3>
            <p>
                <?php echo $oneHero['champion_info']; ?>
            </p>
            <img src="<?php echo $oneHero['champion_icon']; ?>" alt="">
    <?php }else { ?>
            <h2>哥们，你输入的英雄不存在哦</h2>
            <a id='goIndex' href="./index.html">怼我去首页哦 --还有<span id='timeSpan'>3</span>秒自动去</a>
            <script>
                // 定时器 稍微等一会 返回首页 
                // SetTimeout 用户看不到过程 直接执行 
                /*
                    setTimeout(function() {
                        // 修改url
                        // 用js 调用一下 a标签的 点击事件
                        // document.getElementById('goIndex').click();
                        // js修改浏览器的 url
                        window.location.href ='./index.html';
                    }, 2000);
                */
                // 总时间
                var totalTime = 3;

                // 为了用户体验好一些 准备setInterval 让用户看到倒计时的过程
                setInterval(function(){
                    totalTime--;
                    // 设置给span
                    document.getElementById('timeSpan').innerHTML = totalTime;
                    // 如果时间为0  去首页
                    if(totalTime ==0){
                        window.location.href = './index.html';
                    }
                },1000)
            </script>
    <?php } ?>
</body>
</html>