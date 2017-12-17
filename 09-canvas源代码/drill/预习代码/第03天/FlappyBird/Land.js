function Land(info) {
    this.x = info.x;
    this.canvas = info.canvas;
    this.context = info.context;
    this.image = info.image;

    this.speed = 2;
}

Land.prototype = {
    constructor: Land,
    draw: function () {
        this.x -= this.speed;
        if (this.x <= -this.image.width) {
            this.x = 3 * this.image.width;
        }

        context.drawImage(this.image, this.x, this.canvas.height-this.image.height, this.image.width, this.image.height);
    }
}