// 商品部分
function goods() {
    
        var url=window.location.href;
        var productid =parseInt(url.split('=')[1])
    
    $.get('http://127.0.0.1:9090/api/getproduct',{productid:productid},function(backdata){
        console.log(backdata);
        $('#media').html(template('goods-tem',backdata));
    })


    $.get('http://127.0.0.1:9090/api/getproductcom',{productid:productid},function(backdata){
        console.log(backdata);
        $('#media-siblings').html(template('siblings-tem',backdata));
    })

    };
    
    
    window.addEventListener('load', function () {
        goods();
    })