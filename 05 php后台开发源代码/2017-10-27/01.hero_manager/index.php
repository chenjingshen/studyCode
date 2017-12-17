<?php
  // 引入函数 避免多次引入的问题 以及 引入失败 不能往下执行了
  require_once './functions.php';

  // SQL语句 --查询总数据
  // 默认查询所有
  $totalDatasql = "SELECT * FROM cq WHERE hero_status ='normal'";

  // 如果是查询 拼接多一些 语句
if (isset($_GET['s'])) {
    $s = $_GET['s'];
    // js中的 +=
    $totalDatasql.=" and hero_name like '%$s%' ";
}

  // 因为页码是可变的 所以定义变量 来保存页码
  $pageNum = 1; //页码
if (isset($_GET['p'])) {
    // 如果传递了页码 那么 使用传递过来的页码
    // 默认使用 1
    $pageNum = $_GET['p'];
}
  $pageSize = 4; // 页容量
  $startIndex = ($pageNum-1)*$pageSize; // 开始的索引 (页码-1)*页容量  （1-1）*4 = 0  （2-1）*4 = 4
  
  // 拼接 页码的语句
  $totalDatasql .="LIMIT $startIndex,$pageSize";

  // 总数据 带分页的数据
  $totalData = my_select($totalDatasql);

  // 查询所有的数据 以便计算总页数 数据的总条数
  $totalNum = count(my_select('SELECT * FROM CQ WHERE hero_status="normal" '));
  // var_dump($totalNum);

  // 计算总页数
  // var_dump(ceil($totalNum / $pageSize));
  $totalPageNum = ceil($totalNum / $pageSize)

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
      margin: 10px;
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
      <!-- 
          提交给自己 action
            如果是提交给自己 可以不写action
          提交的方法是 method
            如果是get提交 这个也可以不写
          name属性
          提交按钮

       -->
        <form class="navbar-form navbar-left">
          <div class="form-group">
            <input name='s' value='<?php echo isset($_GET['s'])?$_GET['s']:''; ?>' type="text" class="form-control" placeholder="Search">
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
          <li>
            <a href="./recycle.php">回收站</a>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
  <div class="container-fluid">

    <div class="page-title">
      <h1>角色列表</h1>
    </div>
    <div class="page-action">
      <!-- show when multiple checked -->
      <a class="btn btn-danger btn-sm" href="javascript:;" style="display: none">批量删除</a>
      <div class="btn-batch" style="">
          <button class="becomeBoy-all btn btn-info btn-sm">批量变男</button>
          <button class="becomeGirl-all btn btn-warning btn-sm">批量变女</button>
          <button class="becomeUnknow-all btn btn-danger btn-sm">批量未知</button>
          <button class="delete-selected btn btn-primary btn-sm">批量删除</button>
        </div>
      <ul class="pagination pagination-sm pull-right">
        <li>
          <a href="./index.php?p=<?php echo ($pageNum-1); ?>">上一页</a>
        </li>
    <!-- 循环生成li标签 -->
        <?php for ($i=1; $i<=$totalPageNum; $i++) { ?>
        <li class='<?php echo $i==$pageNum?'active':''; ?>' >
          <a href="./index.php?p=<?php echo $i; ?>"><?php echo $i; ?></a>
        </li>
        <?php } ?>
        <li>
          <a href="./index.php?p=<?php echo ($pageNum+1); ?>">下一页</a>
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
    <!-- 循环生成HTML结构 -->
        <?php for ($i=0; $i<count($totalData); $i++) { ?>
        <tr>
          <td class="text-center">
            <input value='<?php echo $totalData[$i][0]; ?>' type="checkbox">
          </td>
          <td><?php echo $totalData[$i][1]; ?></td>
          <td><img src="./images/icon/<?php echo $totalData[$i][2]; ?>" alt=""></td>
          <td><?php echo $totalData[$i][3]; ?></td>
          <td class="text-center">
              <a href="doBecomeBoy.php?id=<?php echo $totalData[$i][0]; ?>" class="btn btn-lg btn-info ">变男</a>
              <a href="doBecomeGirl.php?id=<?php echo $totalData[$i][0]; ?>" class="btn btn-lg btn-warning ">变女</a>
              <a href="doBecomeUnknow.php?id=<?php echo $totalData[$i][0]; ?>" class="btn btn-lg btn-primary ">未知</a>
              <a href="./doDelete.php?id=<?php echo $totalData[$i][0]; ?>" class="btn btn-lg btn-danger ">删除</a>
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
<!-- 直接写js -->
<script>
  /*
    需求1 全选
      点击 顶部的 checkbox时 全选 反选
        修改 下面的 checkbox的 选中状态 跟 他一样即可
    需求2 选下面，勾上面
      点击 tbody中的 checkbox 时 
      如果 全部被选中 勾选 上面的checkbox
      反之 取消勾选
    需求3 点击批量删除  获取 tbody中 被选中的  checkbox  进而 获取 id
  */
  $(function(){
    // 需求1 .click = function
    $('th input[type=checkbox]').click(function(){
      // 获取自己的选中状态
      var selfChecked = $(this).prop('checked');
      // 修改 
      $('tbody input[type=checkbox]').prop('checked',selfChecked);
    })

    // 需求2
    $('tbody input[type=checkbox]').click(function(){
      // tbody中的 checkbox 的个数
      var totalNum = $('tbody input[type=checkbox]').length;
      // tbody中的 被选中的 checkbox 的个数
      var checkedNum  = $('tbody input[type=checkbox]:checked').length;

      // 如果相等
      if(totalNum==checkedNum){
        $('th input[type=checkbox]').prop('checked',true);
      }else{
        $('th input[type=checkbox]').prop('checked',false);
      }
      
    })
    // 需求3 
    $('.delete-selected').click(function(){
      // 获取tbody中 被选中的 checkbox
      // each 是jQuery提供的 循环 jQuery对象的方法  i是索引 e是 当前循环的 dom元素

      // 定义字符串拼接id
      var id = '';

      $('tbody input[type=checkbox]:checked').each(function(i,e){
        // console.log(i+e);
        // dom获取value值
        // 把id 变为 id1,id2,id3,id4
        // console.log(e.value);
        id+=e.value;
        id+=',';
      })
      // js中删除最后一个 字符串
       id = id.slice(0,-1);
      // console.log(id);
      // js 修改url 怎么做？
      window.location.href = './doDelete.php?id='+id;
    })

    $('.becomeBoy-all').click(function () {
      // 获取被选中的 checkbox的id
      // 拼接为 id,id,id
      $id ='';
      $('tbody input[type=checkbox]:checked').each(function (i,e) {
        $id+=e.value;
        $id+=',';
      })
        $id = $id.slice(0,-1);
        // 发送到对应的地址即可
        window.location.href = './doBecomeBoy.php?id='+$id;
    })
    $('.becomeGirl-all').click(function () {
      // 获取被选中的 checkbox的id
      // 拼接为 id,id,id
      $id ='';
      $('tbody input[type=checkbox]:checked').each(function (i,e) {
        $id+=e.value;
        $id+=',';
        })
        $id = $id.slice(0,-1);
        // 发送到对应的地址即可
        window.location.href = './doBecomeGirl.php?id='+$id;
      })
    $('.becomeUnknow-all').click(function () {
      // 获取被选中的 checkbox的id
      // 拼接为 id,id,id
      $id ='';
      $('tbody input[type=checkbox]:checked').each(function (i,e) {
        $id+=e.value;
        $id+=',';
        })
        $id = $id.slice(0,-1);
        // 发送到对应的地址即可
        window.location.href = './doBecomeUnknow.php?id='+$id;
      })

  })

</script>
