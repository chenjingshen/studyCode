<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <meta charset="utf-8">
  <!-- 让ie  使用 edge 来渲染页面 -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!-- 视口 可以根据需求 添加一些 选项 -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
  <title>Bootstrap 101 Template</title>

  <!-- Bootstrap -->
  <link href="lib/css/bootstrap.min.css" rel="stylesheet">

  <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--  html5shiv  html5新语义标签 兼容性 -->
  <!--[if lt IE 9]>
        <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  <style>
    img {
      width: 150px;
      margin-top: 15px;
    }

    .items {
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      justify-content: center;
    }

    .item {
      width: 200px;
      height: 200px !important;
      margin: 10px;
    }

    .item .thumbnail {
      height: 100%;
      font-size: 20px;
      overflow: hidden;
    }
  </style>
</head>

<body class='bg-danger'>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
          aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">英雄管理--<span>修改</span></a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">首页</a></li>
          <li><a href="#">新增</a></li>
        </ul>
        <form class="navbar-form navbar-left" role="search">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search">
          </div>
          <button type="submit" class="btn btn-default">Submit</button>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">回收站</a></li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
  <div class="container">
    <div class="panel panel-default">
      <div class="panel-body">
      <?php
        // 获取id
        $id = $_GET['id'];

        // 连接数据库
        $link = mysqli_connect('localhost', 'root', 'root', 'study');

        // 执行SQL语句
        $result = mysqli_query($link, "SELECT * FROM LOL WHERE id = $id ");

        // 解析结果
        $data =mysqli_fetch_all($result);

        // 关闭连接
        mysqli_close($link);

        // 渲染到页面上
        /*
        array(1) { 
          [0]=> 
            array(6) { 
              [0]=> string(3) "142" 
              [1]=> string(9) "么么大" 
              [2]=> string(9) "么么大" 
              [3]=> string(6) "123123" 
              [4]=> string(6) "123456" 
              [5]=> string(36) "./images/阿尔卑斯少女_icon.png" } }
        '*/
        // var_dump($data);
      
        ?>
        <form action='./doModify.php' method='post' enctype="multipart/form-data" >
          <div class="form-group">
            <input value='<?php echo $data[0][0]  ?>'  type="text" name='id'>
            <label >姓名</label>
            <input  value='<?php echo $data[0][1]  ?>'   type="text"  required class="form-control" name='champion_name' placeholder="姓名">
          </div>
          <div class="form-group">
            <label >外号</label>
            <input  value='<?php echo $data[0][2]  ?>'   type="text" required class="form-control" name='champion_title' placeholder="外号">
          </div>
          <div class="form-group">
            <label >关键字</label>
            <input  value='<?php echo $data[0][3]  ?>'   type="text" required class="form-control" name='champion_tags' placeholder="关键字">
          </div>
          <div class="form-group">
            <label >个性签名</label>
            <input  value='<?php echo $data[0][4]  ?>'   type="text" required class="form-control" name='champion_info' placeholder="个性签名">
          </div>
          <div class="form-group">
            <label for="exampleInputFile">头像</label>
            <input  value='<?php echo $data[0][5]  ?>'  type="file" required name='champion_icon'>
          </div>
          <button type="submit" class="btn btn-danger">修改</button>
          <a class='btn btn-info' href="#">返回</a>
        </form>
      </div>
    </div>
  </div>

</body>

</html>
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="lib/js/jquery-1.12.4.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="lib/js/bootstrap.min.js"></script>
