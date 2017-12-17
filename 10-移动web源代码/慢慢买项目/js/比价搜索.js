// 比价搜索页面
window.addEventListener('load', function () {
    bijia();
})

function bijia() {

    $.get('http://127.0.0.1:9090/api/getcategorytitle', function (backdata) {
        // console.log(backdata);
        $('.mui-table-view').html(template('bijia-tem', backdata));

        $('.mui-table-view').on('touchstart','.mui-table-view-cell', function () {
            // console.log(1);
            var titleid1 =parseInt($(this).attr('zidingyi'));
            // console.log(titleid1);
            $.get('http://127.0.0.1:9090/api/getcategory', {
                titleid: titleid1
            }, function (backdata) {
                // console.log(backdata);
                $('.mui-content .row').html(template('bijialiebiao-tem', backdata));
                $('.mui-content .col-xs-4').on('click',function(){
                    var categoryId=$(this).attr('lianjie-categoryid');
                    console.log(categoryId);
                    window.location.href='./比价搜索-商品列表.html?id='+categoryId;
                })
            })
        })
    })

}