/**
 * Created by J-LIN on 2017/9/14.
 */
function id(sid) {

    return document.getElementById(sid);
}


/**
 * ȡ��˫��ǩ֮����ı�
 * @param ele �ʹ����㴫��ʲôԪ�أ��ҾͰ���ȡ���Ԫ�ر�ǩ�������
 * @returns {string} ȡ�����ı�
 */
function getTextContent(ele){

    //�������
    if(ele.textContent){ //0,'',undefined,null��ת��Ϊ��false

        //���֧��������ԣ���ֱ�������ȡ���ı��ٷ���
        return ele.textContent;

    }else{//֤����IE8��ǰ

        //����innerText����
        return ele.innerText;
    }
}

/**
 * �ҵ�ĳ��Ԫ�ص���һ���ֵ�Ԫ��
 * @param ele  ��˭����һ���ֵ�
 * @returns {*}  ��һ���ֵ�Ԫ��
 */
function getNextElementSibling(ele) {

    //�������
    if (ele.nextElementSibling) {

        return ele.nextElementSibling;
    } else {
        //֤����IE8��ǰ�汾

        //ֻҪtype����1���Ҿ�һֱ����һ��
        var node = ele.nextSibling;
        while(node.nodeType != 1){

            node = node.nextSibling;
        }

        return node;
    }
}


/**
 * �ҵ���һ���ֵ�Ԫ��
 * @param ele
 * @returns {*}
 */
function getPreviousElement(ele){

    if(ele.previousElementSibling){

        return ele.previousElementSibling;
    }else{

        //֤����IE8��ǰ
        var node =  ele.previousSibling;

        while(node.nodeType != 1){

            node = node.previousSibling;
        }

        return node;
    }
}

/**
 * ���ĳ��Ԫ�ص�����
 * @param obj  �ĸ�Ԫ��
 * @param property ��ȡʲô����
 * @returns {*}   ���Ե�ֵ
 */
function getStyle(obj, property) {

    //�������
    if (window.getComputedStyle) {

        return window.getComputedStyle(obj, null)[property];
    } else {
        //��������϶���IE8��ǰ�İ汾
        return obj.currentStyle[property];

    }
}