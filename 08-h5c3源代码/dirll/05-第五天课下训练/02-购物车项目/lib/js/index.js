$(function () {
    $(".shoppingCar").fullpage({
        sectionsColor: ["#f9dd67", "#84a2d4", "#ef674d", "#ffeedd", "#cf4759", "#85d9ed", "#8ac060", "#84d9ed"],
        navigation: true,
        afterLoad: function (anchorindex, index) {

            //如果动画执行完就把所有元素的style清除掉
            $(".section div, .section img").attr("style", "");
            //如果动画没有执行完就直接停止动画
            $(".section div, .section img").stop();
            // 添加animation动画
            $(".section").removeClass("animate").eq(index - 1).addClass("animate");
            //第二屏动画
            if (index == 2) {
                $(".section2 .search01").animate({
                    marginLeft: -111
                }, 1000, "easeOutBack", function () {
                    $(".section2 .search02").show();
                    $(".section2 .search01").hide();
                    // 让search02延迟300毫秒执行动画
                    setTimeout(function () {
                        //让search02往右上角移动
                        $(".section2 .search02").animate({
                            marginLeft: 130,
                            height: 30,
                            bottom: 450
                        }, 1000)
                        //search02移动的同时 沙发放大
                        $(".section2 .sofas").animate({
                            height: 218,
                            opacity: 1
                        }, 1000)
                    }, 300);
                })
            }

            // 第四屏动画 到当前屏幕后过了500毫秒开始动画
            if (index == 4) {
                setTimeout(function () {
                    $(".section4 .carbox").animate({
                        marginLeft: 1000
                    }, 3000, "easeInElastic", function () {
                        $(".section4 .keyboard").animate({
                            opacity: 1
                        }, 300)
                    })
                }, 500)
            }

            if (index == 6) {
                // 刚进入网页是让网页有半秒的停顿
                setTimeout(function () {
                    // 让小盒子往右移动
                    $(".section .box").animate({
                        marginLeft: -125
                    }, 1000, function () {
                        // 当小盒子移动完成之后，沙发从上面调入小盒子中
                        $(".section6 .sofa").animate({
                            bottom: 425
                        }, 1000, function () {
                            // 掉入小盒子之后，沙发和小盒子一起往下掉，落入小车里
                            $(this).animate({
                                bottom: 135
                            }, 1000);
                            // 盒子掉入小车里
                            $(".section6 .box").animate({
                                bottom: 110
                            }, 1000, function () {
                                // 当盒子和车掉下来之后隐藏
                                $(this).hide();
                                $(".section6 .sofa").hide();

                                // 发车（背景也就是街道开始向左移动）
                                $(".section6 .street").animate({
                                    left: -1000,
                                    width: 3500
                                }, 5000, function () {
                                    // 男人从车里出来$
                                    $(".section6 .man").animate({
                                        height: 150,
                                        right: -20
                                    }, 1000, function () {
                                        // 男人向女孩家里走去
                                        $(this).animate({
                                            right: -230
                                        }, 1000, function () {
                                            $(".section6 .getpackage").show();
                                            // 请收货，延迟半秒开门
                                            setTimeout(function () {
                                                // 开门
                                                $(".section6 .door").show();
                                                // 半秒之后女孩从里面走了出来
                                                setTimeout(function () {
                                                    $(".section6 .girl").show().animate({
                                                        left: 2000
                                                    }, 2000);
                                                }, 500);
                                            }, 500);
                                        });
                                    });
                                });
                                // 发车发到一半时显示地址
                                setTimeout(function () {
                                    $('.section6 .address').show();
                                }, 1500);
                            })
                        })
                    })
                }, 500);
            }

            //获取屏幕的高度
            var wh = $(window).height();
            if (index == 8) {
                $(".section8").mousemove(function (event) {
                    // alert(1);
                    //使用pageXpageY拿到鼠标的坐标
                    var x = event.pageX;
                    var y = event.pageY;
                    //计算手的bottom值
                    var bottom = (449 - (wh - y)) > 0 ? wh - y - 449 : 0;
                    console.log(x + ":" + y);
                    $('.section8 .hand').css({
                        bottom: bottom,
                        left: x - 85
                    })
                });
                //点击再来一次回到第一页
                $('.section8 .again').click(function () {
                    $.fn.fullpage.moveTo(1);
                })
            }
        }
    });
});