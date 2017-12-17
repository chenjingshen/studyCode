
//1 正则表达式是对字符串操作的一种逻辑公式，就是用事先定义好的一些特定字符、及这些特定字符的组合，组成一个“规则字符串”，这个“规则字符串”用来表达对字符串的一种过滤逻辑。
//    给定一个正则表达式和另一个字符串，我们可以达到如下的目的：
//    1. 给定的字符串是否符合正则表达式的过滤逻辑（称作“匹配”）；
//    2. 可以通过正则表达式，从字符串中获取我们想要的特定部分。
//    3. 替换
//    正则表达式的特点是：
//    1. 灵活性、逻辑性和功能性非常的强；
//    2. 可以迅速地用极简单的方式达到字符串的复杂控制。
//    3. 对于刚接触的人来说，比较晦涩难懂。

//创建正则表达式对象
//var regularExpression = new RegExp("男|女");
//var regularExpression = /男|女/;

//console.log(regularExpression.test("男的"));
//console.log(regularExpression.test("女的"));


//2 正则表达式规则
    //2.1 元字符
        //  .   匹配任何单个字符，除了换行
        //  \d  数字   \D 非数字
        //  \w  数字 字母 下划线   \W 非
        //  \s  空白   \S 非空白
        //  \n  换行
        //  \t  制表符
    //2.2  范围-- 匹配的是一个字符
        // [0-9]  [0123]  [a-z]  [A-Z]  匹配的是一个字符
    //2.3  | 或者   \w|\d
    //2.4  量词  -只修饰一个字符
        //a+  1个或多个a
        //a?  1个或0个a
        //a*  0个或多个a
                //    var str = "aabbccddeeff";
                //    var regRex = /aa*b/;
                //    console.log(regRex.test(str));

        //a{x}  x个n
        //a{x,} 至少x个a
        //a{x,y}  x-y个a
    //2.5 开始结束
        //^a  以a开始
        //a$  以a结束
    //2.6 () 看成一个整体
    //2.7 匹配汉字
        // [\u4e00-\u9fa5]
            //    var str = "中华人民共和国";
            //    var regRex = /[\u4e00-\u9fa5]{7}/;
            //    console.log(regRex.test(str));
    //2.8 参数
        //i  忽略大小写
        //g  全局匹配
//3 16-15-正则表达式练习
    //3.1 验证手机号
    //3.2 验证邮编
    //3.3 验证日期格式  //2012-05-01
    //3.4 验证电子邮箱
        //^\w+@\w+\.\w+(\.\w+)?$/
    //3.5 验证URL
        ///^\w+(s)?:\/\/(\w+\.)+\w+(\/(\w+)?(\.\w+)?)*$/
//4 替换replace
    //4.1 所有的逗号替换成句号abc,efg,123,abc,123,a
    //4.2 修改成绩，全改成100分
        //var jsonStr = '[{"name":"张三",score:80},{"name":"张三",score:90},{"name":"张三",score:81}]';
    //4.3 把, ， . 和。都改成 。
        //var str = "“你饿了,调我们的粮进京。你渴了.调我们的水进京。高考了，你特么想尽千方百计不让我们的孩子进京。为什么？!” 我们呼吁：全国一张卷，一个录取线！愿赌服输！最近高考方案闹得沸沸扬扬，其实大家就是要的公平竞争！同样都是孩子，同样的国家，同样的教育！为何不同的待遇？";
    //4.4 去掉前后空格，封装成函数

//5 正则提取 match返回数组
    //5.1 提取工资
        //var str = "张三：1000，李四：5000，王五：8000。";
    //5.2 提取email地址
        // var str = "123123@xx.com,fangfang@valuedopinions.cn 286669312@qq.com 2、emailenglish@emailenglish.englishtown.com 286669312@qq.com...";


//6 分组提取
    //提取email中的每一部分
            //    var str = "123123@xx.com";
            //    var reg = /(\w+)@(\w+)\.(\w+)(\.\w+)?/;
            //
            //    var array = str.match(reg);
            //    //获取分组的数据  ()是分组
            //    console.log(RegExp.$1);
            //    console.log(RegExp.$2);
            //    console.log(RegExp.$3);
    //分组练习
            //var str = "5=a, 6=b, 7=c";
            //str = str.replace(/(\d)=(\w)/g, "$2====$1");
            //console.log(str);

//7 exec
    //exec 只匹配第一项，可以使用分组匹配   加/g 无效
    //如果要匹配多项  使用str.match() 结合正则的全局模式 /g


//8 正则相关的方法
    // 正则对象的 test  exec
    // 字符串的   replace   search   match  split













var str = "abc100cdf200aaa300ccc";
var arr = str.split(/\d+/);
console.log(arr);
