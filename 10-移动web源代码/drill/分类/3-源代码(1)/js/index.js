/*
 * @Author: zhengwei
 * @Date:   2017-11-29 09:37:52
 * @Last Modified by:   zhengwei
 * @Last Modified time: 2017-11-30 09:17:38
 */
// 移动端有一些事件的比较新（滑动之类的事件） 必须使用 addEventListener 来添加
/*addEventListener 原生JS的添加事件的方法（HTML5新增的方法）
原生HTML4的添加事件的方式
jquery添加事件的方式
$(window).on('click')
window.onclick = function () {
    
}
window.onclick = function () {
    
}*/
window.addEventListener('load', function() {
    // 分别调用3个功能块的函数
    searchEffect();
    countDownEffect();
    slideEffect();
});
/*函数有2个作用
1. 封装一些要重复执行的代码 方便调用
2. 区分代码功能块  把每个功能的对应代码放到一个函数里面*/
// searchEffect 搜索框JS透明度渐变效果
function searchEffect() {
    /*1. 需求 ： 当搜索框在轮播图高度范围内滚动的时候就渐变背景色透明度 0 - 1渐变   
        当在轮播图高度范围内滚动的时候透明度  滚动条滚动条的距离/轮播图的高度*/
    var topbar = document.querySelector('#topbar');
    // 1. 添加一个滚动条滚动的事件   
    window.addEventListener('scroll', function(e) {
        // 2. 获取滚动条滚的距离
        var scrollTop = 0;
        if (document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
        } else {
            scrollTop = document.body.scrollTop;
        }
        // 3. 获取轮播图的高度
        var slideHeight = document.querySelector('#slide').offsetHeight;
        if (scrollTop < slideHeight) {
            // 4. 在轮播图高度范围内滚动就变化透明度  计算透明度用滚动条滚动的距离/轮播图的高度
            var opacity = scrollTop / slideHeight;
            // 5. 给搜索框的容器topbar设置背景色透明度
            topbar.style.backgroundColor = 'rgba(255,0,0,' + opacity + ')';
        } else {
            // 6. 当滚动条距离超过轮播图的高度给搜索框的容器topbar设置背景色透明度 透明固定为1
            topbar.style.backgroundColor = 'rgba(255,0,0,1)';
        }
    });
}
// 倒计时JS效果
function countDownEffect() {
    /*  1. 倒计时JS的需求 ： 有一个总时间 假设1个小时   每隔一秒总时间--  减完之后更新页面的时分秒
        （分别计算减完之后的总时间的时分秒设置到倒计时的标签上）*/
    // 2. 倒计时的优化 总时间不能写死(后台给你的一个时间)  通过Date的API计算一个总时间
    // 假如今天中午12点有一个商品要秒杀 求现在到今天中午12的时间
    var nowTime = new Date().getTime();
    /*new Date(2006,0,12,22,19,35);  0表示1月 在美国他们的月是0-11   0-6*/
    var fetureTime = new Date(2017, 10, 29, 12, 0, 0).getTime();

    // console.log(Math.floor((fetureTime - nowTime)/1000));
    var spans = document.querySelectorAll('.seckill-count-down span');
    /*1. 定义一个总时间 秒数（每秒要--）*/
    var time = Math.floor((fetureTime - nowTime) / 1000);
    // 2. 定义一个定时器  每隔1000毫秒执行1次
    var timeId = setInterval(function() {
        // 3. 在时钟里面每次总时间--
        time--;
        if (time <= 0) {
            time = 0;
            // 清除定时器
            clearInterval(timeId);
        }
        // 4. 分别计算减完之后的总时间的 时 分 秒
        /*计算小时   总时间 / 3600  一个小时是3600秒
        例如 3600 / 3600  == 1  7200 / 3600 == 2*/
        var hour = Math.floor(time / 3600);
        /*3700 秒  1 小时 零 100 秒  
        7300 秒  2 小时 零 100
        3700 % 3600 == 100
        7300 % 36 == 100*/
        // 计算分钟 总时间 % 3600 / 60
        var minute = Math.floor(time % 3600 / 60);
        // 计算秒 总时间 % 60
        var second = Math.floor(time % 60);
        // 5. 把时分秒分别放到倒计时时span标签上
        spans[0].innerHTML = Math.floor(hour / 10);
        spans[1].innerHTML = Math.floor(hour % 10);
        spans[3].innerHTML = Math.floor(minute / 10);
        spans[4].innerHTML = Math.floor(minute % 10);
        spans[6].innerHTML = Math.floor(second / 10);
        spans[7].innerHTML = Math.floor(second % 10);
    }, 1000)
}
// 轮播图的JS效果
function slideEffect() {
    /*1. 轮播图的需求
        1. 实现轮播图的自动无缝轮播*/
    // 1.1 定义一个索引 表示当前正在显示的轮播图需要位移的距离 
    // 默认索引是1因为轮播图默认就有一张图的位移 第一张其实的第个li 索引是1
    var index = 1;
    // 1.5 获取一张轮播图的宽度
    // 1.7 获取要做位移的ul
    var slideUl = document.querySelector('#slide .carousel-inner');
    var slideWidth = document.querySelector('#slide').offsetWidth;
    // 1.2 定义一个定时器 每隔1000毫秒执行1次 
    var timdId = null;

    function startTime() {
        timdId = setInterval(function() {
            // 1.3 在定时器里面索引++
            index++;
            // 1.4 计算加完之后位移的距离设置到ul的位移上 index*一张图的宽度
            // 1.6 设置ul位移 -index*一张图的宽度 因为ul要往左移动
            slideUl.style.transform = 'translate3d(' + (-index * slideWidth) + 'px,0px,0px)';
            // 1.8 给ul添加过渡效果  注意要带单位
            slideUl.style.transition = 'all 0.5s';
            // // 用一个定时器等0.2s才执行判断 （为什么等0.2s 要等第8到第九9过渡完成）
            // setTimeout(function() {
            //     if (index >= 9) {
            //         // 索引回到1的真实索引
            //         index = 1;
            //         // 1.6 设置ul位移 回到第一张的位置
            //         slideUl.style.transform = 'translateX(' + (-index * slideWidth) + 'px)';
            //         // 1.8 因为要迅速回去 清除过渡
            //         slideUl.style.transition = 'none';
            //     }
            // }, 200);
        }, 1000);
    }  
    startTime();
    // 2.1 获取所有小圆点的li
    var lis = document.querySelectorAll('.carousel-indicators li');
    // 1.9 添加一个过渡的完成事件 transitionend
    slideUl.addEventListener('transitionend', function() {
        console.log(index);
        // 1.10 判断当前的索引是从第8张切换到第一张的时候 等第8张过渡到第一张过渡完成后
        if (index >= 9) {
            // 索引回到1的真实索引
            index = 1;
            // 1.6 设置ul位移 回到第一张的位置
            slideUl.style.transform = 'translate3d(' + (-index * slideWidth) + 'px,0px,0px)';
            // 1.8 因为要迅速回去 清除过渡
            slideUl.style.transition = 'none';
        }
        // 4.11 当从第一张往前切换到第8张过渡完成后
        if (index <= 0) {
            // 4.12回到第8张图的真实的索引
            index = 8;
            //4.13 位移到第8张的位置
            slideUl.style.transform = 'translate3d(' + (-index * slideWidth) + 'px,0px,0px)';
            // 4.14 因为要迅速回去 清除过渡
            slideUl.style.transition = 'none';
        }

        // 2.2 清空所有小圆点的active类
        for (var i = 0; i < lis.length; i++) {
            // HTML5新增的类名操作 删除一个类名
            lis[i].classList.remove('active');
        }
        // 2.3 获取当前轮播图对应的小圆点 lis[index-1]  index从1开始小圆点的索引是0开始
        lis[index - 1].classList.add('active');


    });

    // 3.1 定义 开始的X 滑动中的X 滑动的距离X
    var startX = moveX = distanceX = 0;
    // 3.2 添加滑动开始事件 记录滑动开始的X的位置
    slideUl.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        // 3.6 在滑动开始的时候 清除定时器
        clearInterval(timdId)
    });
    // 3.3 添加滑动中的事件 记录滑动中的X的位置
    slideUl.addEventListener('touchmove', function(e) {
        moveX = e.touches[0].clientX;
        // 3.4 计算滑动的距离
        distanceX = moveX - startX;
        // 3.5 设置ul的位移 在轮播图已经到达的位置的基础上在加上滑动距离
        slideUl.style.transform = 'translate3d(' + (-index * slideWidth + distanceX) + 'px,0px,0px)';
        // 3.7 滑动的时候已经很慢不要添加过渡 清除过渡
        slideUl.style.transition = 'none';
    });

    // 4.1 添加一个滑动结束的时候（做判断当前的滑动的距离 如果超过1/3就翻页不超过就回弹）
    slideUl.addEventListener('touchend', function() {
        // 4.2 判断当前滑动的距离是否大于一张图片的1/3 用绝对值判断因为distnceX的值有可能是负值
        if (Math.abs(distanceX) > slideWidth / 3) {
            // 4.3 判断distanceX是正还是负值
            if (distanceX > 0) {
                //4.4 从左往右滑  切换到上一张 Index--
                index--;
            } else {
                //4.5 从右往左滑  切换到下一张 index++
                index++;
            }
            // 4.6 不管是是上一张还是下一张都要设置位移               
            slideUl.style.transform = 'translate3d(' + (-index * slideWidth) + 'px,0px,0px)';
            // 4.7 因为距离有点长需要慢慢移动加过渡
            slideUl.style.transition = 'all 0.2s';
        } else {
            //4.8 不超过1/3 回弹
            slideUl.style.transform = 'translate3d(' + (-index * slideWidth) + 'px,0px,0px)';
            // 4.9 因为距离有点长需要慢慢移动加过渡
            slideUl.style.transition = 'all 0.2s';
        }
        //4.10 切换完成图片之后重新开启定时器调用开启时钟的函数
        startTime();
    });
}
