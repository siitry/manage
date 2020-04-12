SET NAMES UTF8;
#创建数据库
DROP DATABASE IF EXISTS khyadmin;
#创建数据库cake,并规定字符集为utf8
CREATE DATABASE khyadmin CHARSET=UTF8;
#进入数据库
USE khyadmin;
#创建admin表
CREATE TABLE admin_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(20),
    upwd VARCHAR(12)
);

INSERT INTO admin_user VALUES(null,"admin",123456);

#创建用户信息表
CREATE TABLE user_info(
    id INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(20),
    balance VARCHAR(12),
	addr VARCHAR(50),
	typ VARCHAR(12),
	reg_date VARCHAR(20)
);

