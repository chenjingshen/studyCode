<?php
  // 直接导入函数
  require_once './functions.php';

  // 查询数据
  $moveData = my_select("SELECT * FROM movieinfo");
  // var_dump($moveData);

  // 渲染页面

  // 开启session 方便后续使用
  session_start();

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
      .page-header{
      margin-top: 20px;
    }
    h1{
      margin: 0;
    }
    /* .navbar-right li:first-child a{
      padding: 0 !important;
    } */
    .navbar-right img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 10px;
    }
    /* 
      样式的修改 需要考虑选中
      写的没用 很有可能是权重问题
      不建议 使用important 太暴力 一般只是在 测试的使用用居多
     */
    .img-thumbnail{
      width: 310px;
      height: 454px;
    }
    .navbar-right li{
      /* width: 58px;
      height: 50px; */
    }
    /* .navbar-nav>li>a */
    .navbar-nav>li>a.hasImg{
      padding:0;
    }
  </style>
</head>

<body class='bg-warning'>
  <div class="page-header">
    <h1>首页</h1>
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
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-left">
                <li><a href="#">首页</a></li>
              </ul>
          <form class="navbar-form navbar-left">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-default">搜索</button>
          </form>
          <ul class="nav navbar-nav navbar-right">
            <?php
              // 输出用户数据
              // var_dump($_SESSION['userInfo']);
              if(isset($_SESSION['userInfo'])){
            ?>
              <li><a class='hasImg' href="#" ><img src="<?php echo $_SESSION['userInfo'][0][3] ?>" alt=""><?php echo $_SESSION['userInfo'][0][1] ?></a></li>
            <?php }else{ ?>
              <li><a  href="./login.php">登陆</a></li>
            <?php } ?>
            <li><a href="./logout.php">注销</a></li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
  </div>
  <div class="container-fluid">
    <div class="row">
    <?php for($i=0;$i<count($moveData);$i++){?>
      <div class="col-xs-4">
          <div class="jumbotron">
              <h3><?php echo $moveData[$i][1]; ?></h3>
              <p>评分: <span class="text-danger"><?php echo $moveData[$i][3]; ?></span></p>
              <p>关键字: <span class="text-info"><?php echo $moveData[$i][5]; ?></span></p>
              <a href="<?php echo $moveData[$i][2]; ?>">
                  <img class='img-thumbnail' src="<?php echo $moveData[$i][4]; ?>" alt="...">
              </a>
              <?php 
                // 只有登陆了才会进来
              if(isset($_SESSION['isLogin'])){ ?>
                  <p><a class="btn btn-primary btn-lg" href="./discuss.php?movieId=<?php echo $moveData[$i][0]; ?>" role="button">查看评论</a></p>
              <?php } ?>
            </div>
      </div>
    <?php } ?>
    </div>
  </div>
</body>

</html>
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="lib/js/jquery-1.12.4.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="lib/js/bootstrap.min.js"></script>