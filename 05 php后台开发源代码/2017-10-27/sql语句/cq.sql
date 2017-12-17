﻿use study;
DROP TABLE IF EXISTS `cq`;
CREATE TABLE `cq` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `hero_name` varchar(255) NOT NULL DEFAULT '' COMMENT '名字',
  `hero_icon` varchar(255) NOT NULL DEFAULT '' COMMENT '头像',
  `hero_sex` varchar(255) NOT NULL DEFAULT 'unknown' COMMENT '性别',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

insert into cq (hero_name,hero_icon) values ('V-暴走型','V-暴走型_icon.png');
insert into cq (hero_name,hero_icon) values ('阿尔卑斯少女','阿尔卑斯少女_icon.png');
insert into cq (hero_name,hero_icon) values ('艾尔菲亚特·华伦泰','艾尔菲亚特·华伦泰_icon.png');
insert into cq (hero_name,hero_icon) values ('爱如潮涌的牛郎','爱如潮涌的牛郎_icon.png');
insert into cq (hero_name,hero_icon) values ('安德烈','安德烈_icon.png');
insert into cq (hero_name,hero_icon) values ('暗黑修女梅丽莎','暗黑修女梅丽莎_icon.png');
insert into cq (hero_name,hero_icon) values ('扒手','扒手_icon.png');
insert into cq (hero_name,hero_icon) values ('八神庵','八神庵_icon.png');
insert into cq (hero_name,hero_icon) values ('巴伦西亚骑士','巴伦西亚骑士_icon.png');
insert into cq (hero_name,hero_icon) values ('白胡子德雷克','白胡子德雷克_icon.png');
insert into cq (hero_name,hero_icon) values ('白花瓦莉','白花瓦莉_icon.png');
insert into cq (hero_name,hero_icon) values ('百发百中小光','百发百中小光_icon.png');
insert into cq (hero_name,hero_icon) values ('百万富翁桃太郎','百万富翁桃太郎_icon.png');
insert into cq (hero_name,hero_icon) values ('半精灵','半精灵_icon.png');
insert into cq (hero_name,hero_icon) values ('报丧女妖','报丧女妖_icon.png');
insert into cq (hero_name,hero_icon) values ('暴风忍者团','暴风忍者团_icon.png');
insert into cq (hero_name,hero_icon) values ('暴风雪弓手团','暴风雪弓手团_icon.png');
insert into cq (hero_name,hero_icon) values ('暴走僵尸希恩','暴走僵尸希恩_icon.png');
insert into cq (hero_name,hero_icon) values ('豹女郎','豹女郎_icon.png');
insert into cq (hero_name,hero_icon) values ('北方猎人','北方猎人_icon.png');
insert into cq (hero_name,hero_icon) values ('贝尔·格里尔斯','贝尔·格里尔斯_icon.png');
insert into cq (hero_name,hero_icon) values ('比利·凯恩','比利·凯恩_icon.png');
insert into cq (hero_name,hero_icon) values ('必胜的罗什福尔','必胜的罗什福尔_icon.png');
insert into cq (hero_name,hero_icon) values ('冰川矿工','冰川矿工_icon.png');
insert into cq (hero_name,hero_icon) values ('冰锤沃尔夫冈','冰锤沃尔夫冈_icon.png');
insert into cq (hero_name,hero_icon) values ('冰雕工匠','冰雕工匠_icon.png');
insert into cq (hero_name,hero_icon) values ('冰封王座萨斯夸奇','冰封王座萨斯夸奇_icon.png');
insert into cq (hero_name,hero_icon) values ('冰霜法师','冰霜法师_icon.png');
insert into cq (hero_name,hero_icon) values ('冰霜猎人雷芬','冰霜猎人雷芬_icon.png');
insert into cq (hero_name,hero_icon) values ('捕盗大将卞剑秀','捕盗大将卞剑秀_icon.png');
insert into cq (hero_name,hero_icon) values ('不败将军秦琼','不败将军秦琼_icon.png');
insert into cq (hero_name,hero_icon) values ('不知火舞','不知火舞_icon.png');
insert into cq (hero_name,hero_icon) values ('布蕾克·贝拉多娜','布蕾克·贝拉多娜_icon.png');
insert into cq (hero_name,hero_icon) values ('采药专家','采药专家_icon.png');
insert into cq (hero_name,hero_icon) values ('藏宝猎人','藏宝猎人_icon.png');
insert into cq (hero_name,hero_icon) values ('草薙京','草薙京_icon.png');
insert into cq (hero_name,hero_icon) values ('长老','长老_icon.png');
insert into cq (hero_name,hero_icon) values ('超杀女明蒂','超杀女明蒂_icon.png');
insert into cq (hero_name,hero_icon) values ('超自然同好会','超自然同好会_icon.png');
insert into cq (hero_name,hero_icon) values ('城镇混混','城镇混混_icon.png');
insert into cq (hero_name,hero_icon) values ('城镇青年','城镇青年_icon.png');
insert into cq (hero_name,hero_icon) values ('城镇庭院师','城镇庭院师_icon.png');
insert into cq (hero_name,hero_icon) values ('赤色弹丸孙市','赤色弹丸孙市_icon.png');
insert into cq (hero_name,hero_icon) values ('创造者宾森恩','创造者宾森恩_icon.png');
insert into cq (hero_name,hero_icon) values ('大莫离支文德','大莫离支文德_icon.png');
insert into cq (hero_name,hero_icon) values ('代号：圣诞节','代号：圣诞节_icon.png');
insert into cq (hero_name,hero_icon) values ('代号：麋鹿','代号：麋鹿_icon.png');
insert into cq (hero_name,hero_icon) values ('电子人斯佩妮','电子人斯佩妮_icon.png');
insert into cq (hero_name,hero_icon) values ('东部联军-陈','东部联军-陈_icon.png');
insert into cq (hero_name,hero_icon) values ('东部联军-汉','东部联军-汉_icon.png');
insert into cq (hero_name,hero_icon) values ('东部联军-刘','东部联军-刘_icon.png');
insert into cq (hero_name,hero_icon) values ('东部王国管理员','东部王国管理员_icon.png');
insert into cq (hero_name,hero_icon) values ('东方王国士兵','东方王国士兵_icon.png');
insert into cq (hero_name,hero_icon) values ('东瀛武士','东瀛武士_icon.png');
insert into cq (hero_name,hero_icon) values ('动物同好会','动物同好会_icon.png');
insert into cq (hero_name,hero_icon) values ('顿悟的海獭','顿悟的海獭_icon.png');
insert into cq (hero_name,hero_icon) values ('恶灵乌鸦','恶灵乌鸦_icon.png');
insert into cq (hero_name,hero_icon) values ('恶魔同好会','恶魔同好会_icon.png');
insert into cq (hero_name,hero_icon) values ('二天一流香织','二天一流香织_icon.png');
insert into cq (hero_name,hero_icon) values ('飞翼骑士','飞翼骑士_icon.png');
insert into cq (hero_name,hero_icon) values ('粉碎者斯黛拉','粉碎者斯黛拉_icon.png');
insert into cq (hero_name,hero_icon) values ('丰饶女神德米特尔','丰饶女神德米特尔_icon.png');
insert into cq (hero_name,hero_icon) values ('风华绝代织女','风华绝代织女_icon.png');
insert into cq (hero_name,hero_icon) values ('风之魔女乌尔弗兰姆','风之魔女乌尔弗兰姆_icon.png');
insert into cq (hero_name,hero_icon) values ('疯狂科学家斯坦因','疯狂科学家斯坦因_icon.png');
insert into cq (hero_name,hero_icon) values ('钢铁骑士圣女贞德','钢铁骑士圣女贞德_icon.png');
insert into cq (hero_name,hero_icon) values ('高级女仆','高级女仆_icon.png');
insert into cq (hero_name,hero_icon) values ('格兰西亚的弓手','格兰西亚的弓手_icon.png');
insert into cq (hero_name,hero_icon) values ('格兰西亚管理员','格兰西亚管理员_icon.png');
insert into cq (hero_name,hero_icon) values ('格林西亚法师','格林西亚法师_icon.png');
insert into cq (hero_name,hero_icon) values ('弓道社员','弓道社员_icon.png');
insert into cq (hero_name,hero_icon) values ('孤单寂寞的普格斯','孤单寂寞的普格斯_icon.png');
insert into cq (hero_name,hero_icon) values ('孤独的深海','孤独的深海_icon.png');
insert into cq (hero_name,hero_icon) values ('古惑仔','古惑仔_icon.png');
insert into cq (hero_name,hero_icon) values ('管家','管家_icon.png');
insert into cq (hero_name,hero_icon) values ('光明剑士里昂','光明剑士里昂_icon.png');
insert into cq (hero_name,hero_icon) values ('光之南丁格尔','光之南丁格尔_icon.png');
insert into cq (hero_name,hero_icon) values ('光之圣女团','光之圣女团_icon.png');
insert into cq (hero_name,hero_icon) values ('鬼王钟馗','鬼王钟馗_icon.png');
insert into cq (hero_name,hero_icon) values ('海军大将','海军大将_icon.png');
insert into cq (hero_name,hero_icon) values ('海军上将斯嘉丽','海军上将斯嘉丽_icon.png');
insert into cq (hero_name,hero_icon) values ('海贼','海贼_icon.png');
insert into cq (hero_name,hero_icon) values ('寒冰射手','寒冰射手_icon.png');
insert into cq (hero_name,hero_icon) values ('寒霜恶灵妮芬','寒霜恶灵妮芬_icon.png');
insert into cq (hero_name,hero_icon) values ('黑暗骑士贝恩','黑暗骑士贝恩_icon.png');
insert into cq (hero_name,hero_icon) values ('黑暗驱逐者威廉','黑暗驱逐者威廉_icon.png');
insert into cq (hero_name,hero_icon) values ('黑曼巴','黑曼巴_icon.png');
insert into cq (hero_name,hero_icon) values ('黑袍魔女桃乐丝','黑袍魔女桃乐丝_icon.png');
insert into cq (hero_name,hero_icon) values ('黑骑士莱昂内尔','黑骑士莱昂内尔_icon.png');
insert into cq (hero_name,hero_icon) values ('黑手党','黑手党_icon.png');
insert into cq (hero_name,hero_icon) values ('黑桃王后爱丽丝','黑桃王后爱丽丝_icon.png');
insert into cq (hero_name,hero_icon) values ('红莲之弓矢德姆娜','红莲之弓矢德姆娜_icon.png');
insert into cq (hero_name,hero_icon) values ('红色丝绸','红色丝绸_icon.png');
insert into cq (hero_name,hero_icon) values ('狐狸射手','狐狸射手_icon.png');
insert into cq (hero_name,hero_icon) values ('护士学生','护士学生_icon.png');
insert into cq (hero_name,hero_icon) values ('荒狂电光夏尔美','荒狂电光夏尔美_icon.png');
insert into cq (hero_name,hero_icon) values ('黄道军阿库里埃斯','黄道军阿库里埃斯_icon.png');
insert into cq (hero_name,hero_icon) values ('黄道军阿莉耶丝','黄道军阿莉耶丝_icon.png');
insert into cq (hero_name,hero_icon) values ('黄道军比尔高','黄道军比尔高_icon.png');
insert into cq (hero_name,hero_icon) values ('黄道军卡布里','黄道军卡布里_icon.png');
insert into cq (hero_name,hero_icon) values ('黄道军卡伊','黄道军卡伊_icon.png');
insert into cq (hero_name,hero_icon) values ('黄道军里奥','黄道军里奥_icon.png');
insert into cq (hero_name,hero_icon) values ('黄道军里夫','黄道军里夫_icon.png');
insert into cq (hero_name,hero_icon) values ('黄道军蛇夫','黄道军蛇夫_icon.png');
insert into cq (hero_name,hero_icon) values ('黄道军双胞胎','黄道军双胞胎_icon.png');
insert into cq (hero_name,hero_icon) values ('黄道军斯塔琉斯','黄道军斯塔琉斯_icon.png');
insert into cq (hero_name,hero_icon) values ('黄道军天蝎','黄道军天蝎_icon.png');
insert into cq (hero_name,hero_icon) values ('黄道军韬','黄道军韬_icon.png');
insert into cq (hero_name,hero_icon) values ('黄金射手团','黄金射手团_icon.png');
insert into cq (hero_name,hero_icon) values ('皇帝亚历山大','皇帝亚历山大_icon.png');
insert into cq (hero_name,hero_icon) values ('皇家保洁','皇家保洁_icon.png');
insert into cq (hero_name,hero_icon) values ('皇家厨师','皇家厨师_icon.png');
insert into cq (hero_name,hero_icon) values ('皇家稽查队','皇家稽查队_icon.png');
insert into cq (hero_name,hero_icon) values ('皇家魔法学生','皇家魔法学生_icon.png');
insert into cq (hero_name,hero_icon) values ('皇家亲卫队','皇家亲卫队_icon.png');
insert into cq (hero_name,hero_icon) values ('皇家田径部','皇家田径部_icon.png');
insert into cq (hero_name,hero_icon) values ('皇家文学部','皇家文学部_icon.png');
insert into cq (hero_name,hero_icon) values ('火焰之迎春','火焰之迎春_icon.png');
insert into cq (hero_name,hero_icon) values ('火之魔女莎莎','火之魔女莎莎_icon.png');
insert into cq (hero_name,hero_icon) values ('机甲弓手','机甲弓手_icon.png');
insert into cq (hero_name,hero_icon) values ('机械工程学家','机械工程学家_icon.png');
insert into cq (hero_name,hero_icon) values ('机械少女-0','机械少女-0_icon.png');
insert into cq (hero_name,hero_icon) values ('机械少女','机械少女_icon.png');
insert into cq (hero_name,hero_icon) values ('稽查队员','稽查队员_icon.png');
insert into cq (hero_name,hero_icon) values ('极地猎人','极地猎人_icon.png');
insert into cq (hero_name,hero_icon) values ('疾风半藏','疾风半藏_icon.png');
insert into cq (hero_name,hero_icon) values ('记者','记者_icon.png');
insert into cq (hero_name,hero_icon) values ('见习骑士','见习骑士_icon.png');
insert into cq (hero_name,hero_icon) values ('见习铁匠','见习铁匠_icon.png');
insert into cq (hero_name,hero_icon) values ('见习武斗家','见习武斗家_icon.png');
insert into cq (hero_name,hero_icon) values ('剑道社员','剑道社员_icon.png');
insert into cq (hero_name,hero_icon) values ('将军须佐能乎','将军须佐能乎_icon.png');
insert into cq (hero_name,hero_icon) values ('教团仆人','教团仆人_icon.png');
insert into cq (hero_name,hero_icon) values ('劫匪','劫匪_icon.png');
insert into cq (hero_name,hero_icon) values ('节制的芬里尔','节制的芬里尔_icon.png');
insert into cq (hero_name,hero_icon) values ('金','金_icon.png');
insert into cq (hero_name,hero_icon) values ('精灵德鲁伊','精灵德鲁伊_icon.png');
insert into cq (hero_name,hero_icon) values ('警卫员','警卫员_icon.png');
insert into cq (hero_name,hero_icon) values ('九品芝麻官','九品芝麻官_icon.png');
insert into cq (hero_name,hero_icon) values ('九尾狐阿狸','九尾狐阿狸_icon.png');
insert into cq (hero_name,hero_icon) values ('酒吧老板','酒吧老板_icon.png');
insert into cq (hero_name,hero_icon) values ('救世的圣母玛利亚','救世的圣母玛利亚_icon.png');
insert into cq (hero_name,hero_icon) values ('觉醒的雅甘','觉醒的雅甘_icon.png');
insert into cq (hero_name,hero_icon) values ('绝地武士','绝地武士_icon.png');
insert into cq (hero_name,hero_icon) values ('绝对魔王薇薇安','绝对魔王薇薇安_icon.png');
insert into cq (hero_name,hero_icon) values ('凯·奇斯库','凯·奇斯库_icon.png');
insert into cq (hero_name,hero_icon) values ('考古学家','考古学家_icon.png');
insert into cq (hero_name,hero_icon) values ('可爱巧克莉','可爱巧克莉_icon.png');
insert into cq (hero_name,hero_icon) values ('狂欢城镇管理员','狂欢城镇管理员_icon.png');
insert into cq (hero_name,hero_icon) values ('拉姆蕾萨尔·华伦泰','拉姆蕾萨尔·华伦泰_icon.png');
insert into cq (hero_name,hero_icon) values ('蓝骑士·比乌斯','蓝骑士·比乌斯_icon.png');
insert into cq (hero_name,hero_icon) values ('蓝骑士·大卫','蓝骑士·大卫_icon.png');
insert into cq (hero_name,hero_icon) values ('蓝骑士·杰西','蓝骑士·杰西_icon.png');
insert into cq (hero_name,hero_icon) values ('蓝骑士·拉维亚','蓝骑士·拉维亚_icon.png');
insert into cq (hero_name,hero_icon) values ('蓝骑士阿雷西亚','蓝骑士阿雷西亚_icon.png');
insert into cq (hero_name,hero_icon) values ('蓝骑士艾米莉亚','蓝骑士艾米莉亚_icon.png');
insert into cq (hero_name,hero_icon) values ('蓝骑士拉伊勒','蓝骑士拉伊勒_icon.png');
insert into cq (hero_name,hero_icon) values ('蓝骑士里尼亚','蓝骑士里尼亚_icon.png');
insert into cq (hero_name,hero_icon) values ('蓝骑士尤格林','蓝骑士尤格林_icon.png');
insert into cq (hero_name,hero_icon) values ('狼族卫士','狼族卫士_icon.png');
insert into cq (hero_name,hero_icon) values ('浪漫的麦格尼斯','浪漫的麦格尼斯_icon.png');
insert into cq (hero_name,hero_icon) values ('雷神托尔','雷神托尔_icon.png');
insert into cq (hero_name,hero_icon) values ('蕾拉','蕾拉_icon.png');
insert into cq (hero_name,hero_icon) values ('莉安娜·哈迪兰','莉安娜·哈迪兰_icon.png');
insert into cq (hero_name,hero_icon) values ('料理武术家雷玲','料理武术家雷玲_icon.png');
insert into cq (hero_name,hero_icon) values ('猎人莱瑟','猎人莱瑟_icon.png');
insert into cq (hero_name,hero_icon) values ('猎鹰','猎鹰_icon.png');
insert into cq (hero_name,hero_icon) values ('猎鹰队员','猎鹰队员_icon.png');
insert into cq (hero_name,hero_icon) values ('猎鹰精英','猎鹰精英_icon.png');
insert into cq (hero_name,hero_icon) values ('邻家大爷','邻家大爷_icon.png');
insert into cq (hero_name,hero_icon) values ('龙骑士齐格弗里德','龙骑士齐格弗里德_icon.png');
insert into cq (hero_name,hero_icon) values ('露比·罗丝','露比·罗丝_icon.png');
insert into cq (hero_name,hero_icon) values ('绿色妖精','绿色妖精_icon.png');
insert into cq (hero_name,hero_icon) values ('罗曼共和国管理员','罗曼共和国管理员_icon.png');
insert into cq (hero_name,hero_icon) values ('罗曼祭司','罗曼祭司_icon.png');
insert into cq (hero_name,hero_icon) values ('罗曼女射手','罗曼女射手_icon.png');
insert into cq (hero_name,hero_icon) values ('罗曼士兵','罗曼士兵_icon.png');
insert into cq (hero_name,hero_icon) values ('麻宫雅典娜','麻宫雅典娜_icon.png');
insert into cq (hero_name,hero_icon) values ('猫咪大师喵','猫咪大师喵_icon.png');
insert into cq (hero_name,hero_icon) values ('毛熊同好会','毛熊同好会_icon.png');
insert into cq (hero_name,hero_icon) values ('梅尔','梅尔_icon.png');
insert into cq (hero_name,hero_icon) values ('梅伊','梅伊_icon.png');
insert into cq (hero_name,hero_icon) values ('美少年','美少年_icon.png');
insert into cq (hero_name,hero_icon) values ('美食家阿索斯','美食家阿索斯_icon.png');
insert into cq (hero_name,hero_icon) values ('美食猎人彩依','美食猎人彩依_icon.png');
insert into cq (hero_name,hero_icon) values ('美式足球社员','美式足球社员_icon.png');
insert into cq (hero_name,hero_icon) values ('蒙泰终极型','蒙泰终极型_icon.png');
insert into cq (hero_name,hero_icon) values ('米莉亚·蕾姬','米莉亚·蕾姬_icon.png');
insert into cq (hero_name,hero_icon) values ('密使罗宾汉','密使罗宾汉_icon.png');
insert into cq (hero_name,hero_icon) values ('民族英雄郑成功','民族英雄郑成功_icon.png');
insert into cq (hero_name,hero_icon) values ('名侦探夏洛克','名侦探夏洛克_icon.png');
insert into cq (hero_name,hero_icon) values ('魔导工程师','魔导工程师_icon.png');
insert into cq (hero_name,hero_icon) values ('魔法傀儡师贝萝特','魔法傀儡师贝萝特_icon.png');
insert into cq (hero_name,hero_icon) values ('魔法少女明日香','魔法少女明日香_icon.png');
insert into cq (hero_name,hero_icon) values ('魔法学徒','魔法学徒_icon.png');
insert into cq (hero_name,hero_icon) values ('魔女宅急便','魔女宅急便_icon.png');
insert into cq (hero_name,hero_icon) values ('末世杜尔拉汗','末世杜尔拉汗_icon.png');
insert into cq (hero_name,hero_icon) values ('牧师','牧师_icon.png');
insert into cq (hero_name,hero_icon) values ('南方海军','南方海军_icon.png');
insert into cq (hero_name,hero_icon) values ('南方警备队员','南方警备队员_icon.png');
insert into cq (hero_name,hero_icon) values ('南方亲卫队','南方亲卫队_icon.png');
insert into cq (hero_name,hero_icon) values ('南西部联盟管理员','南西部联盟管理员_icon.png');
insert into cq (hero_name,hero_icon) values ('妮欧','妮欧_icon.png');
insert into cq (hero_name,hero_icon) values ('涅斯帝国管理员','涅斯帝国管理员_icon.png');
insert into cq (hero_name,hero_icon) values ('涅斯革命军','涅斯革命军_icon.png');
insert into cq (hero_name,hero_icon) values ('涅斯革命军的弓手','涅斯革命军的弓手_icon.png');
insert into cq (hero_name,hero_icon) values ('涅斯工程师','涅斯工程师_icon.png');
insert into cq (hero_name,hero_icon) values ('涅斯军长官尤莉娅','涅斯军长官尤莉娅_icon.png');
insert into cq (hero_name,hero_icon) values ('涅斯军乐队','涅斯军乐队_icon.png');
insert into cq (hero_name,hero_icon) values ('涅斯军团女巫','涅斯军团女巫_icon.png');
insert into cq (hero_name,hero_icon) values ('涅斯魔导兵团','涅斯魔导兵团_icon.png');
insert into cq (hero_name,hero_icon) values ('涅斯突击队','涅斯突击队_icon.png');
insert into cq (hero_name,hero_icon) values ('牛仔梅西','牛仔梅西_icon.png');
insert into cq (hero_name,hero_icon) values ('扭蛋鲁格斯','扭蛋鲁格斯_icon.png');
insert into cq (hero_name,hero_icon) values ('扭蛋战队B','扭蛋战队B_icon.png');
insert into cq (hero_name,hero_icon) values ('扭蛋战队G','扭蛋战队G_icon.png');
insert into cq (hero_name,hero_icon) values ('扭蛋战队K','扭蛋战队K_icon.png');
insert into cq (hero_name,hero_icon) values ('扭蛋战队P','扭蛋战队P_icon.png');
insert into cq (hero_name,hero_icon) values ('扭蛋战队R','扭蛋战队R_icon.png');
insert into cq (hero_name,hero_icon) values ('扭蛋战队Y','扭蛋战队Y_icon.png');
insert into cq (hero_name,hero_icon) values ('女警','女警_icon.png');
insert into cq (hero_name,hero_icon) values ('女忍者','女忍者_icon.png');
insert into cq (hero_name,hero_icon) values ('女神教祭司','女神教祭司_icon.png');
insert into cq (hero_name,hero_icon) values ('女神教平信徒','女神教平信徒_icon.png');
insert into cq (hero_name,hero_icon) values ('女神教守护骑士','女神教守护骑士_icon.png');
insert into cq (hero_name,hero_icon) values ('女神教图书馆管理员','女神教图书馆管理员_icon.png');
insert into cq (hero_name,hero_icon) values ('女神教修炼祭司','女神教修炼祭司_icon.png');
insert into cq (hero_name,hero_icon) values ('女神教修炼骑士','女神教修炼骑士_icon.png');
insert into cq (hero_name,hero_icon) values ('女神教异端审判者','女神教异端审判者_icon.png');
insert into cq (hero_name,hero_icon) values ('女童子军','女童子军_icon.png');
insert into cq (hero_name,hero_icon) values ('诺拉·瓦尔基里','诺拉·瓦尔基里_icon.png');
insert into cq (hero_name,hero_icon) values ('诺斯加尔德管理员','诺斯加尔德管理员_icon.png');
insert into cq (hero_name,hero_icon) values ('欧米茄·卢卡尔','欧米茄·卢卡尔_icon.png');
insert into cq (hero_name,hero_icon) values ('皮拉·尼可丝','皮拉·尼可丝_icon.png');
insert into cq (hero_name,hero_icon) values ('平凡的魔法师','平凡的魔法师_icon.png');
insert into cq (hero_name,hero_icon) values ('普格斯','普格斯_icon.png');
insert into cq (hero_name,hero_icon) values ('奇普·萨那弗','奇普·萨那弗_icon.png');
insert into cq (hero_name,hero_icon) values ('骑士候补','骑士候补_icon.png');
insert into cq (hero_name,hero_icon) values ('千骑兵志愿生','千骑兵志愿生_icon.png');
insert into cq (hero_name,hero_icon) values ('枪手','枪手_icon.png');
insert into cq (hero_name,hero_icon) values ('枪术教官','枪术教官_icon.png');
insert into cq (hero_name,hero_icon) values ('乔尼','乔尼_icon.png');
insert into cq (hero_name,hero_icon) values ('巧克莉','巧克莉_icon.png');
insert into cq (hero_name,hero_icon) values ('亲卫队','亲卫队_icon.png');
insert into cq (hero_name,hero_icon) values ('青苹果','青苹果_icon.png');
insert into cq (hero_name,hero_icon) values ('倾国倾城春香','倾国倾城春香_icon.png');
insert into cq (hero_name,hero_icon) values ('人气服务生','人气服务生_icon.png');
insert into cq (hero_name,hero_icon) values ('荣誉者凯伦','荣誉者凯伦_icon.png');
insert into cq (hero_name,hero_icon) values ('萨满','萨满_icon.png');
insert into cq (hero_name,hero_icon) values ('塞拉亲卫队','塞拉亲卫队_icon.png');
insert into cq (hero_name,hero_icon) values ('森林魔女娅莉塔','森林魔女娅莉塔_icon.png');
insert into cq (hero_name,hero_icon) values ('森林骑士','森林骑士_icon.png');
insert into cq (hero_name,hero_icon) values ('森林卫士','森林卫士_icon.png');
insert into cq (hero_name,hero_icon) values ('森罗万象海獭','森罗万象海獭_icon.png');
insert into cq (hero_name,hero_icon) values ('沙漠枪手','沙漠枪手_icon.png');
insert into cq (hero_name,hero_icon) values ('沙漠战士','沙漠战士_icon.png');
insert into cq (hero_name,hero_icon) values ('少年农夫','少年农夫_icon.png');
insert into cq (hero_name,hero_icon) values ('少女','少女_icon.png');
insert into cq (hero_name,hero_icon) values ('少数民族联合管理员','少数民族联合管理员_icon.png');
insert into cq (hero_name,hero_icon) values ('哨兵R','哨兵R_icon.png');
insert into cq (hero_name,hero_icon) values ('神乐千鹤','神乐千鹤_icon.png');
insert into cq (hero_name,hero_icon) values ('神女卑弥呼','神女卑弥呼_icon.png');
insert into cq (hero_name,hero_icon) values ('审判者文森特','审判者文森特_icon.png');
insert into cq (hero_name,hero_icon) values ('圣诞老人','圣诞老人_icon.png');
insert into cq (hero_name,hero_icon) values ('圣都旅行者','圣都旅行者_icon.png');
insert into cq (hero_name,hero_icon) values ('圣都巡礼者','圣都巡礼者_icon.png');
insert into cq (hero_name,hero_icon) values ('圣都之守护者诺埃尔','圣都之守护者诺埃尔_icon.png');
insert into cq (hero_name,hero_icon) values ('圣都住民','圣都住民_icon.png');
insert into cq (hero_name,hero_icon) values ('圣魔该隐','圣魔该隐_icon.png');
insert into cq (hero_name,hero_icon) values ('圣女团志愿生','圣女团志愿生_icon.png');
insert into cq (hero_name,hero_icon) values ('使者赛莲','使者赛莲_icon.png');
insert into cq (hero_name,hero_icon) values ('噬魂射手No.9','噬魂射手No.9_icon.png');
insert into cq (hero_name,hero_icon) values ('视死如归达达尼昂','视死如归达达尼昂_icon.png');
insert into cq (hero_name,hero_icon) values ('收割者塞特','收割者塞特_icon.png');
insert into cq (hero_name,hero_icon) values ('首席舞蹈家李','首席舞蹈家李_icon.png');
insert into cq (hero_name,hero_icon) values ('书呆子','书呆子_icon.png');
insert into cq (hero_name,hero_icon) values ('树星国士兵','树星国士兵_icon.png');
insert into cq (hero_name,hero_icon) values ('双面人鲁伊希尔拉','双面人鲁伊希尔拉_icon.png');
insert into cq (hero_name,hero_icon) values ('司令斯派洛','司令斯派洛_icon.png');
insert into cq (hero_name,hero_icon) values ('丝绒射手','丝绒射手_icon.png');
insert into cq (hero_name,hero_icon) values ('死灵法师内克伦','死灵法师内克伦_icon.png');
insert into cq (hero_name,hero_icon) values ('苏醒的贝斯派','苏醒的贝斯派_icon.png');
insert into cq (hero_name,hero_icon) values ('索尔·巴德凯','索尔·巴德凯_icon.png');
insert into cq (hero_name,hero_icon) values ('塔普娘','塔普娘_icon.png');
insert into cq (hero_name,hero_icon) values ('太阳之战士','太阳之战士_icon.png');
insert into cq (hero_name,hero_icon) values ('探究者罗蕾莱','探究者罗蕾莱_icon.png');
insert into cq (hero_name,hero_icon) values ('探险家','探险家_icon.png');
insert into cq (hero_name,hero_icon) values ('特别的研究员','特别的研究员_icon.png');
insert into cq (hero_name,hero_icon) values ('特瑞·博加德','特瑞·博加德_icon.png');
insert into cq (hero_name,hero_icon) values ('铁女修尔拉','铁女修尔拉_icon.png');
insert into cq (hero_name,hero_icon) values ('铁人28号','铁人28号_icon.png');
insert into cq (hero_name,hero_icon) values ('童话作家','童话作家_icon.png');
insert into cq (hero_name,hero_icon) values ('屠魔猎手溪谷莉娜','屠魔猎手溪谷莉娜_icon.png');
insert into cq (hero_name,hero_icon) values ('屠杀者哈尔菲亚','屠杀者哈尔菲亚_icon.png');
insert into cq (hero_name,hero_icon) values ('万能的乌帕','万能的乌帕_icon.png');
insert into cq (hero_name,hero_icon) values ('万圣节巧克莉','万圣节巧克莉_icon.png');
insert into cq (hero_name,hero_icon) values ('魏丝·雪倪','魏丝·雪倪_icon.png');
insert into cq (hero_name,hero_icon) values ('无限的贝阿朵莉切','无限的贝阿朵莉切_icon.png');
insert into cq (hero_name,hero_icon) values ('武装女仆迪雅','武装女仆迪雅_icon.png');
insert into cq (hero_name,hero_icon) values ('五虎大将军韩胜','五虎大将军韩胜_icon.png');
insert into cq (hero_name,hero_icon) values ('舞者','舞者_icon.png');
insert into cq (hero_name,hero_icon) values ('吸血鬼','吸血鬼_icon.png');
insert into cq (hero_name,hero_icon) values ('稀世怪盗路尼昂','稀世怪盗路尼昂_icon.png');
insert into cq (hero_name,hero_icon) values ('先知墨菲斯','先知墨菲斯_icon.png');
insert into cq (hero_name,hero_icon) values ('乡村姑娘','乡村姑娘_icon.png');
insert into cq (hero_name,hero_icon) values ('小丑','小丑_icon.png');
insert into cq (hero_name,hero_icon) values ('小红帽','小红帽_icon.png');
insert into cq (hero_name,hero_icon) values ('小太妹','小太妹_icon.png');
insert into cq (hero_name,hero_icon) values ('辛·奇斯库','辛·奇斯库_icon.png');
insert into cq (hero_name,hero_icon) values ('星光之娅莉娅','星光之娅莉娅_icon.png');
insert into cq (hero_name,hero_icon) values ('熊孩子','熊孩子_icon.png');
insert into cq (hero_name,hero_icon) values ('熊叔','熊叔_icon.png');
insert into cq (hero_name,hero_icon) values ('修道院长','修道院长_icon.png');
insert into cq (hero_name,hero_icon) values ('修道院守护者','修道院守护者_icon.png');
insert into cq (hero_name,hero_icon) values ('修女','修女_icon.png');
insert into cq (hero_name,hero_icon) values ('修女教官','修女教官_icon.png');
insert into cq (hero_name,hero_icon) values ('虚无的福斯特','虚无的福斯特_icon.png');
insert into cq (hero_name,hero_icon) values ('雪人','雪人_icon.png');
insert into cq (hero_name,hero_icon) values ('驯龙高手·坤','驯龙高手·坤_icon.png');
insert into cq (hero_name,hero_icon) values ('亚马逊','亚马逊_icon.png');
insert into cq (hero_name,hero_icon) values ('阎罗使者桂香','阎罗使者桂香_icon.png');
insert into cq (hero_name,hero_icon) values ('炎之宿命克里斯','炎之宿命克里斯_icon.png');
insert into cq (hero_name,hero_icon) values ('阳赫','阳赫_icon.png');
insert into cq (hero_name,hero_icon) values ('阳小龙','阳小龙_icon.png');
insert into cq (hero_name,hero_icon) values ('夜魔女麻美','夜魔女麻美_icon.png');
insert into cq (hero_name,hero_icon) values ('夜之女王瑞秋','夜之女王瑞秋_icon.png');
insert into cq (hero_name,hero_icon) values ('医务社员','医务社员_icon.png');
insert into cq (hero_name,hero_icon) values ('伊诺','伊诺_icon.png');
insert into cq (hero_name,hero_icon) values ('意志坚定的赫克托尔','意志坚定的赫克托尔_icon.png');
insert into cq (hero_name,hero_icon) values ('异端审判官乌列','异端审判官乌列_icon.png');
insert into cq (hero_name,hero_icon) values ('异能者伊莎贝尔','异能者伊莎贝尔_icon.png');
insert into cq (hero_name,hero_icon) values ('音乐同好会','音乐同好会_icon.png');
insert into cq (hero_name,hero_icon) values ('阴阳师晴明','阴阳师晴明_icon.png');
insert into cq (hero_name,hero_icon) values ('吟游诗人','吟游诗人_icon.png');
insert into cq (hero_name,hero_icon) values ('引导者奥西里斯','引导者奥西里斯_icon.png');
insert into cq (hero_name,hero_icon) values ('引领者伊西丝','引领者伊西丝_icon.png');
insert into cq (hero_name,hero_icon) values ('鹰之女儿拉喜玛','鹰之女儿拉喜玛_icon.png');
insert into cq (hero_name,hero_icon) values ('勇犬剑士','勇犬剑士_icon.png');
insert into cq (hero_name,hero_icon) values ('幽灵公主贝欧琳','幽灵公主贝欧琳_icon.png');
insert into cq (hero_name,hero_icon) values ('诱惑之奥菲欧','诱惑之奥菲欧_icon.png');
insert into cq (hero_name,hero_icon) values ('御医','御医_icon.png');
insert into cq (hero_name,hero_icon) values ('约定之维多利亚','约定之维多利亚_icon.png');
insert into cq (hero_name,hero_icon) values ('约束者克里姆希尔特','约束者克里姆希尔特_icon.png');
insert into cq (hero_name,hero_icon) values ('月光女神莉莉丝','月光女神莉莉丝_icon.png');
insert into cq (hero_name,hero_icon) values ('月光追击者阿塔兰特','月光追击者阿塔兰特_icon.png');
insert into cq (hero_name,hero_icon) values ('月姬辉夜姬','月姬辉夜姬_icon.png');
insert into cq (hero_name,hero_icon) values ('月亮花伊吹','月亮花伊吹_icon.png');
insert into cq (hero_name,hero_icon) values ('月野红','月野红_icon.png');
insert into cq (hero_name,hero_icon) values ('月圆奇波郎','月圆奇波郎_icon.png');
insert into cq (hero_name,hero_icon) values ('战场上的圣女雅典娜','战场上的圣女雅典娜_icon.png');
insert into cq (hero_name,hero_icon) values ('战斗机器人_特-6','战斗机器人_特-6_icon.png');
insert into cq (hero_name,hero_icon) values ('战斗祭司','战斗祭司_icon.png');
insert into cq (hero_name,hero_icon) values ('战神阿基里斯','战神阿基里斯_icon.png');
insert into cq (hero_name,hero_icon) values ('治安官','治安官_icon.png');
insert into cq (hero_name,hero_icon) values ('治愈术士','治愈术士_icon.png');
insert into cq (hero_name,hero_icon) values ('中央帝国士兵','中央帝国士兵_icon.png');
insert into cq (hero_name,hero_icon) values ('钟表店老板','钟表店老板_icon.png');
insert into cq (hero_name,hero_icon) values ('主持人','主持人_icon.png');
insert into cq (hero_name,hero_icon) values ('专职打劫犯','专职打劫犯_icon.png');
insert into cq (hero_name,hero_icon) values ('状元李梦龙','状元李梦龙_icon.png');
insert into cq (hero_name,hero_icon) values ('椎拳崇','椎拳崇_icon.png');
insert into cq (hero_name,hero_icon) values ('追求幸福的达拉','追求幸福的达拉_icon.png');
insert into cq (hero_name,hero_icon) values ('自然的纳兹伦','自然的纳兹伦_icon.png');
insert into cq (hero_name,hero_icon) values ('自由部队管理员','自由部队管理员_icon.png');
insert into cq (hero_name,hero_icon) values ('族长乌兹门特','族长乌兹门特_icon.png');
insert into cq (hero_name,hero_icon) values ('最初的帕拉丁罗兰','最初的帕拉丁罗兰_icon.png');
insert into cq (hero_name,hero_icon) values ('最强佣兵斯内克','最强佣兵斯内克_icon.png');
insert into cq (hero_name,hero_icon) values ('冥帝博格斯','冥帝博格斯_icon.png');
insert into cq (hero_name,hero_icon) values ('喵奇奇','喵奇奇_icon.png');
insert into cq (hero_name,hero_icon) values ('喵星人','喵星人_icon.png');
insert into cq (hero_name,hero_icon) values ('狩魔猎人亚伯','狩魔猎人亚伯_icon.png');
insert into cq (hero_name,hero_icon) values ('婕克·欧','婕克·欧_icon.png');
insert into cq (hero_name,hero_icon) values ('樵夫','樵夫_icon.png');
insert into cq (hero_name,hero_icon) values ('窈窕淑女','窈窕淑女_icon.png');