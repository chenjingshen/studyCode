window.addEventListener('load',function(){
    subject();
})


// 内容部分
function subject() {

    $.get('http://127.0.0.1:9091/api/gettopics', function (backdata) {
        console.log(backdata);
        $('#body').html(template('subject-template',backdata));
    })

}