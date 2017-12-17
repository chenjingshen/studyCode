window.addEventListener("load",function(){
    pinpai();
})

function pinpai(){

    $.get('http://127.0.0.1:9090/api/getbrandtitle',function(backdata){
        console.log(backdata);
        $('#hot .col-xs-12').html(template('pinpai-tem',backdata));


        $('.hot-body').on('click',function(){
            var brandTitleId=$(this).attr('hot-brandTitleId');
            window.location.href='品牌跳转.html?id='+brandTitleId;
        })



    })

}