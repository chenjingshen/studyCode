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
        <a class="navbar-brand" href="#">英雄管理--<span>首页</span></a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li><a href="#">首页</a></li>
          <li><a href="./add.html">新增</a></li>
        </ul>
        <form method='get' action='./index.php' class="navbar-form navbar-left" role="search">
          <div class="form-group">
            <input type="text" value='<?php echo isset($_GET['search'])?$_GET['search']:'';  ?>'   name='search' class="form-control" placeholder="Search">
          </div>
          <button type="submit" class="btn btn-default">搜索</button>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="./recycle.php">回收站</a></li>
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
        <div class="items">
        <?php 
            //连接数据库
            $link=mysqli_connect('localhost','root','root','study');
            //执行sql代码
            //根据情景设置不一样的情景
            $sql=null;
            if(isset($_GET['search'])){
                //如果有值查询
                $search=$_GET['search'];
                $sql="SELECT id, champion_name,champion_icon FROM lol WHERE champion_name like '%$search%' and isDelete= 'no' order by id desc";
            }else{
              //如果没有值默认访问所有数据
              $sql="SELECT id, champion_name,champion_icon FROM lol WHERE isDelete= 'no' order by id desc";
            }
            //执行sql代码
            $result= mysqli_query($link,$sql);
            //解析数据
            $data=mysqli_fetch_all($result);
            //关闭连接
            mysqli_close($link);
            //渲染页面
            for($i=0;$i<count($data);$i++){
        ?>
          <div class="item">
            <a href="./info.php?id=<?php echo $data[$i][0];  ?>" class="thumbnail">
              <img src="<?php echo $data[$i][2]; ?>" alt="...">
              <?php echo $data[$i][1]; ?>     </a>
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