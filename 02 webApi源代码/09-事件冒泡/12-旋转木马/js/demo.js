/**
 * Created by Administrator on 2017/3/28.
 */
window.onload = function () {

    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "z-index": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "z-index": 3
        },//1
        {
            "width": 800,
            "top": 100,
            "left": 200,
            "opacity": 1,
            "z-index": 4
        },//2
        {
            "width": 600,
            "top": 70,
            "left": 600,
            "opacity": 0.8,
            "z-index": 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "z-index": 2
        }//4
    ];//其实就是一个配置单 规定了每张图片的大小位置层级透明度


    var wrap = document.getElementById("wrap");
    var arrow = document.getElementById("arrow");
    var liList = document.getElementsByTagName("li");
    var next = document.getElementById("arrRight");
    var prev = document.getElementById("arrLeft");


    for (var i = 0; i < config.length; i++) {

        animateSlow(liList[i], config[i]);
    }

    wrap.onmouseover = function () {

        animateSlow(arrow, {
            "opacity": 1
        });
    }

    wrap.onmouseout = function () {

        animateSlow(arrow, {
            "opacity": 0
        });
    }

    next.onclick = function () {

        config.unshift(config.pop());

        for (var i = 0; i < config.length; i++) {

            animateSlow(liList[i], config[i]);
        }
    }

    prev.onclick = function () {

        config.push(config.shift());

        for (var i = 0; i < config.length; i++) {

            animateSlow(liList[i], config[i]);
        }
    }

}