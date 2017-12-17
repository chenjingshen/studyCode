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
    .navbar-brand span {
      font-size: 15px;
      color: black;
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
        <a class="navbar-brand" href="#">英雄管理--<span>详情</span></a>
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


  <?php 
    //接受提交过来的数据
    $id= $_GET['id'];
    //连接数据库
    $link = mysqli_connect('localhost','root','root','study');
    //执行sql代码
    $result=mysqli_query($link,"SELECT * FROM lol WHERE id = $id");
    //解析数据
    $data = mysqli_fetch_all($result);

    /*
    // var_dump($data);
    array(1) { 
      [0]=> 
      array(6) { 
        [0]=> string(3) "113" 
        [1]=> string(6) "基兰" 
        [2]=> string(15) "时光守护者" 
        [3]=> string(201) "从干枯破裂的河床上升起的是一座大摆钟一样的塔。塔没有门也没有其他入口，固若金汤，无懈可击，无法通过攀爬或飞行进入。塔外面方圆百里寸草..." 
        [4]=> string(68) "tags: 辅助, 减速, 加速, 推塔, 打钱, 逃生, 爆发, 远程" 
        [5]=> string(24) "images/1415694905444.png" } }
    */
    
    // 关闭连接
    mysqli_close($link);

    // 渲染到页面上
  ?>
  <div class="jumbotron container">
    <h1><?php echo $data[0][2]; ?><span class="label label-default"><?php echo $data[0][1]; ?></span></h1>
    <img src="<?php echo $data[0][5]; ?>" alt="..." class="img-thumbnail">
    <p>
    <?php echo $data[0][4]; ?> </p>
    <p>
      <?php echo $data[0][3]; ?> </p>
    <p>
      <a class="btn btn-primary btn-lg" href="./modify.php?id=<?php echo $data[0][0]; ?>" role="button">修改</a>
      <a class='btn btn-info btn-lg' href="./doDelete.php?id=<?php echo $data[0][0]; ?>">删除</a>
    </p>
  </div>
</body>

</html>
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="lib/js/jquery-1.12.4.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="lib/js/bootstrap.min.js"></script>