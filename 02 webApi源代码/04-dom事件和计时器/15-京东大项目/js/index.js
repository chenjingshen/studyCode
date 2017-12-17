 /**
 * Created by J-LIN on 2017/9/18.
 */

//找到小x
var close = id('closeTopAd');
var banner = id("banner");

//加点击事件
close.onclick = function () {
//
//        banner.innerHTML = "";
//        banner.style.height = "0";

    banner.style.display = "none";
}

//------------------ 以上是关闭首页顶部广告--------------------------
var spanHour= document.getElementById("spanHour");
var spanMin= document.getElementById("spanMin");
var spanSec= document.getElementById("spanSec");
var timeID=setInterval(function () {
     var hour=+spanHour.innerHTML;
     var min=+spanMin.innerHTML;
     var sec=+spanSec.innerHTML;
     sec--;
     if(sec<0){
         sec=59;
         min--;
     }
     if(min<0){
         min=59;
         hour--;
     }
     if(sec==0&&min==0&&hour==0){
         setInterval(timeID);
     }
     spanSec.innerHTML=sec>10? sec:"0"+sec;
     spanMin.innerHTML=min>10? min:"0"+min;
     spanHour.innerHTML=hour>10? hour:"0"+hour;
},1000);

//------------------ 以下是首页秒杀倒计时--------------------------
//找到显示小时的span
//var spanHour = id("spanHour");
////找到显示分的span
//var spanMin = id("spanMin");
////找到显示秒的span
//var spanSec = id("spanSec");
//
////每隔一秒调用一次
//var timerID = setInterval(function () {
//
//    //取出时
//    var hour = +spanHour.innerHTML;
//    //取出分
//    var min = +spanMin.innerHTML;
//    //取出秒
//    var sec = +spanSec.innerHTML;
//
//
//    //每隔1秒秒数减1
//    sec--;
//
//    //如果秒数--后小于0，代表1分钟过去了，就应该让分-1
//    if (sec < 0) {
//
//        sec = 59;//秒数从59开始（新的一分钟了）
//        min--;
//    }
//
//    if (min < 0) {
//        //新的小时开始了
//        min = 59;
//        hour--;
//    }
//
//    //如果全部为0停止计时器
//    if(hour==0 && min == 0 && sec == 0){
//
//        clearInterval(timerID);
//    }
//
//    spanSec.innerHTML = sec < 10 ? "0" + sec : sec;
//    spanMin.innerHTML = min < 10 ? "0" + min : min;
//    spanHour.innerHTML = hour < 10 ? "0" + hour : hour;
//
//}, 1000);