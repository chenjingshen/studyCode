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
    $arrstring=file_get_contents('data/user.txt');
    $userarr=unserialize($arrstring);
    $username=$_POST['username'];
    $passname=$_POST['passname'];
    if(isset($userarr[$username])==true){
        echo '<h3>',$username,'已被使用</h3>';
        echo '<p>','要不你试试',$username,'456?','</p>';
    }else{
        $userarr[$username]=$passname;
        $putstring=serialize($userarr);
        file_put_contents('./data/user.txt',$putstring);
        echo '<h3>恭喜你保存成功，<a id="a1">3</a>秒后将为您跳转至首页</h3>';
        ?>
        <script>
            var a1=document.getElementById('a1');
            var time=3;
        
            setInterval(function() {
                time--;
                a1.innerHTML=time;
                if(time==0){
                    window.location.href='index.html';
                }
            }, 1000);
        </script>
    <?php }
    
    ?>
</body>
</html>