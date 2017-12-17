<?php
   // 导入函数
   require_once './functions.php';

  // 判断是否提交的数据
  if(isset($_POST['userName'])){
    // 如果提交了数据
    $userName = $_POST['userName'];
    // 验证用户是否已被注册
    $userInfo = my_select("SELECT * FROM chat_user WHERE userName ='$userName' ");
    if(count($userInfo)==0){
      $userPass = $_POST['userPass'];
      // 保存的文件路径
      $userIcon = my_saveFiles('userIcon','./images/');
      // var_dump($userIcon);
      // 写入数据库
      $rowNum = my_execute("INSERT INTO chat_user (userName,userPass,userIcon) values('$userName','$userPass','$userIcon')");

      // 去登陆页
      echo '<h2>恭喜你注册成功</h2>';
      header('refresh:2;url=./login.php');
      
    }else{
      echo '<h2>用户名已被使用，请检查</h2>';
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

    .btn-container {
      display: flex;
      justify-content: center;
    }

    .btn-container>* {
      width: 45%;
    }

    .tips {
      font-weight: 700;
      font-size: 22px;
      color: red;
    }
  </style>
</head>

<body>
  <div class="container-fluid">
    <form method='post' enctype="multipart/form-data" >
      <h2>注册</h2>
      <div class="tips">提示信息</div>
      <div class="form-group">
        <label>用户名</label>
        <input name='userName' required type="text" class="form-control" maxlength="10" placeholder="用户名">
      </div>
      <div class="form-group">
        <label>密码</label>
        <input name='userPass' required type="password" class="form-control" placeholder="Password">
      </div>
      <div class="form-group">
        <label>头像</label>
        <input name='userIcon' required type="file">
      </div>
      <div class="form-group btn-container">
        <a href='./login.php' class="btn btn-warning">返回登陆</a>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        <button type="submit" class="btn btn-danger">注册</button>
      </div>
    </form>
  </div>
</body>

</html>
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="lib/js/jquery-1.12.4.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="lib/js/bootstrap.min.js"></script>