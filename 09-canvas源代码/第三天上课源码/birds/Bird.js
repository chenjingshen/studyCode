function Bird(info) {
    this.image = info.image;
    this.x = info.x;
    this.y = info.y;
    //速度
    this.speed = 0;
    //加速度
    this.aspeed = 0.0005;

    this.canvas = info.canvas;
    this.context = info.context;

    this.index = 0;

    this.startTime = new Date();

    this.maxSpeed = 0.5;
    this.maxRadian = 0.5*Math.PI;
    //速度/最大速度 = 弧度/最大弧度
}

Bird.prototype = {
    constructor: Bird,
    draw: function () {
        var now = new Date();

        //单只小鸟的宽和高
        var w = this.image.width / 3;
        var h = this.image.height;

        this.index += 1;

        var xindex = this.index % 3;

        //计算当前帧的小鸟的速度和移动的距离
        var deltaTime = now - this.startTime;

        //计算出当前帧相对于上一帧移动的距离
        var s = this.speed * deltaTime + this.aspeed * deltaTime * deltaTime / 2;
        this.y += s;

        this.speed = this.speed + this.aspeed * deltaTime;

        this.startTime = now;

        this.context.drawImage(this.image, xindex * w, 0, w, h, this.x, this.y, w, h);
    }
}

/*
V0: 初速度
a： 加速度
Vt：结束速度
Va: 平均速度
S: 位移

Vt = V0 + a*t;
Va = (V0 + Vt) / 2;
S = Va * t = (V0 + Vt) / 2 * t = (V0 + V0 + a * t) / 2 * t = (2V0 + a*t) / 2 * t = V0*t + a * t * t / 2
* */

/*
学习方法： 脑袋里面养鱼
canvas:
1. 点->线->面（三角， 矩形， 圆形）-> 应用： 折线图， 柱状图， 饼图
2. 样式->文字->图片->图片放大器，小人的移动
3. 变形， 动画->钟表， 地图围绕太阳

h5c3
最新 html
最新 css css3
最新 jspai
弹性布局
动画
 */