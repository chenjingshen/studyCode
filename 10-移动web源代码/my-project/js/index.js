window.addEventListener('load', function () {

    lunbo();
    tab();
    liebiao();
})
// 轮播图部分
function lunbo() {

    $.get("http://127.0.0.1:9091/api/getlunbo", function (backdata) {
        // console.log(backdata);
        $('.swiper-wrapper').html(template('lunbo-template', backdata));
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,

            // 如果需要分页器
            pagination: '.swiper-pagination',

            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            // 自动轮播
            autoplay: 1000,
            // 如果需要滚动条
            // scrollbar: '.swiper-scrollbar',
            // 加了自动轮播之后松开手之后就不会再自动轮播了
            autoplayDisableOnInteraction: false
        })
    })

}
// tab栏切换部分
function tab() {

    $.get('http://127.0.0.1:9091/api/gethometab/' + 1, function (backdata) {
        // console.log(backdata);
        $('.content-body').html(template('tab-template',backdata))
    })
    $('.content-title ul li').on('click', function () {
        var index=$(this).children().attr('index');
        $(this).addClass('active').siblings().removeClass('active');
        $.get('http://127.0.0.1:9091/api/gethometab/'+index,function(backdata){
            console.log(backdata);
        $('.content-body').html(template('tab-template',backdata))
        })
    })
}

// 显示下拉列表
function liebiao(){
    $('.switcher-left img').on('click',function(){
        $('#list').slideToggle();
    })
}