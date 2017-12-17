<?php
  // 引入函数
  require_once './functions.php';

  // 执行查询语句
  $data = my_select("SELECT * FROM cq WHERE hero_status ='deleted' ");

  // 渲染到页面上
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
    form {
      display: inline-block;
    }

    .pagination {
      margin: 0;
    }

    .page-action {
      margin: 10px 0;
    }

    .navbar-brand img{
      max-width: 100%;
      max-height: 100%;
      border-radius: 50%;
    }
    ul.nav li img{
      width: 40px;
      margin: 5px;
      height: 40px;
      border-radius: 50%;
    }
    .img-a{
      padding: 0 !important;
    }
    .btn-batch{
      display: inline-block;
    }
    .page-title{
      padding-bottom: 20px;
    }
    td{
      /* vertical-align:middle; */
      line-height: 90px !important;
      font-size:30px;
    }
    th{
      font-size:30px;
    }
  </style>
</head>

<body>
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
        <a class="navbar-brand" href="#">我是LOGO</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        
        <form class="navbar-form navbar-left">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search">
          </div>
          <button type="submit" class="btn btn-default">搜索</button>
        </form>
        <ul class="nav navbar-nav navbar-right">

          <li>
            <a class='img-a' href="#">路人甲
              <img src="./images/logo.png" alt="">
            </a>
          </li>
          <li>
            <a href="#">登陆</a>
          </li>
          <li>
            <a href="#">注销</a>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
  <div class="container-fluid">

    <div class="page-title">
      <h1>回收站</h1>
    </div>
    <div class="page-action">
      <!-- show when multiple checked -->
      <a class="btn btn-danger btn-sm" href="javascript:;" style="display: none">批量删除</a>
      <div class="btn-batch" style="">
          <button class="back-all btn btn-warning btn-sm">批量还原</button>
        </div>
      <ul class="pagination pagination-sm pull-right">
        <li>
          <a href="#">上一页</a>
        </li>
        <li class='active'>
          <a href="#">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">下一页</a>
        </li>
      </ul>
    </div>
    <table class="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th class="text-center" width="40">
            <input type="checkbox">
          </th>
          <th width='25%' >名字</th>
          <th width='25%' >头像</th>
          <th width='25%'>性别</th>
          <th width='25%' class="text-center" width="100">操作</th>
        </tr>
      </thead>
      <tbody>
      <?php for($i=0;$i<count($data);$i++){?>
        <tr>
          <td class="text-center">
            <input value='<?php echo $data[$i][0]; ?>' type="checkbox">
          </td>
          <td><?php echo $data[$i][1]; ?></td>
          <td><img src="./images/icon/<?php echo $data[$i][2]; ?>" alt=""></td>
          <td><?php echo $data[$i][3]; ?></td>
          <td class="text-center">
            <a href="./doBack.php?id=<?php echo $data[$i][0]; ?>" class="btn btn-warning btn-lg">还原</a>
          </td>
        </tr>
      <?php } ?>
      </tbody>
    </table>
  </div>

</body>

</html>
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="lib/js/jquery-1.12.4.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="lib/js/bootstrap.min.js"></script>
<script>
  $(function(){
    // 需求1 全选 反选
    $('th input[type=checkbox]').click(function(){
      $('tbody input[type=checkbox]').prop('checked',$(this).prop('checked'));
    })
    // 需求2 勾选 底部 选择 取消选择 顶部
    $('tbody input[type=checkbox]').click(function(){
      // 总个数
      var totalNum = $('tbody input[type=checkbox]').length;

      // 被选中的个数
      var checkedNum = $('tbody input[type=checkbox]:checked').length; 

      $('th input[type=checkbox]').prop('checked',totalNum==checkedNum);
    })

    // 需求3 点击批量还原 把被选中的值 获取 id，id
    $('.back-all').click(function(){
      // 被选中的checkbox
      var id = '';
      $('tbody input[type=checkbox]:checked').each(function(i,e){
        id+=e.value;
        id+=',';
      })
      id = id.slice(0,-1);
      window.location.href = './doBack.php?id='+id;
    })
  })
</script>