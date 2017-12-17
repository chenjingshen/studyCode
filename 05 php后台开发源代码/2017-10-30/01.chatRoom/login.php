<?php
  // 引入封装的函数
  require_once './functions.php';

  // 定义提示信息
  $message = null;

  // 如果通过post提交了数据过来
  if(isset($_POST['user_name'])){
    // 接受提交的数据
    $userName = $_POST['user_name'];
    $userPass = $_POST['user_pass'];

    // 验证数据的准确性--->数据库
    $data = my_select("SELECT * FROM chat_user WHERE userName ='$userName' and userPass ='$userPass' ");
    var_dump($data);
    if(count($data)==1){
      // 成功-->首页 记录cookie
      setcookie('isLogin','yes');
      // 因为用户的信息 在多个地方可能需要使用 把用户的id页保存起来
      setcookie('userId',$data[0][0]);
      // header('location:./index.php');
      header('refresh:1;url=./index.php');
      // 修改提示信息
      $message = '欢迎你回来';
    }else{
      // 失败-->还是登录页
      // header('location:./login.php');
      header('refresh:1;url=./login.php');
      $message = '用户名，或密码错误。要不你先注册一下呗';
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
      justify-content: space-between;
    }

    .btn-container>* {
      width: 45%;
    }

    h2 {
      margin-top: 0;
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

    <form method='post'>
      <h2>登陆</h2>
      <div class="tips"><?php echo $message; ?></div>
      <div class="form-group">
        <label for="exampleInputEmail1">用户名</label>
        <input type="text" name='user_name' class="form-control" placeholder="用户名">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">密码</label>
        <input type="password" name='user_pass' class="form-control" placeholder="密码">
      </div>
      <div class="form-group btn-container">
        <a href='./register.php' class="btn btn-danger">注册</a>
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