/**
 * Created by J-LIN on 2017/9/20.
 */
function animate(obj, target) {
    clearInterval(obj.timerID);
    obj.timerID = setInterval(function () {
        var step = target > obj.offsetLeft ? 90 : -90;
        var offset = obj.offsetLeft + step;
        if (Math.abs(target - obj.offsetLeft) > Math.abs(step)) { //��ǰλ�����������Ŀ��λ�ã���Ӧ��һ��һ���ƶ�
            obj.style.left = offset + "px";
        } else {
            obj.style.left = target + "px";
            clearInterval(obj.timerID);
        }
    }, 50)
};