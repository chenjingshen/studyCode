//需要传递的属性的值{image: , x: , canvas: , context}
function Sky(info) {
    this.image = info.image;
    this.x = info.x;
    this.speed = 2;
    this.canvas = info.canvas;
    this.context = info.context;
}

Sky.prototype = {
    constructor: Sky,
    draw: function () {
        this.x -= this.speed;
        //当第一个胖子走出舞台， 迅速的跟到第二个胖子的后面
        if (this.x <= -this.image.width) {
            this.x = this.image.width;
        }

        this.context.drawImage(this.image, this.x, 0);
    }
}



