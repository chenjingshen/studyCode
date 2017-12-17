/*
 * @Author: zhengwei
 * @Date:   2017-11-24 16:55:48
 * @Last Modified by:   zhengwei
 * @Last Modified time: 2017-11-24 16:55:57
 */
$(function() {
    $(window).on('resize', function() {
        // 1. 获取屏幕的宽度
        var windowWidth = $(window).width();
        //获取所有item
        var items = $('.carousel-inner .item');
        // 2. 判断屏幕宽度是大屏幕还是小屏幕  
        // 屏幕宽度大于640px就是大图 小于就是小图
        if (windowWidth > 640) {
            //大图 插入pc-img标签
            /*给每个item插入对应的图获取所有item*/
            items.each(function(index, value) { //index循环的索引  value是循环的元素
                /*获取当前item自定义属性的值*/
                // jquery获取 data方法
                var pcImg = $(value).data('pc-img');
                // 原生JS dataset数组
                // var pcImg = value.dataset['pc-img'];
                $(value).html('<a href="#" class="pc-img" style="background-image:url(' + pcImg + ')"></a>');
            });
        } else {
            //小图 插入mobile-img标签
            items.each(function(index, value) { //index循环的索引  value是循环的元素
                var mobileImg = $(value).data('mobile-img');
                $(value).html('<a href="#" class="mobile-img"><img src="' + mobileImg + '" alt=""></a>');
            });
        }
    }).trigger('resize'); // 可以在注册完事件后马上手动触发事件
})
