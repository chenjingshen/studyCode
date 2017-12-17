//info {x: 0, context: context, canvas: canvas, image: image}
//info就是创建对象要传的参数，你播撒的种子
function Sky(info) {
    this.x = info.x;
    this.context = info.context;
    this.canvas = info.canvas;
    this.image = info.image;
    this.speed = 2;
}

Sky.prototype = {
    constructor: Sky,

    //自已绘制自己
    draw: function () {
        //往左移动
        this.x -= this.speed;

        //当它移出舞台， 就马上跟到队伍的是后面
        if (this.x <= -this.canvas.width) {
            this.x = this.canvas.width;
        }

        //把自己绘制到画布上去
        this.context.drawImage(this.image, this.x, 0, this.canvas.width, this.canvas.height);
    }
}