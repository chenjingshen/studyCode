var fs=require('fs');
var path=require('path');
/**同步操作的特点
 * 1.同步操作没有回调函数，但是有返回值
 * 2.同步操作会阻塞当前线程
 * 3.同步操作耗性能高，效率低
 */
var fsData=fs.readFileSync(path.join(__dirname,'a.txt'),'utf-8');
console.log(fsData);
console.log('111');
/**异步操作的特点
 * 1.异步操作一定有回调函数，但没有返回值
 * 2.异步操作不会阻塞当前线程
 * 3.异步操作耗性能低，效率高
 */
fs.readFile(path.join(__dirname,'a.txt'),'utf-8',function(err,data){
    console.log(data);
})
console.log('222');
/**
 * 同步和异步的区别
 *  1.如果对代码对代码执行顺序没有特殊要求，优先使用异步
 * nodejs本身就是通过异步编程来提升代码的效率，异步编程是nodejs的一个优势
 *  2.异步的异常捕捉通过回调函数的err来捕捉，同步操作的捕捉使用try-catch
 */