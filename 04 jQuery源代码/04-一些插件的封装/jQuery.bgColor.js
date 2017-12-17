/**
 * Created by itcast on 2017 10/18.
 */
(function ($) {

  $.fn.bgColor = function (color) {
    //谁调用这个方法，那这里的this就是那个谁。
    //这个this是一个jQuery对象。
    //console.log(this);
    this.css({
      'backgroundColor':color
    });


    return this;

  }



}(jQuery));