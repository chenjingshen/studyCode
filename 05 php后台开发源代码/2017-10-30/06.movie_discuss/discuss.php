<?php

  //--------------------电影数据 查询
  // 引入函数
  require_once './functions.php';

  // 获取id
  $movieId = $_GET['movieId'];

  // 查询数据
  $movieData = my_select("
    SELECT * FROM movieInfo WHERE movie_id = '$movieId'
  ");
  // var_dump("SELECT * FROM movieInfo WHERE movie_id = '$movieId'");
  // var_dump($movieData);
  // 开启session
  session_start();
  // 渲染页面

  //-----------------------评论信息查询 连表查询
  $discussData = my_select("
  select 
  moviereview.review_content,
  user.user_name,
  user.user_icon
   from moviereview  inner join user on moviereview.user_id = user.user_id where movie_id='$movieId' order by moviereview.review_id desc
  ");
  // var_dump($discussData);
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
      border: 1px solid rgba(0, 0, 0, 0);
    }

    .page-header {
      margin-top: 20px;
    }

    h1 {
      margin: 0;
    }

    body {
      display: flex;
      flex-direction: column;
    }

    .container-fluid {
      width: 100%;
      flex: 1;
    }

    .row {
      height: 100%;
    }

    .col-xs-8 {
      height: 100%;
    }

    .bg-success {
      height: 80%;
      overflow-y: scroll;
      padding-top: 10px;
    }

    .text-muted {
      font-size: 12px;
    }
    .media-object{
      width: 80px !important;
      height: 80px !important;
    }
    .navbar-right li:first-child a{
      padding: 0 !important;
    }
    .navbar-right img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 10px;
    }
  </style>
</head>

<body class='bg-warning'>
  <div class="page-header">
    <h1>评论</h1>
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
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#" ><img src="<?php echo $_SESSION['userInfo'][0][3]; ?>" alt=""><?php echo $_SESSION['userInfo'][0][1]; ?></a></li>
                <li><a href="#">注销</a></li>
              </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-4">
        <div class="jumbotron">
          <h3><?php echo $movieData[0][1] ?></h3>
          <p>评分: <span class="text-danger"><?php echo $movieData[0][3] ?></span></p>
          <img class='img-thumbnail' src="<?php echo $movieData[0][4] ?>" alt="...">
        </div>
      </div>
      <div class="col-xs-8 info">
        <div class="container-fluid bg-success">
          <?php for($i=0;$i<count($discussData);$i++){?>
            <!-- 聊天内容 -->
            <div class="media">
              <div class="media-left">
                <a href="#">
                      <img class="media-object" src="<?php echo $discussData[$i][2]; ?>" alt="...">
                    </a>
              </div>
              <div class="media-body">
                <h4 class="media-heading"><?php echo $discussData[$i][1]; ?></h4>
                <p>
                <?php echo $discussData[$i][0]; ?>
                </p>
              </div>
            </div>
          <?php } ?>
        </div>
        <form action="./saveDiscuss.php" method='post'>
            <input value='<?php echo $movieId; ?>' hidden type="text" name='movieId'>
          <div class="input-group">
              <input name='content' type="text" class="form-control" placeholder="Search for...">
              <span class="input-group-btn">
                    <button class="btn btn-danger" type="submit">发表评论</button>
            </span>
          </form>
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