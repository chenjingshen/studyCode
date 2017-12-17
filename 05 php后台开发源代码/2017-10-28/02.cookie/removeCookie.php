<?php  
        // 如果要删除cookie 要设置cookie的 有效期
        // 参数是 cookie的有效期
        // 如果要删除 设置为 过去的时间即可
        // 结合 time函数 获取当前时间 递减即可
    setcookie('loveAnimal','泰迪',time()-10);
    setcookie('loveAnimal2','二哈',time()-10);
    setcookie('loveAnimal3','中华田园犬',time()-10);
    setcookie('loveAnimal4','龙猫',time()-10);
    setcookie('loveAnimal5','仓鼠',time()-10);
    setcookie('loveAnimal6','白斩鸡',time()-10);
    setcookie('loveAnimal7','叫花鸡',time()-10);
    setcookie('loveAnimal8','乌骨鸡',time()-10);
    setcookie('loveAnimal6','清远鸡',time()-10);
?>