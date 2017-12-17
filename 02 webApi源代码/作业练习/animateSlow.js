/**
 * Created by Administrator on 2017/9/21 0021.
 */
function animateSlow(obj, target) {

    //清除原来的计时器
    clearInterval(obj.timerID);

    //匀速：运动过程中的运动速度是一样的
    obj.timerID = setInterval(function () {

        //向上取整
        //400 -  409 = -9 / 10 = ? -0.9  向上取整等于0  -0.9 向下取整变-1
        var res = (target - obj.offsetLeft) / 10;

        var step = res > 0 ? Math.ceil(res) : Math.floor(res);

        var offset = obj.offsetLeft + step;

        console.log("step=" + step + " | " + "offset=" + offset);

        //此时只要无条件移动就行了
        //因为根据我们的算法，最后那几步的步长只是1，只是1的话就是一个一个加位置，根本不会超过目标位置
        //所以直接加就行了
        obj.style.left = offset + "px";

        //加完以后到了目标位置就立即停止计时器
        if (obj.offsetLeft == target) {

            clearInterval(obj.timerID);
        }

    }, 50);
}