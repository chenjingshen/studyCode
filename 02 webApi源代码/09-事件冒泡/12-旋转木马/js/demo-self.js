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
    ];//��ʵ����һ�����õ� �涨��ÿ��ͼƬ�Ĵ�Сλ�ò㼶͸����


    //�ҵ����е�li��ǩ
    var liList = document.getElementsByTagName("li");

    for (var i = 0; i < liList.length; i++) {

        animateSlow(liList[i], config[i]);
    }


    //�ҵ������
    var wrap = document.getElementById("wrap");
    //�ҵ�װ���Ҽ�ͷ�ĺ���
    var arrow = document.getElementById("arrow");

    //�Ƶ�����ӵ�ʱ����ʾarrow
    wrap.onmouseover = function () {

        //arrow.style.opacity = 1;
        animateSlow(arrow, {
            "opacity": 1
        })
    }

    //������Ƴ���ʱ�����ؼ�ͷ
    wrap.onmouseout = function () {

        //arrow.style.opacity = 1;
        animateSlow(arrow, {
            "opacity": 0
        })
    }


    //�ҵ���߼�ͷ����һҳ��
    var prev = document.getElementById("arrLeft");
    //�ҵ��ұ߼�ͷ����һҳ��
    var next = document.getElementById("arrRight");


    //Ĭ���������Ե�
    var canClick = true;

    //��һҳ��һ������¼�
    next.onclick = function () {

        if (canClick) {

            //�����Ժ󣬴�����Ҫ��ʼ������ʽ�ˣ��������㲻�ܵ�
            canClick = false;
            //�����һ���䵽��0����˳��������������
            config.unshift(config.pop());

            //�������µ�����Ԫ�أ�����ÿһ��li��ǩ����ʽ
            for (var i = 0; i < liList.length; i++) {

                animateSlow(liList[i], config[i], function () {

                    //��������ɾ����Ƿ��ܵ���Ŀ��ر�Ϊtrue
                    canClick = true;
                });
            }

        }
    }


    //��һҳ�ӵ���¼�
    prev.onclick = function () {

        if(canClick) {

            canClick = false;
            config.push(config.shift());

            //�������µ�����Ԫ�أ�����ÿһ��li��ǩ����ʽ
            for (var i = 0; i < liList.length; i++) {

                animateSlow(liList[i], config[i], function () {

                    canClick = true;
                });

            }
        }
    }
}