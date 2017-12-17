define(function(){
    // console.log('loginin');
    var name = 'jack';
    // 对外提供有限的访问权限
    return {
        setName:function(newName){
            name = newName;
        },
        getName:function(){
            console.log(name);
        }
    }
})

// 目前 自己写模块 还不是特别多 主要是引入 其他写好的 第三方模块居多
// 自己定义模块的语法 了解即可