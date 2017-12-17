/**
 * Created by Administrator on 2017/11/29 0029.
 */
$(function() {
    //comicsÄÚÈİ
    $.ajax({
        url:'http://127.0.0.1:9091/api/getlianzai',
        success:function( backdata) {
            //console.log(backdata);
            $('.con').html(template('phon-comics',backdata));
        }
    })
})