/*
 * @Author: zhengwei
 * @Date:   2017-11-30 09:34:33
 * @Last Modified by:   zhengwei
 * @Last Modified time: 2017-11-30 15:46:50
 */

window.addEventListener('load', function() {
    leftSlideEffect();
});
// 左侧滑动的效果
function leftSlideEffect() {
    // 1. 获取左侧滑动的ul
    var slideUl = document.querySelector('.category-left ul');
    /*2. 定义变量 startY  moveY  distanceY currenY*/
    var startY = moveY = distanceY = currenY = 0;
    // 3. 添加滑动开始的事件记录开始Y的位置
    slideUl.addEventListener('touchstart', function(e) {
        startY = e.touches[0].clientY;
    });
    // 4. 添加滑动中事件 记录滑动中的Y的位置
    slideUl.addEventListener('touchmove', function(e) {
        moveY = e.touches[0].clientY;
        // 5. 计算滑动的距离Y 滑动中的位置 - 滑动开始的位置
        distanceY = moveY - startY;
        // 2.3 在滑动的时候判断 当前滑动的距离是否小于最大滑动值 并且大于最小的滑动值
        // if ((currenY + distanceY) > maxSwipe || (currenY + distanceY) < minSwipe) {
        //     return;
        // }
        if ((currenY + distanceY) < maxSwipe && (currenY + distanceY) > minSwipe) {
            // 6. 把距离设置到ul的位移上 设置位移的时候还要加上之前的距离
            slideUl.style.transform = 'translateY(' + (currenY + distanceY) + 'px)';
            // 2.9 因为滑动结束的时候回弹添加了过渡在滑动时候清除过渡
            slideUl.style.transition = 'none';
        }
    });
    // 7. 在滑动结束的时候把距离记录一下
    slideUl.addEventListener('touchend', function() {
        // 记录不是一次是记录所有
        currenY += distanceY;
        // 2.6 判断当前位移的距离是否超过最大位移值
        if (currenY > maxPosition) {
            // 2.7设置位移回到最大位移值
            slideUl.style.transform = 'translateY(' + maxPosition + 'px)';
            //2.8 这个距离有点大要添加过渡效果
            slideUl.style.transition = 'all 0.2s';
            // 2.10 注意回到了0的位置后下一次滑动要从0开始 更新currenY的值为0
            currenY = maxPosition;
        }
        // 2.11 判断当前的位移的距离是否超过了最小的位移值
        if (currenY < minPositon) {
            // 2.12设置位移回到最小位移值
            slideUl.style.transform = 'translateY(' + minPositon + 'px)';
            // 2.13这个距离有点大要添加过渡效果
            slideUl.style.transition = 'all 0.2s';
            // 2.13 注意回到了0的位置后下一次滑动要从0开始 更新currenY的值为0
            currenY = minPositon;
        }
    });
    // 最大最小滑动值 是滑动的时候判断用的值 touchmove事件里面用的
    // 2.1 计算最大的滑动值 正值 往下滑的时候
    var maxSwipe = 0 + 150;
    var categoryLeft = document.querySelector('.category-left');
    // 2.2 计算最小的滑动值
    var minSwipe = -(slideUl.offsetHeight - categoryLeft.offsetHeight + 150);

    // 最大最小位移值 是松开手的时候判断用的值 touchend事件里面用的
    // 2.4 定义最大的位移 子元素和父元素顶部相连的时候的滑动值
    var maxPosition = 0;
    //2.5 最小的位移值 子元素和父元素底部相连的时候的滑动值
    var minPositon = -(slideUl.offsetHeight - categoryLeft.offsetHeight);

    // 3.2 获取所有li
    var lis = slideUl.querySelectorAll('li');
    // 3.1 实现点击切换active类名  同时让当前点击的分类吸顶
    slideUl.addEventListener('click', function(e) {
        // 3.3 清空所有的li的active类名
        for (var i = 0; i < lis.length; i++) {
            // 3.6 先给所有li添加一个索引
            lis[i].index = i;
            lis[i].classList.remove('active');
        }
        // e.target获取真正被点击的子元素
        // console.dir(e.target.parentNode);
        // 3.4给当前点击的li添加active
        var li = e.target.parentNode;
        li.classList.add('active');
        // 3.5 计算当前点击的li 吸顶ul要位移的距离  -(当前li的索引*li的高度)
        var slideHeight = -(li.index * li.offsetHeight);
        // 3.7 判断当前位移的值是否小于最小的位移值
        if (slideHeight < minPositon) {
            // 3.8 就设置位移到最小位移值
            slideUl.style.transform = 'translateY(' + minPositon + 'px)';
            // 3.9 这个距离有点大要添加过渡效果
            slideUl.style.transition = 'all 0.2s';
            // 3.10 设置位移到了最小位移currentY也要更新
            currenY = minPositon;
        } else {
            //3.11 如果没有超出就设置计算的位移
            slideUl.style.transform = 'translateY(' + slideHeight + 'px)';
            //3.12 这个距离有点大要添加过渡效果
            slideUl.style.transition = 'all 0.2s';
            //3.13 设置位移到了计算的位移值currentY也要更新
            currenY = slideHeight;
        }
    });
}
