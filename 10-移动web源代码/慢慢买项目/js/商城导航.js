// 商品部分
function goods() {
    $.get('http://127.0.0.1:9090/api/getsitenav'
, function (backdata) {
        console.log(backdata);
        $('#daohang').html(template('goods-tem', backdata))
    })
};


window.addEventListener('load', function () {
    goods();
})