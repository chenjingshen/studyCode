/**
 * Created by itcast on 0010 10/10.
 */
(function (window) {
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