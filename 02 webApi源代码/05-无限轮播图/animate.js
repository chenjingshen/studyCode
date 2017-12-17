/**
 * Created by J-LIN on 2017/9/20.
 */
function animate(obj, target) {

    //�ڴ����µļ�ʱ��֮ǰ����ͣ����һ����ʱ��
    clearInterval(obj.timerID);

    obj.timerID = setInterval(function () {

        //������Ҫ���������һ����������õ�ֵ�����������������Ǹ�
        var step = target > obj.offsetLeft ? 9 : -9;

        //offsetLeft,���ܻ�ȡ��Ԫ�ص�ǰ��left��ֵ
        //ƫ��ֵ��Ҫ�߶��ٵ�ֵ
        //����Ǹ���������һ�������͵��ڼ�ȥ�����
        var offset = obj.offsetLeft + step;

        //���û��Ŀ��λ�ã��Ͱ�ƫ��ֵ��������
        //�����ǰƫ��ֵû��Ŀ�꣬��ô����һ��(���������ڲ���������һ��)
        //�����ǰƫ��ֵ����Ŀ��λ�û��ߴ���Ŀ��λ�ã���ô��ֱ�ӵ�Ŀ�꣨�������С�ڲ�����������1������ֱ������Ŀ�꣩
        if (Math.abs(target - obj.offsetLeft) > Math.abs(step)) { //��ǰλ�����������Ŀ��λ�ã���Ӧ��һ��һ���ƶ�

            obj.style.left = offset + "px";

        } else {

            //�������С�ڲ�����������1������ֱ������Ŀ��
            obj.style.left = target + "px";

            //ֹͣ��ʱ��
            clearInterval(obj.timerID);
        }

    }, 10)
};