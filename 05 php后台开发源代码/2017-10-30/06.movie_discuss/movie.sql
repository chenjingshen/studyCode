
-- 1,如果没有movie数据库 就创建
create database if not exists `movie`;
use movie;

-- 2.创建电影信息表
drop table if exists `movieInfo`;
CREATE TABLE `movieInfo` (
  `movie_id` int(11) NOT NULL AUTO_INCREMENT,
  `movie_title` varchar(255) NOT NULL DEFAULT '',
  `movie_url` varchar(255) NOT NULL DEFAULT '',
  `movie_score` varchar(255) NOT NULL DEFAULT '',
  `movie_img` varchar(255) NOT NULL DEFAULT '',
  `movie_tags` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`movie_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


-- 3.插入电影数据
INSERT INTO movieInfo (movie_title,movie_url,movie_score,movie_img,movie_tags) VALUES('肖申克的救赎','https://movie.douban.com/subject/1292052/','9.6','https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p480747492.webp','犯罪,剧情');
INSERT INTO movieInfo (movie_title,movie_url,movie_score,movie_img,movie_tags) VALUES('霸王别姬','https://movie.douban.com/subject/1291546/','9.5','https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p1910813120.webp','剧情,爱情,同性');
INSERT INTO movieInfo (movie_title,movie_url,movie_score,movie_img,movie_tags) VALUES('这个杀手不太冷','https://movie.douban.com/subject/1295644/','9.4','https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p511118051.webp','剧情,动作,犯罪');
INSERT INTO movieInfo (movie_title,movie_url,movie_score,movie_img,movie_tags) VALUES('阿甘正传','https://movie.douban.com/subject/1292720/','9.4','https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p510876377.webp','剧情,爱情');
INSERT INTO movieInfo (movie_title,movie_url,movie_score,movie_img,movie_tags) VALUES('美丽人生','https://movie.douban.com/subject/1292063/','9.5','https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p510861873.webp','剧情,喜剧,爱情');
INSERT INTO movieInfo (movie_title,movie_url,movie_score,movie_img,movie_tags) VALUES('千与千寻','https://movie.douban.com/subject/1291561/','9.2','https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p1910830216.webp','剧情,动画,奇幻');
INSERT INTO movieInfo (movie_title,movie_url,movie_score,movie_img,movie_tags) VALUES('辛德勒的名单','https://movie.douban.com/subject/1295124/','9.4','https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p492406163.webp','剧情,历史,战争');
INSERT INTO movieInfo (movie_title,movie_url,movie_score,movie_img,movie_tags) VALUES('泰坦尼克号','https://movie.douban.com/subject/1292722/','9.2','https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p457760035.webp','剧情,爱情,灾难');
INSERT INTO movieInfo (movie_title,movie_url,movie_score,movie_img,movie_tags) VALUES('盗梦空间','https://movie.douban.com/subject/3541415/','9.2','https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p513344864.webp','剧情,动作,科幻');
INSERT INTO movieInfo (movie_title,movie_url,movie_score,movie_img,movie_tags) VALUES('机器人总动员','https://movie.douban.com/subject/2131459/','9.3','https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p449665982.webp','喜剧,爱情,科幻');
INSERT INTO movieInfo (movie_title,movie_url,movie_score,movie_img,movie_tags) VALUES('海上钢琴师','https://movie.douban.com/subject/1292001/','9.2','https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p511146957.webp','剧情,音乐');
INSERT INTO movieInfo (movie_title,movie_url,movie_score,movie_img,movie_tags) VALUES('三傻大闹宝莱坞','https://movie.douban.com/subject/3793023/','9.1','https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p579729551.webp','剧情,喜剧,爱情');
INSERT INTO movieInfo (movie_title,movie_url,movie_score,movie_img,movie_tags) VALUES('忠犬八公的故事','https://movie.douban.com/subject/3011091/','9.2','https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p524964016.webp','剧情');
INSERT INTO movieInfo (movie_title,movie_url,movie_score,movie_img,movie_tags) VALUES('放牛班的春天','https://movie.douban.com/subject/1291549/','9.2','https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p1910824951.webp','剧情,音乐');
INSERT INTO movieInfo (movie_title,movie_url,movie_score,movie_img,movie_tags) VALUES('大话西游之大圣娶亲','https://movie.douban.com/subject/1292213/','9.2','https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2455050536.webp','动作,冒险,喜剧');
INSERT INTO movieInfo (movie_title,movie_url,movie_score,movie_img,movie_tags) VALUES('龙猫','https://movie.douban.com/subject/1291560/','9.1','https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p1910829895.webp','儿童,动画,奇幻');
INSERT INTO movieInfo (movie_title,movie_url,movie_score,movie_img,movie_tags) VALUES('教父','https://movie.douban.com/subject/1291841/','9.2','https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2190556185.webp','剧情,犯罪');
INSERT INTO movieInfo (movie_title,movie_url,movie_score,movie_img,movie_tags) VALUES('楚门的世界','https://movie.douban.com/subject/1292064/','9.1','https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p479682972.webp','剧情,科幻');
INSERT INTO movieInfo (movie_title,movie_url,movie_score,movie_img,movie_tags) VALUES('乱世佳人','https://movie.douban.com/subject/1300267/','9.2','https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p1963126880.webp','剧情,历史,爱情');
INSERT INTO movieInfo (movie_title,movie_url,movie_score,movie_img,movie_tags) VALUES('天堂电影院','https://movie.douban.com/subject/1291828/','9.1','https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p1910901025.webp','剧情,爱情');

-- 4.创建用户表
drop table if exists `user`;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL DEFAULT '' COMMENT '用户名',
  `user_pass` varchar(255) NOT NULL DEFAULT '' COMMENT '密码',
  `user_icon` varchar(255) NOT NULL DEFAULT '' COMMENT '头像',
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='用户表 保存用户信息';

insert into user(user_name,user_pass,user_icon) values('奔跑林','admin','pl.png');
insert into user(user_name,user_pass,user_icon) values('秒挖槽','admin','gc.png');
insert into user(user_name,user_pass,user_icon) values('烧烤林','admin','llq.png');



-- 5.创建评论表
-- 其中的 movie_id 跟 user_id 是为了关联 用户表 跟 电影表
drop table if exists `movieReview`;
CREATE TABLE `movieReview` (
  `review_id` int(11) NOT NULL AUTO_INCREMENT,
  `review_content` varchar(255) NOT NULL COMMENT '评论内容',
  `movie_id` int(11) NOT NULL DEFAULT '0',
  `user_id` int(11) NOT NULL DEFAULT '0' COMMENT '用户id',
  PRIMARY KEY (`review_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='电影评论表';

insert into movieReview (movie_id,user_id,review_content) values(1,1,'非常不错的电影,值得一看');
insert into movieReview (movie_id,user_id,review_content) values(1,2,'绝对的神作,不要错过哦');
insert into movieReview (movie_id,user_id,review_content) values(3,2,'怪蜀黍跟小萝莉的故事,棒棒哒');

