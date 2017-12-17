// 商品部分
function goods() {

    // var liheight=0;
    // var j=0;
    for (var i = 20; i < 40; i++) {
        // j+=1;
        $.get('http://127.0.0.1:9090/api/getmoneyctrlproduct',{productid:i}, function (backdata) {
            // console.log(backdata);
        // console.log(i);
            var lis=template('goods-tem', backdata);
            // 将获取到的所有li标签添加到ul中，可传标签
            var ul =$('#more-goods .data-uls');
            $(lis).appendTo(ul);


            // liheight=$('.data-li').height();
            // console.log(liheight);
            // console.log($('.data-uls').height=liheight*j);

        })
    }
};


window.addEventListener('load', function () {
    goods();
})