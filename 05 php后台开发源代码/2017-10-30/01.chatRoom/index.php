<?php
  // 引入函数
  require_once './functions.php';


  // 定义聊天信息变量
  $messageInfo = array();
  // 当前用户的id
  $id = null;

  // 检查是否登陆 cookie
  if(isset($_COOKIE['isLogin'])){
    // 已登陆
    // 已经有用户id了 根据id查询用户信息
    $id = $_COOKIE['userId'];
    // 查询数据
    $data = my_select("SELECT * FROM chat_user WHERE id = $id");
    // var_dump($data);

    // 查询聊天信息
    $messageInfo = my_select("
    select 
    chat_user.id,
    chat_user.userName,
    chat_user.userIcon,
    chat_message.content,
    chat_message.id
    from chat_message inner join chat_user on chat_message.user_id = chat_user.id order by chat_message.id;
    ");

    // var_dump($messageInfo);

  }else{
    // 未登录
    // 打回登录页
    echo '<h2>未登录，请先登录</h2>';
    // header('location:./login.html');
    header('refresh:1;url=./login.php');
  }

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <style>
    html,
    body {
      height: 100%;
      box-sizing: border-box;
    }

    body {
      padding: 10px;
      margin: 0;
      /* padding: 20px; */
      background-color: #e7e7e7;
      display: flex;
      flex-direction: column;
    }

    .clearfix::before,
    .clearfix::after {
      content: '';
      visibility: hidden;
      clear: both;
      line-height: 0;
      height: 0;
      display: block;
    }

    .clearfix {
      zoom: 1;
    }

    .f_l {
      float: left;
    }

    .f_r {
      float: right;
    }

    .container {
      margin: 20px auto 0;
      width: 100%;
      min-width: 600px;
      flex: 1;
      display: flex;
      flex-direction: column;
      background-color: white;
      border: 1px solid skyblue;
      border-radius: 10px;
    }

    .message {
      border-bottom: 1px solid skyblue;
      /* height: 400px; */
      flex: 1;
      overflow-y: scroll;
      padding: 20px;
      box-sizing: border-box;
      transition: all 2s;
    }

    .control {
      height: 100px;
      display: flex;
      padding-left: 50px;
      padding-right: 50px;
    }

    .inputBox {
      height: 60px;
      margin-top: 20px;
      border-radius: 6px;
      outline: none;
      padding: 0;
      box-sizing: border-box;
      /* width: 500px; */
      flex: 1;
      font-size: 30px;
      box-shadow: 0 0 3px gray;
      border: 1px solid #ccc;
      transition: all .2s;
      padding-left: 10px;
    }

    .inputBox:focus {
      border-color: skyblue;
      box-shadow: 0 0 3px skyblue;
    }

    .sendButton {
      height: 70px;
      margin-top: 15px;
      margin-left: 20px;
      background-color: yellowgreen;
      width: 150px;
      border: none;
      outline: none;
      border-radius: 10px;
      color: white;
      font-size: 40px;
      font-family: '微软雅黑';
      cursor: pointer;
    }

    .message>div>a {
      text-decoration: none;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: skyblue;
      text-align: center;
      line-height: 50px;
      color: white;
      font-size: 25px;
      font-weight: 700;
      font-family: '微软雅黑';
    }

    .message>.left>a {
      background-color: hotpink;
    }

    a>img {
      width: 100%;
      height: 100%;
    }

    .message>.right>a {
      background-color: yellowgreen;
    }

    .message>div {
      padding: 10px 0;
    }

    .message>div>p {
      max-width: 600px;
      min-height: 28px;
      margin: 0 10px;
      padding: 10px 10px;
      background-color: #ccc;
      border-radius: 10px;
      word-break: break-all;
      position: relative;
      line-height: 28px;
      font-weight: 400;
      font-family: '微软雅黑';
      color: white;
      font-size: 20px;
    }

    .message>.left>p {
      background-color: skyblue;
    }

    .message>.left>p::before {
      content: '';
      position: absolute;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 6px solid skyblue;
      left: -5px;
      top: 15px;
    }

    .message>.right>p {
      color: black;
    }

    .message>.right>p::before {
      content: '';
      position: absolute;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 6px solid #ccc;
      right: -6px;
      top: 15px;
    }

    h2 {
      margin: 0;
      padding-bottom: 5px;
      font-family: '微软雅黑';
    }

    .right h2 {
      text-align: right;
    }

    .user a {
      font-weight: 700;
      color: black;
    }
  </style>
</head>

<body>
  <div class="title">
    <h1 class="f_l">聊天室</h1>
    <div class="user f_r">
      <h2 class=""><?php echo isset($data)?$data[0][1]:''; ?></h2>
      <img src="<?php echo isset($data)?$data[0][3]:''; ?>" alt="">
      <a href="./logout.php">登出</a>
    </div>

  </div>
  <div class="container">
    <div class="message">
    <?php for($i=0;$i<count($messageInfo);$i++){?>
  
      <!-- 自己的信息 -->
      <?php if($messageInfo[$i][0]==$id){?>
        <div class="right clearfix">
          <h2><?php echo $messageInfo[$i][1]; ?></h2>
          <a href="#" class='f_r'>
            <img src="<?php echo $messageInfo[$i][2]; ?>" alt="">
          </a>
          <p class='f_r'><?php echo $messageInfo[$i][3]; ?>
            <br>
            --- <a href="./doDeleteMessage.php?id=<?php echo $messageInfo[$i][4]; ?>">撤回</a>
          </p>
        </div>
      <?php }else{ ?>
          <!-- 其他的信息 -->
        <div class="left clearfix">
          <h2><?php echo $messageInfo[$i][1]; ?></h2>
          <a href="#" class='f_l'>
            <img src="<?php echo $messageInfo[$i][2]; ?>" alt="">
          </a>
          <p class='f_l'><?php echo $messageInfo[$i][3]; ?></p>
        </div>
      <?php } ?>
    <?php } ?>
    </div>
    <form action="./saveMessage.php" method='post'>
      <div class="control">
        <input name='content' type="text" class='inputBox f_l'>
        <input type="submit" class='sendButton f_r' value='发 送'>
      </div>
    </form>
  </div>
</body>

</html>
<script src="./lib/js/jquery-1.12.4.js"></script>
<script>
  $(function(){
    // 页面打开之后 
    // 滚到底部
    // $('.message').scrollTop(2000);
    // 获取 message 中的 left 跟 right 把高度加起来 设置给 message的 scrollTop
    var totalHeight = 0;
    $('.message >div').each(function(i,e){
      // e是什么 dom元素 i是什么索引 .height 无法获取 padding
      // totalHeight+= $(e).height();
      totalHeight+= $(e).outerHeight();
    })
    // 总高度
    console.log(totalHeight);
    // 设置给message
    $('.message').scrollTop(totalHeight);
  })

</script>