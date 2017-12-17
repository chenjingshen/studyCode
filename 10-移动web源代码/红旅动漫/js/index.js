/**
 * Created by Administrator on 2017/11/28 0028.
 */
$(function() {
    //轮播图请求
    slides();
    tab();
    navClick();


})

//轮播图
function  slides() {
    $.ajax({
        url: 'http://127.0.0.1:9091/api/getlunbo',
        success: function (backdata) {
            //console.log(backdata);
            //console.log(1);
            $('#slide .swiper-wrapper').html(template('phon-slide', backdata));
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 1,
                //spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }

    });
}

//tab栏

function tab() {
    $.ajax({
        url:'http://127.0.0.1:9091/api/gethometab/'+1,
        success:function(backdata) {
            //console.log(backdata);
            $('#con').html(template('phon-con', backdata))
        },
        error:function() {
            console.log(1);
        }
    })


    $('#tab>ul>li> a').on('click',function() {
        //console.log(this);
        var tabNum = $(this).attr('indexs');
        //console.log(tabTxt);
        $('#tab>ul>li> a').removeClass('active');
        $(this).addClass('active');
        //请求数据
        $.ajax({
            url:'http://127.0.0.1:9091/api/gethometab/'+tabNum,
            success:function(backdata) {
                //console.log(backdata);
                $('#con').html(template('phon-con', backdata))
            },
            error:function() {
                console.log(1);
            }
        })
    })
}

//nav点击事件
function navClick() {
    var flag = true;
    $('#header .glyphicon-menu-hamburger').on('click',function() {
        console.log(1);
        if(flag) {
            $('.containers').css({
                'transform': 'translateX(35%)'
            })
            $('.main-containers .mask').show();
            flag=false;
        }
        else {
            $('.containers').css({
                'transform': 'translateX(0%)'
            })
            $('.main-containers .mask').hide();
            flag=true;
        }

    });

}

