var fs=require('fs');
console.log(__dirname);
console.log(__filename);
var filePath=__dirname+'/a.txt';
console.log(filePath);

fs.readFile(filePath,'utf-8',function(err,data){
    if(err){
        console.log(err);
    }
    console.log(data);
})