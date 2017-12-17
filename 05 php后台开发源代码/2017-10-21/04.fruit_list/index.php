<?php
// 定义数组
$arr = array();
// 动态为数组添加内容
$arr[] = array('href' => 'detail/detail1.php?flag=banana','path' => 'img/banana1.jpg','name' => '香蕉');
$arr[] = array('href' => 'detail/detail1.php?flag=apple','path' => 'img/apple1.jpg','name' => '苹果');
$arr[] = array('href' => 'detail/detail1.php?flag=orange','path' => 'img/orange1.jpg','name' => '橘子');
$arr[] = array('href' => 'detail/detail1.php?flag=pineapple','path' => 'img/pineapple1.jpg','name' => '菠萝');
$arr[] = array('href' => 'detail/detail1.php?flag=mango','path' => 'img/mango1.jpg','name' => '芒果');
$arr[] = array('href' => 'detail/detail1.php?flag=grape','path' => 'img/grape1.jpg','name' => '葡萄');
$arr[] = array('href' => 'detail/detail1.php?flag=pomelo','path' => 'img/pomelo1.jpg','name' => '柚子');
$arr[] = array('href' => 'detail/detail1.php?flag=pawpaw','path' => 'img/pawpaw1.jpg','name' => '木瓜');
$arr[] = array('href' => 'detail/detail1.php?flag=kivi','path' => 'img/kivi1.jpg','name' => '猕猴桃');
$arr[] = array('href' => 'detail/detail1.php?flag=persimmon','path' => 'img/persimmon1.jpg','name' => '柿子');
$arr[] = array('href' => 'detail/detail1.php?flag=lemon','path' => 'img/lemon1.jpg','name' => '柠檬');
$arr[] = array('href' => 'detail/detail1.php?flag=pomegranate','path' => 'img/pomegranate1.jpg','name' => '石榴');
$arr[] = array('href' => 'detail/detail1.php?flag=pear','path' => 'img/pear1.jpg','name' => '梨');
$arr[] = array('href' => 'detail/detail1.php?flag=strawberry','path' => 'img/strawberry1.jpg','name' => '草莓');
$arr[] = array('href' => 'detail/detail1.php?flag=blueberry','path' => 'img/blueberry1.jpg','name' => '蓝莓');
$arr[] = array('href' => 'detail/detail1.php?flag=waxberry','path' => 'img/waxberry1.jpg','name' => '杨莓');
$arr[] = array('href' => 'detail/detail1.php?flag=peach','path' => 'img/peach1.jpg','name' => '桃');
$arr[] = array('href' => 'detail/detail1.php?flag=coconut','path' => 'img/coconut1.jpg','name' => '椰子');
$arr[] = array('href' => 'detail/detail1.php?flag=apricot','path' => 'img/apricot1.jpg','name' => '杏');
$arr[] = array('href' => 'detail/detail1.php?flag=cherry','path' => 'img/cherry1.jpg','name' => '樱桃');
?>
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
      <?php for($i=0;$i<count($arr);$i++){ ?>
          <li>
            <a href="detail/detail1.php?flag=banana">
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