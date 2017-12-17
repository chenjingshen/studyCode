// 商品部分
function goods() {

    var url=window.location.href;
    var categoryid=parseInt(url.split('=')[1])



    $.get('http://127.0.0.1:9090/api/getcategorybyid',{categoryid:categoryid},function(backdata){
        console.log(backdata);
        $('#fanhuishouye').html(template('huoqu-tem',backdata));
    })
    $.get('http://127.0.0.1:9090/api/getproductlist',{categoryid:categoryid}, function (backdata) {
        console.log(backdata);
        $('#more-goods').html(template('goods-tem', backdata))
        
        $('.media').on('touchstart',function(){
            var productid = $(this).attr('media-productid');
            console.log(productid);
            window.location.href="./商品详情.html?id="+productid;
        })
    })

};


window.addEventListener('load', function () {
    goods();
})