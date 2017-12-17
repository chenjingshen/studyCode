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


    //找到所有的li标签
    var liList = document.getElementsByTagName("li");

    for (var i = 0; i < liList.length; i++) {

        animateSlow(liList[i], config[i]);
    }


    //找到大盒子
    var wrap = document.getElementById("wrap");
    //找到装左右箭头的盒子
    var arrow = document.getElementById("arrow");

    //移到大盒子的时候，显示arrow
    wrap.onmouseover = function () {

        //arrow.style.opacity = 1;
        animateSlow(arrow, {
            "opacity": 1
        })
    }

    //大盒子移出的时候隐藏箭头
    wrap.onmouseout = function () {

        //arrow.style.opacity = 1;
        animateSlow(arrow, {
            "opacity": 0
        })
    }


    //找到左边箭头（上一页）
    var prev = document.getElementById("arrLeft");
    //找到右边箭头（下一页）
    var next = document.getElementById("arrRight");


    //默认让它可以点
    var canClick = true;

    //下一页加一个点击事件
    next.onclick = function () {

        if (canClick) {

            //进来以后，代表我要开始设置样式了，所以让你不能点
            canClick = false;
            //把最后一个变到第0个，顺序就依次往后变了
            config.unshift(config.pop());

            //根据最新的数组元素，设置每一个li标签的样式
            for (var i = 0; i < liList.length; i++) {

                animateSlow(liList[i], config[i], function () {

                    //当动画完成就让是否能点击的开关变为true
                    canClick = true;
                });
            }

        }
    }


    //上一页加点击事件
    prev.onclick = function () {

        if(canClick) {

            canClick = false;
            config.push(config.shift());

            //根据最新的数组元素，设置每一个li标签的样式
            for (var i = 0; i < liList.length; i++) {

                animateSlow(liList[i], config[i], function () {

                    canClick = true;
                });

            }
        }
    }
}