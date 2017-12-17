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