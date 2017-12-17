/**
 * Created by itcast on 0010 10/10.
 */
//===========食物begin================================================
;(function (window) {
  //产生食物  食物有坐标xy,还有宽高width和height，还有背景颜色，所以说明食物是对象。
  //不管是那个食物都要显示在地图上，所以显示在地图上的这个方法应该写在原型中。

  //声明一个数组，保存食物
  var list = [];

  //Food构造函数
  function Food(x,y,width,height,color){
    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 20;
    this.height = height || 20;
    this.color = color || "green";
  }

  //原型
  Food.prototype.render = function (map) {
    //生成新食物之前，要把老食物给删掉
    remove();

    //a.随机产生食物的坐标xy。
    this.x = Math.floor(Math.random() * map.offsetWidth / this.width) * this.width;
    this.y = Math.floor(Math.random() * map.offsetHeight / this.height) * this.height;
    //让这个食物在地图上显示，如何显示？可以弄一个div，让这个div拥有这个食物的所有显示信息，
    var div1 = document.createElement("div");
    div1.style.position = "absolute";
    div1.style.left = this.x +"px";
    div1.style.top = this.y + "px";
    div1.style.width = this.width + "px";
    div1.style.height = this.height + "px";
    div1.style.backgroundColor = this.color;
    //让这个div装进这个map中。
    map.appendChild(div1);
    //把食物保存在那个list的数组中
    list.push(div1);
  }


  //删除食物的方法
  function remove (){
    for(var i = list.length-1;i>=0;i--){
      list[i].parentNode.removeChild(list[i]);
      list.pop();
    }
  }


  //把构造函数给暴露出去
  window.Food = Food;
}(window));
//===========食物end================================================
//===========蛇begin================================================
;(function (window) {
  //所有关于蛇的代码，都写在这个沙盒中。
  //蛇也有宽高，也有颜色，移动的方向，所以蛇也应该是一个对象。
  //要让蛇显示在地图上。不管游戏中有多少条蛇，都应该显示在地图上，所以显示在地图上的方法应该写在原型中。

  //声明一个数组，用来保存显示蛇的那些个div.
  var list = [];

  //存放颜色的数组
  var colors = ["skyblue","pink","hotpink","yellowgreen","greenyellow","purple","orange","blue"];

  //1.蛇构造函数
  function Snake(width,height,direction){
    this.width = width || 20;
    this.height = height || 20;
    this.direction = direction || "right";

    //蛇是有很多的节身体构成的。
    this.body = [
      {x:3,y:1,color:"red"},
      {x:2,y:1,color:"pink"},
      {x:1,y:1,color:"skyblue"}
    ];
  }


  //2.原型中添加  在地图上显示蛇的方法
  Snake.prototype.render = function (map) {
    //显示新蛇之前，把老蛇删掉。
    remove();


    //如何显示蛇，蛇有三节身体，每一节都要显示。
    for(var i = 0 ; i < this.body.length; i++){
      var snakeUnit = this.body[i]; //这里snakeUnit就是每一节蛇身体。
      //让每一节蛇身体对应一个div，显示在map地图中
      var div1 = document.createElement("div");
      div1.style.position = "absolute";
      div1.style.left = snakeUnit.x * this.width + "px";
      div1.style.top = snakeUnit.y * this.height + "px";
      div1.style.width = this.width + "px";
      div1.style.height = this.height + "px";
      div1.style.backgroundColor = snakeUnit.color;

      //把这div添加到map中
      map.appendChild(div1);

      //把当前这个div给装进那个list数组中。
      list.push(div1);
    }
  }

  //4.删除蛇  - 私有方法。
  //蛇是一个个的div，如果要删掉蛇，就应该找到这些div，让这些div的父亲， 把这些div给移除掉。
  function remove(){
    //遍历那个list数组，拿到一个个的div
    for(var i = list.length-1; i >= 0; i--){
      list[i].parentNode.removeChild(list[i]);

      list.pop();
    }
  }



  //3.蛇移动的方法
  Snake.prototype.move = function (food,map) {
    //a.蛇身体移动- 根据他的上一节身体移动
    //蛇身体移动之后的坐标  等于  他的上一节移动之前的坐标。
    var i = this.body.length - 1;  // 2 先拿到蛇最后一节的坐标。
    for(; i > 0;i--){
      this.body[i].x = this.body[i-1].x;
      this.body[i].y = this.body[i-1].y;
    }
    //b.蛇头移动-根据方向移动
    switch (this.direction){
      case "left":
        this.body[0].x--;
        break;
      case "right":
        this.body[0].x++;
        break;
      case "top":
        this.body[0].y--;
        break;
      case "bottom":
        this.body[0].y++;
        break;
    }


    //c.判断蛇有没有吃到食物-看蛇头的坐标和食物的坐标有没有重合，如果重合了就表示蛇吃到了食物
    var headX = this.body[0].x * this.width; //蛇头的x坐标
    var headY = this.body[0].y * this.height;
    var FoodX = food.x; //食物的x坐标
    var FoodY = food.y;
    if(headX == FoodX  && headY == FoodY){
      //表示蛇吃到了食物，长身体
      //蛇在移动的过程中吃了食物，要在尾巴那长一节身体，实际上蛇移动的过程中，最后一节的身体坐标，就是新长出来的身体坐标。
      var last = this.body[this.body.length-1]; //这个last就是最后一节身体
      this.body.push({
        x:last.x,
        y:last.y,
        color:colors[Math.floor(Math.random()*8)]
      });

      //吃掉了食物，再重新来一个食物-就是调用一下那个食物对象的render方法。
      food.render(map);
    }
  }


  //把构造函数给暴露出去
  window.Snake = Snake;
}(window));
//===========蛇end================================================
//===========游戏begin================================================
;(function (window) {
  //所有的关于游戏的逻辑代码，都写在这里。
  //控制什么时候显示蛇，什么时候显示食物，什么时候开始游戏...

  //声明一个变量，用来记录Game对象。
  var that = null;

  //1.构造函数-游戏对象（蛇、食物、地图）
  function Game(map){
    this.snake = new Snake();
    this.food = new Food();
    this.map = map;
    that = this; //此时that就相当于是这个game对象。
  }


  //2.有一个开始游戏的方法
  Game.prototype.start = function () {
    //a.让蛇和食物显示出来
    this.snake.render(this.map);
    this.food.render(this.map);

    //b.让蛇动一下，调用蛇的move方法
    //this.snake.move();
    //this.snake.render(map); //根据蛇的新坐标，重新显示蛇。
    runSnake();

    //c.调用一下bindKey()方法
    bindKey();
  }


  //3.让蛇一直动起来 -私有方法
  function runSnake(){
    //怎么样让蛇自动移动起来，写一个计时器，一直调用蛇的move和render方法就好了。
    var timerID = setInterval(function () {
      //计时器是window调用的，所以这个里面的this就是window。
      //console.log(this); //window  window中没有snake,所以window.snake就是undefined。
      //console.log(this.snake); //undefiend
      //this.snake.move(); //报错
      //this.snake.render(map);


      //我们要拿到蛇，而这个蛇在Game对象中。
      //console.log(this);
      this.snake.move(this.food,this.map);
      this.snake.render(map);


      //判断蛇有么有撞到墙
      var headX = this.snake.body[0].x * this.snake.width;
      var headY = this.snake.body[0].y * this.snake.height;
      if(headX >= this.map.offsetWidth || headY >= this.map.offsetHeight){
        alert("Game Over!");
        clearInterval(timerID);
      }
      if(headX < 0  || headY < 0){
        alert("Game Over!");
        clearInterval(timerID);
      }

    }.bind(that),200);
  }


  //4.获取按下键盘按的那个键，根据这个键修改蛇头的方向
  function bindKey(){
    //给页面注册一个事件
    document.addEventListener("keydown", function (e) {
      //获取按的是那个键
      e = e || window.event;
      console.log(e.keyCode); //左 37   上38    右39   下40
      switch (e.keyCode){
        case 37:
          this.snake.direction = "left";
          break;
        case 38:
          this.snake.direction = "top";
          break;
        case 39:
          this.snake.direction = "right";
          break;
        case 40:
          this.snake.direction = "bottom";
          break;
      }

    }.bind(that),false)
  }




  //把构造函数给暴露出去
  window.Game = Game;
}(window));
//===========游戏end================================================