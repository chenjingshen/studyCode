<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>静态网站</title>
  <style type="text/css">
    html,
    body,
    div,
    ul,
    img {
      padding: 0;
      margin: 0;
    }

    header {
      background: lightgreen;
      height: 50px;
      text-align: center;
      line-height: 50px;
      font: bold 24px/50px Arial;
    }

    nav {
      background: lightblue;
      height: 30px;
      line-height: 30px;
      padding-left: 180px;
    }

    section {
      background: lightyellow;
      min-height: 600px;
    }

    footer {
      background: lightgray;
      height: 50px;
      text-align: center;
      line-height: 50px;
    }

    #container {
      width: 1010px;
      height: auto;
      margin: auto;
      background: #E2F9AA;
      padding-bottom: 10px;
    }

    ul li {
      list-style: none;
      width: 190px;
      height: 200px;
      float: left;
      background: lightyellow;
      margin-left: 10px;
      margin-top: 10px;
    }

    ul li img {
      width: 190px;
      height: 170px;
      display: block;
      cursor: pointer;
    }

    ul li div {
      background: #7DBD50;
      width: 185px;
      height: 30px;
      line-height: 30px;
      padding-left: 5px;
    }

    a {
      text-decoration: none;
      text-align: center;
    }
  </style>
</head>

<body>
  <header>蔬菜水果网上超市</header>
  <nav>
    <a href="./index.php">水果</a>
    <a href="./index.php">蔬菜</a>
    <a href="./index.php">干果</a>
  </nav>
  <section>
    <div id="container">

      <ul>
      <?php 
          // 读取数据
          include './data/data_fruit_list.php';
          // 循环数据
          // 生成html页面
          for($i=0;$i<count($arr);$i++){
      ?>
        <li>
            <a href="<?php echo $arr[$i]['href']; ?>">
              <img src="<?php echo $arr[$i]['path']; ?>">
              <div><?php echo $arr[$i]['name']; ?></div>
            </a>
          </li>
      <?php } ?>
       
      </ul>
      <div style="clear: both;"></div>
    </div>
  </section>
  <footer>版权所有</footer>
</body>

</html>