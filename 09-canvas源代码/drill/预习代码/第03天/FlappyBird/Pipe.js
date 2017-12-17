function Pipe(info) {
    //上面的部分的图片
    this.topImage = info.topImage;

    //下面的部分的图片
    this.bottomImage = info.bottomImage;

    //x
    this.x = info.x;

    this.canvas = info.canvas;
    this.context = info.context;

    //底部的间隔
    this.offsetY = info.offsetY;

    //柱子和柱子之是的间隔
    this.gap = info.gap;

    //速度
    this.speed = 2;

    //上下两根柱子的高度
    this.topHeight = 0;
    this.bottomHeight = 0;

    //调用一下initHeight
    this.initHeight();
}

Pipe.prototype = {
    constructor: Pipe,
    draw: function () {
        this.x -= this.speed;

        if (this.x <= - this.topImage.width) {
            this.initHeight();
            this.x = this.gap * 6 + this.topImage.width * 5;
        }

        //画上面的柱子
        this.context.drawImage(this.topImage, this.x, 0, this.topImage.width, this.topHeight);

        //画下面的柱子
        this.context.drawImage(this.bottomImage, this.x, this.topHeight + 100, this.bottomImage.width, this.bottomHeight);
    },

    //初始化柱子的高度
    initHeight: function () {
        //生成上半部分的柱子的高度， 100到250的一个随机值
        this.topHeight = 100 + 150 * Math.random();
        //100就是柱子上下之间的间隔
        this.bottomHeight = this.canvas.height - this.offsetY - this.topHeight - 100;
    }
}