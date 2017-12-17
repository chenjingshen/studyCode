/*
 * @Author: zhengwei
 * @Date:   2017-11-30 09:34:33
 * @Last Modified by:   zhengwei
 * @Last Modified time: 2017-11-30 11:54:52
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
        // 6. 把距离设置到ul的位移上 设置位移的时候还要加上之前的距离
        slideUl.style.transform = 'translateY(' + (currenY+distanceY) + 'px)';
    });
    // 7. 在滑动结束的时候把距离记录一下
    slideUl.addEventListener('touchend', function () {
    	// 记录不是一次是记录所有
    	currenY += distanceY;
    });
}
