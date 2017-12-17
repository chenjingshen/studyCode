//try-catch只能捕捉同步的异常，不能捕捉异步的异常

var fs = require('fs');
var path = require('path');

//同步异常捕捉
// try {
//     fs.readFileSync(path.join(__dirname,'aaaaa.txt'),'utf-8');
// } catch (error) {
//     console.log('error' + error);
// }

//异步异常捕捉
try {
    fs.readFile(path.join(__dirname,'aaaaa.txt'),'utf-8',function(err,data){
        if(err){
            console.log('这是异步捕捉的异常' + err);
        }
    });
} catch (error) {
    console.log('trycatch捕捉的异常' + error);
}

