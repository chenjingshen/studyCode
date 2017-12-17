/* CREATE TABLE `user` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) DEFAULT NULL COMMENT '用户名',
  `userPass` varchar(255) NOT NULL DEFAULT '' COMMENT '用户密码',
  `userAddress` varchar(255) NOT NULL DEFAULT '' COMMENT '用户地址',
  `userHabbit` varchar(255) NOT NULL DEFAULT '' COMMENT '用户爱好',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='用户信息表格';
*/


-- 注释
/*
  多行注释
*/
-- 增 插入数据
-- insert into user (userName,userPass,userAddress,userHabbit) values ('jack','123456','冰山上','jump');

-- 删 删除数据 切记切记 要写上条件
-- delete from user where id = 16;
-- delete from user where id > 12;


-- 改 切记 切记 写上条件
-- update user set userName = 'beijingBBQYA' where id = 11;
-- update user set userName = 'hotpink',userHabbit = 'hello kitty' where id = 12;


-- 查
-- select * from user;
-- select * from user where id = 11;
-- select * from user where userHabbit = 'jump';