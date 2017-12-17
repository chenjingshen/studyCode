// try-catch只能捕捉同步的异常，不能捕捉异步的异常
var fs=require('fs');
var path=require('path');

// 同步异常捕捉
// try{
//     fs.readFileSync(path.join(__dirname,'aa.txt'),'utf-8');
// }catch(error){
//     console.log('errpr'+error);
// }


// 异步捕捉异常
try{
    fs.readFile(path.join(__dirname,'aa.txt'),'utf-8',function(err,data){
        if(err){
            console.log('这是异步捕捉的异常'+err);
        }
    })
}catch(error){
    console.log('cry-catch捕捉的异常'+error);
}