/**
 * Created by J-LIN on 2017/9/20.
 */

/**
 * 获得某个元素的属性
 * @param obj  哪个元素
 * @param property 获取什么属性
 * @returns {*}   属性的值
 */
function getStyle(obj, property) {

    //能力检测
    if (window.getComputedStyle) {

        return window.getComputedStyle(obj, null)[property];
    } else {
        //能来到这肯定是IE8以前的版本
        return obj.currentStyle[property];

    }
}


function animate(obj, target) {

    //在创建新的计时器之前，先停掉上一个计时器
    clearInterval(obj.timerID);

    obj.timerID = setInterval(function () {

        //步长：要根据是往右还是往左来得到值，往右是正，往左是负
        var step = target > obj.offsetLeft ? 9 : -9;

        //offsetLeft,就能获取到元素当前的left的值
        //偏移值：要走多少的值
        //如果是负数，加上一个负数就等于减去这个数
        var offset = obj.offsetLeft + step;

        //如果没到目标位置，就把偏移值赋给盒子
        //如果当前偏移值没到目标，那么就走一步(如果距离大于步长，就走一步)
        //如果当前偏移值到了目标位置或者大于目标位置，那么就直接到目标（如果距离小于步长，不够走1步，就直接跳到目标）
        if (Math.abs(target - obj.offsetLeft) > Math.abs(step)) { //当前位置如果不等于目标位置，就应该一步一步移动

            obj.style.left = offset + "px";

        } else {

            //如果距离小于步长，不够走1步，就直接跳到目标
            obj.style.left = target + "px";

            //停止计时器
            clearInterval(obj.timerID);
        }

    }, 10)
};


function animateSlow(obj, attrs, callback) {

    //清除原来的计时器
    clearInterval(obj.timerID);


    //匀速：运动过程中的运动速度是一样的
    obj.timerID = setInterval(function () {

        //默认当你全部都完成了，应该停止计时器了
        var isFinish = true;

        for (var key in attrs) {

            if (key == "opacity") {

                //此时目标就是你遍历到的value值
                var target = parseFloat(attrs[key]) * 100;

                //取到当前值(key就是要取的当前属性)
                //例如当前遍历到的key为left，这里取到的就是当前left的值
                var currentValue = parseFloat(getStyle(obj, key)) * 100;

                //先快后慢的算法
                var res = (target - currentValue ) / 3;

                var step = res > 0 ? Math.ceil(res) : Math.floor(res);

                //得到应该变化的值
                var offset = (currentValue + step ) / 100;

                //透明度不需要加px
                obj.style[key] = offset;

                console.log("key=" + key + "---" + "当前已经到了=" + offset);

                //不能在这里停止，应该所有都到了，我才停止
                //当前位置还没有到目标
                if (offset != target / 100) {

                    //没到目标就不允许停止计时器
                    isFinish = false;
                }


            }else if(key == "z-index"){

                //因为来到这，key肯定是z-index，所以直接取出z-index对应的目标值赋值给属性就可以了
                obj.style.zIndex = attrs[key];
            }
            else {

                //此时目标就是你遍历到的value值
                var target = parseInt(attrs[key]);

                //取到当前值(key就是要取的当前属性)
                //例如当前遍历到的key为left，这里取到的就是当前left的值
                var currentValue = parseInt(getStyle(obj, key));

                //先快后慢的算法
                var res = (target - currentValue ) / 10;

                var step = res > 0 ? Math.ceil(res) : Math.floor(res);

                //得到应该变化的值
                var offset = currentValue + step;

                //例如当前取到的是left，就代表赋值给left
                obj.style[key] = offset + "px";

                console.log("key=" + key + "---" + "当前已经到了=" + offset);


                if (offset != target ) {

                    //没到目标就不允许停止计时器
                    isFinish = false;
                }
            }

        }

        if (isFinish) {

            clearInterval(obj.timerID);

            //如果是函数，才当作函数来调用
            if (callback instanceof  Function) {
                callback();
            }
        }

    }, 50);
}