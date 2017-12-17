/**
 * Created by J-LIN on 2017/9/14.
 */
function id(sid) {

    return document.getElementById(sid);
}


/**
 * 取到双标签之间的文本
 * @param ele 就代表你传入什么元素，我就帮你取这个元素标签里的内容
 * @returns {string} 取到的文本
 */
function getTextContent(ele){

    //能力检测
    if(ele.textContent){ //0,'',undefined,null能转换为成false

        //如果支持这个属性，就直接用这个取到文本再返回
        return ele.textContent;

    }else{//证明是IE8以前

        //就用innerText返回
        return ele.innerText;
    }
}

/**
 * 找到某个元素的下一个兄弟元素
 * @param ele  找谁的下一个兄弟
 * @returns {*}  下一个兄弟元素
 */
function getNextElementSibling(ele) {

    //能力检测
    if (ele.nextElementSibling) {

        return ele.nextElementSibling;
    } else {
        //证明是IE8以前版本

        //只要type不是1，我就一直找下一个
        var node = ele.nextSibling;
        while(node.nodeType != 1){

            node = node.nextSibling;
        }

        return node;
    }
}


/**
 * 找到上一个兄弟元素
 * @param ele
 * @returns {*}
 */
function getPreviousElement(ele){

    if(ele.previousElementSibling){

        return ele.previousElementSibling;
    }else{

        //证明是IE8以前
        var node =  ele.previousSibling;

        while(node.nodeType != 1){

            node = node.previousSibling;
        }

        return node;
    }
}

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