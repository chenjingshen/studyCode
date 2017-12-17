$(function () {
    $(".shoppingcar").fullpage({
        sectionsColor: ["#f9dd67", "#84a2d4", "#ef674d", "#ffeedd", "#cf4759", "#85d9ed", "#8ac060", "#84d9ed"],
        navigation: true,
        afterLoad: function (anchorindex, index) {
            //如果动画已经执行完了， 把所有元素的style清掉
            $(".section div, .section img").attr("style", "");
            //如果动画没有执行完， 就直接停止动画
            $(".section div, .section img").stop();

            //如果使用css3给当前屏添加动画， 需要实现
            $(".section").removeClass("animate").eq(index - 1).addClass("animate");

            //如果是第二屏
            if (index == 2) {
                $(".section2 .search01").animate({
                    marginLeft: -111
                }, 1000, "easeOutBack", function () {
                    //让search02显示
                    $(".section2 .search02").show();
                    //search01隐藏
                    $(".section2 .search01").hide();

                    //让search02停留300ms， 延迟300ms执行动画
                    setTimeout(function () {
                        //让search02往右上角移动
                        $(".section2 .search02").animate({
                            marginLeft: 120,
                            bottom: 450,
                            height: 30
                        }, 1000);

                        //让沙发变大
                        $(".section2 .sofas").animate({
                            height: 218,
                            opacity: 1
                        }, 1000);
                    }, 300);
                });
            }

            if (index == 4) {
                setTimeout(function () {
                    $(".section4 .carbox").animate({
                        "margin-left": 1000
                    }, 3000, "easeInElastic", function () {
                        $(".section4 .keyboard").animate({
                            opacity: 1
                        }, 300);
                    });
                }, 500);
            }

            if (index == 6) {
                //刚刚进入当前页时， 让页面有半秒的停顿
                setTimeout(function () {
                    //让小盒子往右移动
                    $(".section6 .box").animate({
                        marginLeft: -125
                    }, 1000, function () {
                        //当小盒子移动完成之后， 沙发从上面掉入小盒子中
                        $(".section6 .sofa").animate({
                            bottom: 425
                        }, 1000, function () {
                            //掉入小盒子之后，沙发和小盒子一起往下掉，落后小车里
                            //沙发落入小车里
                            $(this).animate({
                                bottom: 425 - 290
                            }, 1000);
                            //盒子落入小车里
                            $(".section6 .box").animate({
                                bottom: 110
                            }, 1000, function () {
                                //当小盒子和沙发落下来之后， 隐藏
                                $(this).hide();
                                $(".section .sofa").hide();

                                //发车（背景也就街道开始向左移动）
                                $(".section6 .street").animate({
                                    left: -1000,
                                    width: 3500
                                }, 5000, function () {
                                    //男人从车里出来
                                    $(".section6 .man").animate({
                                        height: 150,
                                        right: -20
                                    }, 1000, function () {
                                        //男人向女方家里走动
                                        $(this).animate({
                                            right: -230
                                        }, 1000, function () {
                                            $(".section6 .getpackage").show();
                                            //请收货， 延迟半秒开门
                                            setTimeout(function () {
                                                //开门
                                                $(".section6 .door").show();
                                                //半秒之后，女孩从门里走了出来
                                                setTimeout(function () {
                                                    $(".section6 .girl").show().animate({
                                                        left: 2000
                                                    }, 2000);
                                                }, 500);

                                            }, 500);
                                        });
                                    });
                                });

                                //发车发到一半时， 显示地址
                                setTimeout(function () {
                                    $(".section6 .address").show();
                                }, 1500);
                            });
                        });
                    });

                }, 500);
            }

            //获取屏幕的高度
            var wh = $(window).height();
            //alert(wh);
            if (index == 8) {
                $(".section8").mousemove(function (event) {
                    //console.log("move");
                    // 如果在jquery中，要根据事件拿到鼠标的位置，就使用pageX， pageY;
                    var y = event.pageY;
                    var x = event.pageX;

                    //计算手的bottom的值
                    var bottom = (449 - (wh - y)) > 0 ? (wh - y) - 449 : 0;
                    // console.log(bottom);
                    $(".section8 .hand").css({
                        bottom: bottom,
                        left: x - 85
                    });
                });

                $(".section8 .again").click(function () {
                    $.fn.fullpage.moveTo(1);
                });
            }
        }
    });
})

/*
    js动画的总结：
    1. 用js实现动画实面太爽了。它需要用一个对象， 指定这个元素移动的终点位置， 或者终点属性值就可以;
    2. 指定完终点位置之后， 需要指定动画的执行时间， 用的毫秒
    3. 指定完时间之后，看一下是否需要某种动画的效果， 字符串
    4. 如果动画执行完成之后，还要做其它事件， 那么这件事， 就是回调函数
    5. 如果我们希望动画延迟执行，可以使用settimeout(function(){}, 500)
    6. jquery的动画执行的原理， 是给元素添加了一个style的属性， 如果想要移除动画， 只需要将style的属性设为空就可以
*/


/*
    jquery和css3实现动画的比较
    1. css实现动画的两种形式
        * transition: all 1s
        * @keyframs shake { 50% {width: 300px;}}
    2. css动画的触发方式
        * hover
        * css交集的， 添加移动animate类
    3. jquery实现动画的方式
        * 调animte()方法， 只需要指定元素的最终值，还可以指定其执行时间， 动画的样式， 还有回调函数
        * 有事件即可以触发
    4. 怎么用， 什么时候用
        * 如果说页面的动画比较简单， 就使用css， 如果比例复杂，就使用jquery
        * css3动画的兼容性，没有jquery动画的兼容性好， 如果对兼容性的要求较高，就使用jquery
        * 如果我们只是做移动web站，可以完全使用css， 因为移动web站， 在手机上访问的游览器都是最新版本，对css3的支持很好；不意味着，我们就不可以使用jquery了
        * 在实际开发中， 又可以用css， 又可以用jquery的时候， 看你哪个用得好

    
*/

/*
0. 让页面停顿0.5秒
1. 小盒子向右移动
3. 沙发落入小盒子
4. 小盒子和沙发落入小车
5. 发车，背景开始移动
6. 1.5秒之后，显示地址
7. 背景停止移动之后（停车）， 男人从车里走出（放大）
8. 男人向女孩子里家里走去
9. 请收货
10. 停顿0.5秒之后开门
11. 停顿0.5秒之后，女孩子出门
12. 向男人移动
*/