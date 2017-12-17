function Pipe(info) {
    this.topImage = info.topImage; //上半截图片
    this.bottomImage = info.bottomImage; //下半截图片
    this.x = info.x;
    this.speed = 2;
    this.canvas = info.canvas;
    this.context = info.context;
    this.gap = info.gap; //柱子和柱子之间的间隔
    this.boffset = info.boffset; //底部的柱子离画布的底部的距离

    this.topHeight = 0;
    this.bottomHeight = 0;

    this.pipegap = 100;

    this.initHeight();
}

Pipe.prototype = {
    constructor: Pipe,
    draw: function () {
        this.x -= this.speed;
        if (this.x <= -this.topImage.width) {
            this.initHeight();
            this.x = 5 * this.topImage.width + 6 * this.gap;
        }

        this.context.rect(this.x, 0, this.topImage.width, this.topHeight);
        this.context.rect(this.x, this.topHeight + this.pipegap, this.bottomImage.width, this.bottomHeight);


        this.context.drawImage(this.topImage, this.x, 0, this.topImage.width, this.topHeight);

        this.context.drawImage(this.bottomImage, this.x, this.topHeight + this.pipegap, this.bottomImage.width, this.bottomHeight)
    },

    //生成柱子的随机高度
    initHeight: function () {
        //假设我让柱子的高度是150-250之间
        this.topHeight = 150 + Math.random() * 100;
        this.bottomHeight = this.canvas.height - this.topHeight - this.pipegap - this.boffset;
    }
}