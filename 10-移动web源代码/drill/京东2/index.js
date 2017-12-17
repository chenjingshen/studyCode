// 移动端有一些比较新的事件必须使用addEventListener来添加
window.addEventListener('load', function () {
    // 分别调用三个功能块的函数
    searchEffect();
    countDownEffect();
    slideEffect();
})



function searchEffect() {
    // 导航栏颜色渐变效果
    window.addEventListener('scroll', function (e) {
        var topbar = document.querySelector('#topbar');
        // 获取滚动条滚的距离
        var scrollTop = document.documentElement.scrollTop;
        var topbarHeight = document.querySelector('#slide').offsetHeight;
        var opc = scrollTop / topbarHeight;
        if (opc <= 1) {
            topbar.style.backgroundColor = "rgba(255,0,0," + opc + ")";
        } else {
            topbar.style.backgroundColor = "rgba(255,0,0,1)";
        }
    })
}


function countDownEffect() {

    // 秒杀倒计时
    var time = 3600;
    setInterval(function () {
        time--;
        var shi = parseInt(time / 3600);
        var fen = parseInt(time % 3600 / 60);
        var miao = parseInt(time % 60);
        var spans = document.querySelectorAll('.span-list span');
        spans[0].innerHTML = parseInt(shi / 10);
        spans[1].innerHTML = parseInt(shi % 10);
        spans[3].innerHTML = parseInt(fen / 10);
        spans[4].innerHTML = parseInt(fen % 10);
        spans[6].innerHTML = parseInt(miao / 10);
        spans[7].innerHTML = parseInt(miao % 10);
    }, 1000)
}


// 无限轮播图
function slideEffect() {
    var index = 1;
    // 获取要做位移的ul标签
    var ul1 = document.querySelector('#slide ul');
    // 获取单张轮播图的宽度
    var sw = document.querySelector('#slide').offsetWidth;
    // console.log(sw);

    var timeId = null;
    // 后面还需要调用这个函数，所以封装起来会比较方便
    function startTime() {
        // 定义一个计时器，每隔一秒执行一次
        timeId = setInterval(function () {
            index++;
            // 1.4 计算加完之后位移的距离设置到ul的位移上 index*一张图的宽度
            ul1.style.transform = 'translateX(' + (-index * sw) + 'px)';
            // 给ul添加过渡效果
            ul1.style.transition = 'all 0.2s';
        }, 1000)
    }
    // 默认就要调用一次
    startTime();

    // 获取所有小圆点的li
    var lis = document.querySelectorAll('.slide-span li');
    // 添加过渡完成事件
    ul1.addEventListener('transitionend', function () {
        if (index >= 9) {
            index = 1;
            // 设置ul位移，回到第一张的位置
            ul1.style.transform = 'translateX(' + (-index * sw) + 'px)';
            // 因为要迅速回去，清除过渡
            ul1.style.transition = 'none';
        }
        // 当从第一张往前切换到第八张的时候
        if (index <= 0) {
            // 回到第八张的索引
            index = 8;
            // 设置ul位移，回到第一张的位置
            ul1.style.transform = 'translateX(' + (-index * sw) + 'px)';
            // 因为要迅速回去，清除过渡
            ul1.style.transition = 'none';
        }
        // 清除所有小圆点的active类
        for (var i = 0; i < lis.length; i++) {
            // html5新增的类名操作
            lis[i].classList.remove('active');
        }
        // 给当前元素添加active类
        lis[index - 1].classList.add('active');
    });


    // 定义开始滑动的x 滑动中的x 滑动的距离
    var startX= 0;
    var moveX=0;
    var distanceX = 0;
    // 添加滑动开始事件
    ul1.addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX;
        // 在滑动开始的时候清除定时器
        clearInterval(timeId);
    })

    // 添加滑动中的事件
    ul1.addEventListener('touchmove', function (e) {
        moveX = e.touches[0].clientX;
        // 计算滑动的距离
        distanceX = moveX - startX;
        // 1.4 计算加完之后位移的距离设置到ul的位移上 index*一张图的宽度
        ul1.style.transform = 'translateX(' + (-index * sw + distanceX) + 'px)';
        // 滑动的时候已经很慢，不要添加过渡
        ul1.style.transition = 'none';
    })
    // 添加滑动结束事件 （判断当前滑动的距离，如果超过三分之一就翻页，否则回弹）
    ul1.addEventListener('touchend', function (e) {
        if (Math.abs(distanceX) > sw / 3) {
            // 判断distanceX的值是正值还是负值
            if (distanceX > 0) {
                // 从左往右滑，切换到上一张
                index--;
            } else {
                // 从右往左滑 下一张
                index++;
            }
            // 不管上一张还是下一张都需要位移
            // 设置ul位移，回到第一张的位置
            ul1.style.transform = 'translateX(' + (-index * sw) + 'px)';
            // 因为距离有点长，需要慢慢移动加过渡
            ul1.style.transition = 'all 0.2s';
        } else {
            // 设置ul位移，回到第一张的位置
            ul1.style.transform = 'translateX(' + (-index * sw) + 'px)';
            // 因为距离有点长，需要慢慢移动加过渡
            ul1.style.transition = 'all 0.2s';
        }

        // 滑动结束之后需要重新开启自动轮播 重新调用函数
        startTime();
    })

}