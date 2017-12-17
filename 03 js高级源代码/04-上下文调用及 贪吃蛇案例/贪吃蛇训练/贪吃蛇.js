/**
 * Created by Administrator on 2017/10/11 0011.
 */
//设置食物对象
(function (w) {

    function Food(x, y, width, height, color) {
        this.x = x || 0;
        this.y = y || 0;
        this.width = width || 20;
        this.height = height || 20;
        this.color = color || "blue";
    }

    var list = [];
    Food.prototype.render = function (map) {

        //生成新食物之前先把老食物删掉
        remove();
        this.x = parseInt(Math.random() * map.offsetWidth / this.width) * this.width;
        this.y = parseInt(Math.random() * map.offsetHeight / this.height) * this.height;
        //动态创建食物div
        var div = document.createElement("div");
        div.style.position = "absolute";
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.backgroundColor = this.color;
        div.style.left = this.x + "px";
        div.style.top = this.y + "px";
        map.appendChild(div);
        list.push(div)
    }
    function remove (){
        for (var i = list.length-1; i >=0 ; i--) {
            list[i].parentNode.removeChild(list[i]);
            list.pop();
        }
    }

    w.Food = Food;
}(window))

//设置食物对象
;
(function (w) {

    var list = [];
    var colors = ["black", "skyblue", "pink", "purple", "yellowgreen", "greenyellow", "orange"];
    function snake(width, height, direction) {
        this.width = width || 20;
        this.height = height || 20;
        this.direction = direction || "right";
        this.body = [
            {x: 3, y: 1, color: "red"},
            {x: 2, y: 1, color: "skyblue"},
            {x: 1, y: 1, color: "yellowgreen"}
        ]
    }

    snake.prototype.render = function (map) {

        //生成新蛇之前先把老蛇删掉
        remove();
        //每一节蛇都是一个div
        for (var i = 0; i < this.body.length; i++) {
            var snakeUnit = this.body[i];
            var div = document.createElement("div");
            div.style.position = "absolute";
            div.style.width = this.width + "px";
            div.style.height = this.height + "px";
            div.style.backgroundColor = snakeUnit.color;
            div.style.left = snakeUnit.x * this.width + "px";
            div.style.top = snakeUnit.y * this.height + "px";
            map.appendChild(div);
            list.push(div);
        }
    }

    function remove(){
        for (var i = list.length-1; i >=0 ; i--) {
            list[i].parentNode.removeChild(list[i]);
            list.pop();
        }
    }

    //让蛇动起来
    snake.prototype.move = function (food, map) {

        //蛇身根据他的上一节身体的坐标移动
        for (var i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        //蛇头根据方向移动
        switch (this.direction) {
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
        //如果if里面的条件成立则表示蛇头的坐标与食物的坐标重合，证明吃到了食物
        if (this.body[0].x * this.width == food.x && this.body[0].y * this.height == food.y) {
            //蛇在移动的过程中吃了食物，要在尾巴那长一节身体，实际上蛇移动的过程中，最后一节的身体坐标，就是新长出来的身体坐标。
            var last = this.body[this.body.length - 1]; //这个last就是最后一节身体
            this.body.push({x: last.x, y: last.y, color: colors[parseInt(Math.random() * 7)]})
            //吃掉了食物，再重新来一个食物-就是调用一下那个食物对象的render方法。
            food.render(map);
        }
    }

    w.snake = snake;

}(window));

//设置游戏对象
;
(function (w) {

    var that = null;

    function Game(map) {
        this.food = new Food();
        this.snake = new snake();
        this.map = map;
        that = this;  //此时that就相当于这个Game对象
    }

    //有一个开始游戏的方法
    Game.prototype.start = function () {
        this.snake.render(this.map);
        this.food.render(this.map);
        runSnake();
        bindKey();
    };
    //让蛇一直动起来--私有方法
    function runSnake() {
        var timerID = setInterval(function () {
            this.snake.move(this.food, this.map);
            this.snake.render(map);

            //判断蛇有没有撞到墙
            var headx = this.snake.body[0].x * this.snake.width;
            var heady = this.snake.body[0].y * this.snake.height;
            if (headx >= this.map.offsetWidth || headx < 0 || heady >= this.map.offsetHeight || heady < 0) {
                alert("Game over!");
                clearInterval(timerID);
            }
        }.bind(that), 200)
    }

    //获取键盘按得那个键，根据那个键改变蛇头的方向
    function bindKey() {
        document.addEventListener("keydown", function (e) {
            var e=e||window.event;
            console.log(e.keyCode);//左 37   上38    右39   下40
            switch (e.keyCode){
                case 37:
                    this.snake.direction="left";
                    break;
                case 38:
                    this.snake.direction="top";
                    break;
                case 39:
                this.snake.direction="right";
                break;
                case 40:
                    this.snake.direction="bottom";
                    break;
            }
        }.bind(that),false);
    }

    w.Game = Game;
}(window));