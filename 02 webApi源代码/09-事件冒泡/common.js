/**
 * Created by J-LIN on 2017/9/23.
 */
function getPageScroll() {

    return {

        scrollTop: window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop
        || 0,

        scrollLeft: window.pageXOffset
        || document.documentElement.scrollLeft
        || document.body.scrollLeft
        || 0
    }
}


function getClientSize() {

    return {

        clientWidth: window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth
        || 0,

        clientHeight: window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight
        || 0
    }
}


function getPagePosition(e) {

    return {

        pageX: e.pageX || getPageScroll().scrollLeft + e.clientX,
        pageY: e.pageY || getPageScroll().scrollTop + e.clientY
    }
}


/**
 * 添加事件的兼容性函数
 * @param obj 给哪个元素加事件
 * @param eventName  事件的名字
 * @param f   当触发事件后用什么函数响应
 */
function addEvent(obj, eventName, f) {

    if (obj.addEventListener) { //true

        //如果是谷歌浏览器，肯定会进到这里来
        obj.addEventListener(eventName, f)


    } else {

        //ie8以前，肯定会进到这里来，因为ie8里的addEventListener为undefined
        //就会转成false，为false就来到这个else了
        obj.attachEvent("on" + eventName, f)

    }
}

/**
 * 删除事件
 * @param obj 要删除事件的元素
 * @param eventName 事件名字
 * @param f  函数名
 */
function removeEvent(obj, eventName, f) {

    if (obj.removeEventListener) {

        obj.removeEventListener(eventName, f);

    } else {

        obj.detachEvent("on" + eventName, f);
    }
}