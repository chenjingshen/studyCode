window.addEventListener("load",function(){
    pinpai();
})

function pinpai(){

    var url=window.location.href;
    var id=parseInt(url.split('=')[1]);
    // console.log(id);
    $.get('http://127.0.0.1:9090/api/getbrand',{brandtitleid:id},function(backdata){
        console.log(backdata);
        $('#hot .col-xs-12').html(template('pinpai-tem',backdata));

        var neirong=$('.hot-body:first-of-type .body-left').text();
        
        // console.log(neirong.length);
        // console.log(neirong.substr(2,neirong.length-2));
        var tex=neirong.substr(2,neirong.length-2)+'哪个牌子好';
        // console.log(tex);

        $('.hot-header span').text(tex);
        $('.tiaozhuan-xuanran').text(tex);
    })

}