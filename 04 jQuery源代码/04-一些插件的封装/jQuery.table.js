/**
 * Created by itcast on 2017 10/18.
 */
(function ($) {
  //根据数据生成一个表格。 谁调用这个table方法， 生成的表格就应该写在谁的身上。
  /**
   *
   * @param tableHead  数组 生成表头的
   * @param tableBody  数组 生成主体部分 ，每一个元素是一个对象
   */
  $.fn.table = function (tableHead,tableBody) {
    var arr = [];
    //生成表格的头部
    arr.push('<table><tr>');
    for(var i = 0 ; i < tableHead.length; i++){
    	arr.push('<th>'+tableHead[i]+'</th>');
    }
    arr.push('</tr>');

    //生成表格的主体部分
    for(var i = 0 ; i < tableBody.length; i++){
      arr.push('<tr>');
      arr.push('<td>'+(i+1)+'</td>');
      for(var key in tableBody[i]){
        arr.push('<td>'+(tableBody[i][key])+'</td>');
      }
      arr.push('</tr>');
    }


    arr.push('</table>');
      var $table = $(arr.join(''));
      this.append($table);
  }


     return this;
}(jQuery));