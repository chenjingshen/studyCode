function Land(info) {
    this.image = info.image;
    this.x = info.x;
    this.speed = 2;
    this.canvas = info.canvas;
    this.context = info.context;
}

Land.prototype = {
    constructor: Land,
    draw: function () {
        //向左移动
        this.x -= this.speed;
        //当移除舞台之后，就排在队伍的后面
        if (this.x <= -this.image.width) {
            //它的身后还有三个陆地对象
            this.x = this.image.width * 3;
        }

        this.context.drawImage(this.image, this.x, this.canvas.height - this.image.height);
    }
}