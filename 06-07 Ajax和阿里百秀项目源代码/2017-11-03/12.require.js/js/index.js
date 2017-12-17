// console.log('我被加载了');
// 可以去 导入其他的模块啦

// 加载 login模块
// 路径是 相对于当前这个文件的
// 如果导入的模块 有返回值 匿名函数的 形参 就是 导入的模块的 返回值
// 使用require导入的模块 不会额外的增加 全局变量
// 匿名函数 会在 模块加载完毕之后 调用
// require(['login'],function(login){
//     // console.log(login);
//     login.setName('rose');
//     login.getName();
// });

// console.log(login);

// 引入 welcome 模块
// welcome 依赖于 login 自动会帮助我们加载
// require(['welcome'],function(){
//     console.log('模块加载完毕');
// })

// 引入 模板引擎模块
/*
    success:function(backData){
        console.log(backData);
        // var result = template('template',backData);
        require(['template-web'],function(tem){
                // tem 就是一个 形参 不会造成全局变量污染
                console.log(tem.template('template',backData));
                // 就可以 使用tem 来进行数据的渲染了
        })
        console.log(result);
        $('.items').append(result);
    }
*/
// require(['template-web'],function(tem){
//     // tem 就是一个 形参 不会造成全局变量污染
//     console.log(tem);
//     // 就可以 使用tem 来进行数据的渲染了
// })

// 导入 jQuery模块
/*
    $(function(){
        $('body').css('backgroundColor','orange');
    })
*/
require(['jquery-1.12.4.min'],function(){
    console.log($);
    $('body').css('backgroundColor','orange');
})