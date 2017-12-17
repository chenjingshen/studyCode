// 商品部分
function goods() {
    $.get('http://127.0.0.1:9090/api/getmoneyctrl', {
        pageid: 1
    }, function (backdata) {
        console.log(backdata);
        $('#more-goods').html(template('goods-tem', backdata))
    })
};


window.addEventListener('load', function () {
    goods();
})