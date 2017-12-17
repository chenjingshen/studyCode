/**
 * Created by itcast on 2017 10/18.
 */
(function ($) {
  //tab栏切换


  //我们需要，点击的li们，还有被选中的li的样式类
  //需要配合li展示的那些div，以及展示的那个div的样式类。

  /**
   * @param options.tabHead  tab栏点击的那些个东西
   * @param options.tabHeadClass  tab栏点击选中的类
   * @param options.tabBoby  下面展示的那些
   * @param options.tabBobyClass  下面展示的那些选中的类
   *
   *
   */
  $.fn.tab = function (options) {
    var $tab = this; //$tab就是那个需要切换的tab栏。

    //给tab栏上面的部分，每一个一个点击事件
    $tab.find(options.tabHead).on('click', function () {
      $(this).addClass(options.tabHeadClass).siblings().removeClass(options.tabHeadClass);

      //下面的那些对应索引的那个部分 要展示出来
      var idx = $(this).index();

      $tab.find(options.tabBody).eq(idx).addClass(options.tabBodyClass).siblings().removeClass(options.tabBodyClass);

    });
  }


  return this;

}(jQuery));