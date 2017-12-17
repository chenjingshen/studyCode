window.addEventListener('load', function () {
    // 模块部分
    module();
    // 商品部分
    goods();
})


// 模块部分
function module() {
    $.get("http://127.0.0.1:9090/api/getindexmenu", function (backdata) {
            // console.log(backdata);
            $('#module .row').html(template('module-tem', backdata));
    })
    $('#module .row ').on('click','.col-xs-3:eq(7)', function () {
            $('#module .col-xs-3:eq(8)').toggle();
            $('#module .col-xs-3:eq(9)').toggle();
            $('#module .col-xs-3:eq(10)').toggle();
            $('#module .col-xs-3:eq(11)').toggle();
    })
}

// 商品部分
function goods(){
    $.get('http://127.0.0.1:9090/api/getmoneyctrl',function(backdata){
        // console.log(backdata);
        $('#more-goods').html(template('goods-tem',backdata))
    })
}