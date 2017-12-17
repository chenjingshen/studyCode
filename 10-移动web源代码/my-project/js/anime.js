window.addEventListener('load', function () {
    anime();
})

// 内容部分
function anime() {
    $.get('http://127.0.0.1:9091/api/getlianzai', function (backdata) {
        console.log(backdata);
        $('.ul-list').html(template('anime-template', backdata));
    })
}