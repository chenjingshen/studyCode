/**
 * Created by itcast on 0010 10/10.
 */
(function (window) {
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

