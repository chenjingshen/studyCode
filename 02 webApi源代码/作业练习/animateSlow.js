/**
 * Created by Administrator on 2017/9/21 0021.
 */
function animateSlow(obj, target) {

    //���ԭ���ļ�ʱ��
    clearInterval(obj.timerID);

    //���٣��˶������е��˶��ٶ���һ����
    obj.timerID = setInterval(function () {

        //����ȡ��
        //400 -  409 = -9 / 10 = ? -0.9  ����ȡ������0  -0.9 ����ȡ����-1
        var res = (target - obj.offsetLeft) / 10;

        var step = res > 0 ? Math.ceil(res) : Math.floor(res);

        var offset = obj.offsetLeft + step;

        console.log("step=" + step + " | " + "offset=" + offset);

        //��ʱֻҪ�������ƶ�������
        //��Ϊ�������ǵ��㷨������Ǽ����Ĳ���ֻ��1��ֻ��1�Ļ�����һ��һ����λ�ã��������ᳬ��Ŀ��λ��
        //����ֱ�ӼӾ�����
        obj.style.left = offset + "px";

        //�����Ժ���Ŀ��λ�þ�����ֹͣ��ʱ��
        if (obj.offsetLeft == target) {

            clearInterval(obj.timerID);
        }

    }, 50);
}