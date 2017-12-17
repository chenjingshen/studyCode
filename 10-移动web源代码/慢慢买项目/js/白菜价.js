window.addEventListener('load', function () {
    baicaijia();
})

// 白菜价
function baicaijia() {
    var num = null;

    $.get('http://127.0.0.1:9090/api/getbaicaijiatitle', function (backdata) {
        console.log(backdata);
        $('#classify ul').html(template('module-tem', backdata));

        $('#header .glyphicon').on('touchstart', function () {
            $('#classify').toggle();
            $('#classify span').click(function(){
                $('#classify').hide();
            })
            $('#classify ul li').on('touchstart', function () {
                num = parseInt($(this).attr('data-titleId'));
                // console.log(num);

                $.get('http://127.0.0.1:9090/api/getbaicaijiaproduct', {
                    titleid: num
                }, function (backdata) {
                    console.log(backdata);
                    $('#goods .row').html(template('neirong-tem',backdata));
                })
            })
        })

    })

    $.get('http://127.0.0.1:9090/api/getbaicaijiaproduct', {
        titleid: 0
    }, function (backdata) {
        console.log(backdata);
        $('#goods .row').html(template('neirong-tem',backdata));
    })

}