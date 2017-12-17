/**
 * Created by J-LIN on 2017/9/20.
 */
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