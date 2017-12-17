<?php
  // 引入function
  require_once './functions.php';

  // 判断是否有数据提交
  if(isset($_POST['userName'])){
    // 获取数据
    $userName = $_POST['userName'];
    $userPass = $_POST['userPass'];

    // 查询数据
    $result = my_select("SELECT * FROM user WHERE user_name ='$userName' and user_pass = '$userPass' ");

    var_dump($result);
    if(count($result)==1){
      // 成功
      // 去首页 因为首页有一些效果需要登陆才能看到 所以使用 session记录
      session_start();
      $_SESSION['isLogin'] = 'yes';
      // 直接把用户数据 保存起来 
      $_SESSION['userInfo'] = $result;

      header('location:./index.php');
    }else{
      echo '<h2>哎呀，用户名或密码不对，要不注册一个把</h2>';
      // 失败
      header('refresh:2;url=./login.php');
    }
  }
?>
<!DOCTYPE html>
<html lang="zh-cn">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bootstrap 101 Template</title>

  <!-- Bootstrap -->
  <link href="lib/css/bootstrap.min.css" rel="stylesheet">

  <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
      <script src="http://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
      <![endif]-->
  <style>
    html,
    body {
      height: 100%;
      margin: 0;
      padding: 0;
    }

    .page-header {
      margin-top: 20px;
    }

    h1 {
      margin: 0;
    }

    body {}

    .container-fluid {
      background-color: #e7e7e7;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    form {
      background-color: skyblue;
      padding: 20px;
      width: 500px;
      border-radius: 20px;
      margin: 10px auto;
    }
    .btn-container{
      display: flex;
      justify-content: space-between;
    }
    .btn-container >*{
      width: 45%;
    }
    h2{
      margin-top: 0;
    }
  </style>
</head>

<body >
  <div class="container-fluid">
   
    <form method='post'>
        <h2>登陆</h2>
      <div class="form-group">
        <label for="exampleInputEmail1">用户名</label>
        <input name='userName' type="text" class="form-control"  placeholder="用户名">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">密码</label>
        <input name='userPass' type="password" class="form-control"  placeholder="密码">
      </div>
      <div class="checkbox">
        <label>
              <input type="checkbox"> 7天免登陆
            </label>
      </div>
      <div class="form-group btn-container">
        <a href='./register.php' type="button" class="btn btn-danger">注册</a>
        <button type="submit" class="btn btn-info">登陆</button>
      </div>
    </form>
  </div>
</body>

</html>
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="lib/js/jquery-1.12.4.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="lib/js/bootstrap.min.js"></script>