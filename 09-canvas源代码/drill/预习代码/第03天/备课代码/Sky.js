function Land(info) {
    this.canvas = info.canvas;
    this.context = info.context;
    this.x = info.x;
    this.image = info.image;
    this.speed = 10;
}

Land.prototype = {
    constructor: Land,
    draw: function () {
        if (this.x >= this.canvas.width) {
            this.x = this.canvas.width;
        }

        
    }
}