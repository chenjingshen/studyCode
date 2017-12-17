/**
 * Created by itcast on 0010 10/10.
 */
(function (window) {
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
