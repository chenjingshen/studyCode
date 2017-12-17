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

  <style>
    img {
      width: 150px;
      height: 150px !important;
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
    .navbar-brand span{
      font-size:15px;
      color:black;
    }
    .caption{
      text-align: center;
    }
    h3{
      margin: 5px;
    }
    .caption a{
      /* width: 80%; */
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
        <a class="navbar-brand" href="#">英雄管理--<span>回收站</span></a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li><a href="#">首页</a></li>
          <li><a href="#">新增</a></li>
        </ul>
        <form class="navbar-form navbar-left" role="search">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search">
          </div>
          <button type="submit" class="btn btn-default">搜索</button>
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

        <!-- 上面书数据 -->
        <div class="row">
        <?php  
          // 连接数据库
          $link = mysqli_connect('localhost','root','root','study');

          // 查询数据 条件是 isDelete = yes
         $result = mysqli_query($link,"SELECT * FROM lol WHERE isDelete='yes'");

          // 解析数据
          $data = mysqli_fetch_all($result);

          // var_dump($data);

          // 渲染到页面上
          for($i=0;$i<count($data);$i++){
        ?>
          <div class="col-sm-6 col-md-3">
            <div class="thumbnail">
              <img src="<?php echo $data[$i][5]; ?>" alt="...">
              <div class="caption">
                <h3><?php echo $data[$i][1]; ?></h3>
              <a href="./dohuifu.php?id=<?php echo $data[$i][0]; ?>" class="btn btn-primary" role="button">恢&nbsp;&nbsp;复</a> 
              <a href="./doKill.php?id=<?php echo $data[$i][0]; ?>" class="btn btn-danger" role="button">粉&nbsp;&nbsp;碎</a> 
              </div>
            </div>
          </div>
          <?php } ?>
        </div>
      </div>
    </div>
  </div>
  
</body>

</html>
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="lib/js/jquery-1.12.4.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="lib/js/bootstrap.min.js"></script>