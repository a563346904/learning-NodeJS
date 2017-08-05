> ## 1.创建数据库
>
> <u>	CREATE DATABASE 数据库名</u>

---



> ## 2.创建表
>
> <u> CREATE TABLE 表名</u>

---



> ## 3.查询表
>
> <u>SELECT TABLE_NAME FROM INFORMARION_SCHEMA.TABLES</u>

---



> ## 4.删除表
>
> <u>	DROP TABLE '表名'</u>

---







						#  SQL语句



* #### 插入

  ####       *	INSERT INTO 表名（字段一，字段二…）VALUES（值1，值2）

  ​	例：INSERT INTO user(name,sex,age) VALUES("哮天犬","男",400)

  ​		INSERT INTO user(name,sex,age) VALUES("哮天犬","男",400),("铁扇公主","女",900

​		

* #### 更改

  ####     \*		不添加条件改变整张表中所有字段的值

  ####     \*          UPDATE 表名 SET 字段一 = 值1 ,字段二 = 值2,.........WHERE 条件 

  ​     例：UPDATE user SET name = "观音姐姐",age = 20 WHERE id = 2; 	



* ### 删除

  ####    \*	delete

  ​    \*	DELETE FROM 表名[^注释]

  [^注释]：删除表中所有数据，但是不删除表格

  ####     \*	DELETE FROM user;

  ​    例：删除user表中id=1；

  ​	   <u> DELETE FROM user WHERE 条件</u>

  ​	DELETE FROM user WHERE id = 1;

  ​	例：同时满足两个条件使用关键字 AND 连接

  ​	 <u>DELETE FROM user WHERE sex = "女" AND age > 900</u>



* ### 查找

  ###### 例：查找表中所有数据

  ​          <u>SELECT * FROM user</u>

  ###### 	查找年龄大于18的	

  ​	 <u>SELECT * FROM user WHERE age > 18</u>

  ###### 	查找年龄不等于20的

  ​	1）<u>SELECT * FROM user WHERE age <> 20</u>

  ​	2） <u>SELECT * FROM user  WHERE age != 20</u>

  ###### 	模糊查寻 查找user表中 name以白开头的所有数据

  ​	<u>SELECT * FROM user WHERE name like "白%"</u>

  ###### 	模糊查寻 查找user表中 name以僧结尾的所有数据

  ​	 <u>SELECT * FROM user  WHERE name like "%僧"</u>

  ###### 	模糊查寻 查找user表中 name包含龙的所有数据

  ​	<u>SELECT * FROM user  WHERE name like "%龙%"</u>

  ​

* ### 排序

  ###### 按着年龄排序 (数字) DESC 降序 ASC 升序 默认升序

   <u>SELECT * FROM user ORDER BY age DESC</u>

  ###### 按着姓名首字母排列(A-Z)

  <u>SELECT * FROM user ORDER BY convert (name using gbk)</u>

  ###### 查找表中所有 name age字段

  SELECT name,age FROM user

  ###### 从第二条开始找,查找三个（据库中的数据默认从0开始）

  SELECT * FROM user LIMIT 2,3

  ​

  ​

  ​



* ​

  ​	

  ​

  ​

















