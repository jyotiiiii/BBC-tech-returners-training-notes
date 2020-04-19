Query OK - successful mysql commands

OPENING MY DATABASE IN TERMINAL
rebeccaandrew$ mysql -u root -p -h gradient-instance.cbqebxnwtwyz.eu-west-2.rds.amazonaws.com
Enter password:



mysql> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| gradient_todo      |
| innodb             |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
6 rows in set (0.01 sec)

USE MY DATABASE
mysql> USE gradient_todo;



mysql> SHOW TABLES;
+-------------------------+
| Tables_in_gradient_todo |
+-------------------------+
| task                    |
| users                   |
+-------------------------+
2 rows in set (0.01 sec)


mysql> SELECT * FROM users;
+--------+---------------+
| userId | name          |
+--------+---------------+
|      1 | Susan Jones   |
|      2 | Richard Johns |
+--------+---------------+
2 rows in set (0.01 sec)

mysql> SELECT * FROM task;
+--------+-----------------+
| taskID | taskDescription |
+--------+-----------------+
| 0001   | Buy milk        |
+--------+-----------------+
1 row in set (0.01 sec)


mysql> ALTER TABLE task ADD COLUMN completed bool;
Query OK, 0 rows affected (0.10 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> SELECT * FROM task;
+--------+-----------------+-----------+
| taskID | taskDescription | completed |
+--------+-----------------+-----------+
| 0001   | Buy milk        |      NULL |
+--------+-----------------+-----------+
1 row in set (0.01 sec)


mysql> ALTER TABLE task ADD COLUMN category BIGINT(20);
Query OK, 0 rows affected (0.06 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> SELECT * FROM task;
+--------+-----------------+-----------+----------+
| taskID | taskDescription | completed | category |
+--------+-----------------+-----------+----------+
| 0001   | Buy milk        |      NULL |     NULL |
+--------+-----------------+-----------+----------+
1 row in set (0.01 sec)


mysql> UPDATE task SET category = 1 WHERE taskID = 0001;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> SELECT * FROM task;
+--------+-----------------+-----------+----------+
| taskID | taskDescription | completed | category |
+--------+-----------------+-----------+----------+
| 0001   | Buy milk        |      NULL |        1 |
+--------+-----------------+-----------+----------+
1 row in set (0.01 sec)

mysql> UPDATE task SET completed = false WHERE taskID = 0001;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> SELECT * FROM task;
+--------+-----------------+-----------+----------+
| taskID | taskDescription | completed | category |
+--------+-----------------+-----------+----------+
| 0001   | Buy milk        |         0 |        1 |
+--------+-----------------+-----------+----------+
1 row in set (0.02 sec)

mysql> UPDATE task SET category = "WORK" WHERE taskID = 0001;
Query OK, 1 row affected, 1 warning (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 1

mysql> SELECT * FROM task;
+--------+-----------------+-----------+----------+
| taskID | taskDescription | completed | category |
+--------+-----------------+-----------+----------+
| 0001   | Buy milk        |         0 |        0 |
+--------+-----------------+-----------+----------+
1 row in set (0.01 sec)

mysql> ALTER TABLE task MODIFY category VARCHAR(4);
Query OK, 1 row affected (0.03 sec)
Records: 1  Duplicates: 0  Warnings: 0

mysql> SELECT * FROM task;
+--------+-----------------+-----------+----------+
| taskID | taskDescription | completed | category |
+--------+-----------------+-----------+----------+
| 0001   | Buy milk        |         0 | 0        |
+--------+-----------------+-----------+----------+
1 row in set (0.01 sec)

mysql> UPDATE task SET category = "WORK" WHERE taskID = 0001;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> SELECT * FROM task;
+--------+-----------------+-----------+----------+
| taskID | taskDescription | completed | category |
+--------+-----------------+-----------+----------+
| 0001   | Buy milk        |         0 | WORK     |
+--------+-----------------+-----------+----------+
1 row in set (0.00 sec)

mysql> UPDATE task SET taskDescription = "Phone chat with Sarah" WHERE taskID = 0001;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> SELECT * FROM task;
+--------+-----------------------+-----------+----------+
| taskID | taskDescription       | completed | category |
+--------+-----------------------+-----------+----------+
| 0001   | Phone chat with Sarah |         0 | WORK     |
+--------+-----------------------+-----------+----------+
1 row in set (0.01 sec)


mysql> INSERT INTO task (taskID, taskDescription, completed, category) VALUES ("0002", "Learn JS", false, "WORK");
Query OK, 1 row affected (0.03 sec)

mysql> SELECT * FROM task;                                                                +--------+-----------------------+-----------+----------+
| taskID | taskDescription       | completed | category |
+--------+-----------------------+-----------+----------+
| 0001   | Phone chat with Sarah |         0 | WORK     |
| 0002   | Learn JS              |         0 | WORK     |
+--------+-----------------------+-----------+----------+
2 rows in set (0.01 sec)

mysql> INSERT INTO task (taskID, taskDescription, completed, category) VALUES ("0003", "View webinar", false, "WORK");
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO task (taskID, taskDescription, completed, category) VALUES ("0004", "Spray mount for cards", false, "WORK");
Query OK, 1 row affected (0.07 sec)


Current database: gradient_todo

+--------+-----------------------+-----------+----------+
| taskID | taskDescription       | completed | category |
+--------+-----------------------+-----------+----------+
| 0001   | Phone chat with Sarah |         0 | WORK     |
| 0002   | Learn JS              |         0 | WORK     |
| 0003   | View webinar          |         0 | WORK     |
| 0004   | Spray mount for cards |         0 | WORK     |
+--------+-----------------------+-----------+----------+
4 rows in set (0.16 sec)


mysql> INSERT INTO task (taskID, taskDescription, completed, category) VALUES ("0005", "Reply to VP and Felix", false, "HOME");
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO task (taskID, taskDescription, completed, category) VALUES ("0006", "Get bike serviced", false, "HOME");
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO task (taskID, taskDescription, completed, category) VALUES ("0007", "Take back Sloth", false, "HOME");
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO task (taskID, taskDescription, completed, category) VALUES ("0008", "Food for lunch", false, "HOME");
Query OK, 1 row affected (0.01 sec)

mysql> SELECT * FROM task;                                                                +--------+-----------------------+-----------+----------+
| taskID | taskDescription       | completed | category |
+--------+-----------------------+-----------+----------+
| 0001   | Phone chat with Sarah |         0 | WORK     |
| 0002   | Learn JS              |         0 | WORK     |
| 0003   | View webinar          |         0 | WORK     |
| 0004   | Spray mount for cards |         0 | WORK     |
| 0005   | Reply to VP and Felix |         0 | HOME     |
| 0006   | Get bike serviced     |         0 | HOME     |
| 0007   | Take back Sloth       |         0 | HOME     |
| 0008   | Food for lunch        |         0 | HOME     |
+--------+-----------------------+-----------+----------+
8 rows in set (0.01 sec)


mysql> SELECT * FROM task;                                                                +--------+-----------------------+-----------+----------+
| taskID | taskDescription       | completed | category |
+--------+-----------------------+-----------+----------+
| 0001   | Phone chat with Sarah |         0 | WORK     |
| 0002   | Learn JS              |         0 | WORK     |
| 0003   | View webinar          |         0 | WORK     |
| 0004   | Spray mount for cards |         0 | WORK     |
| 0005   | Reply to VP and Felix |         0 | HOME     |
| 0006   | Get bike serviced     |         0 | HOME     |
| 0007   | Take back Sloth       |         0 | HOME     |
| 0008   | Food for lunch        |         0 | HOME     |
+--------+-----------------------+-----------+----------+
8 rows in set (0.03 sec)

mysql> SELECT * FROM users;
+--------+---------------+
| userId | name          |
+--------+---------------+
|      1 | Susan Jones   |
|      2 | Richard Johns |
+--------+---------------+
2 rows in set (0.01 sec)


mysql> SHOW CREATE TABLE users;

| users | CREATE TABLE `users` (
  `userId` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 |


mysql> SELECT * FROM task;
+--------+-----------------------+-----------+----------+
| taskID | taskDescription       | completed | category |
+--------+-----------------------+-----------+----------+
| 0001   | Phone chat with Sarah |         0 | WORK     |
| 0002   | Learn JS              |         0 | WORK     |
| 0003   | View webinar          |         0 | WORK     |
| 0004   | Spray mount for cards |         0 | WORK     |
| 0005   | Reply to VP and Felix |         0 | HOME     |
| 0006   | Get bike serviced     |         0 | HOME     |
| 0007   | Take back Sloth       |         0 | HOME     |
| 0008   | Food for lunch        |         0 | HOME     |
+--------+-----------------------+-----------+----------+
8 rows in set (0.02 sec)

mysql> ALTER TABLE task ADD COLUMN userId BIGINT(20);
Query OK, 0 rows affected (0.06 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> SELECT * FROM task;
+--------+-----------------------+-----------+----------+--------+
| taskID | taskDescription       | completed | category | userId |
+--------+-----------------------+-----------+----------+--------+
| 0001   | Phone chat with Sarah |         0 | WORK     |   NULL |
| 0002   | Learn JS              |         0 | WORK     |   NULL |
| 0003   | View webinar          |         0 | WORK     |   NULL |
| 0004   | Spray mount for cards |         0 | WORK     |   NULL |
| 0005   | Reply to VP and Felix |         0 | HOME     |   NULL |
| 0006   | Get bike serviced     |         0 | HOME     |   NULL |
| 0007   | Take back Sloth       |         0 | HOME     |   NULL |
| 0008   | Food for lunch        |         0 | HOME     |   NULL |
+--------+-----------------------+-----------+----------+--------+
8 rows in set (0.01 sec)

mysql> UPDATE task SET userId = 1 WHERE taskID = 0001;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> UPDATE task SET userId = 1 WHERE taskID = 0002;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> SELECT * FROM task;
+--------+-----------------------+-----------+----------+--------+
| taskID | taskDescription       | completed | category | userId |
+--------+-----------------------+-----------+----------+--------+
| 0001   | Phone chat with Sarah |         0 | WORK     |      1 |
| 0002   | Learn JS              |         0 | WORK     |      1 |
| 0003   | View webinar          |         0 | WORK     |   NULL |
| 0004   | Spray mount for cards |         0 | WORK     |   NULL |
| 0005   | Reply to VP and Felix |         0 | HOME     |   NULL |
| 0006   | Get bike serviced     |         0 | HOME     |   NULL |
| 0007   | Take back Sloth       |         0 | HOME     |   NULL |
| 0008   | Food for lunch        |         0 | HOME     |   NULL |
+--------+-----------------------+-----------+----------+--------+
8 rows in set (0.01 sec)

mysql> UPDATE task SET userId = 1 WHERE taskID = 0003;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> UPDATE task SET userId = 1 WHERE taskID = 0004;
Query OK, 1 row affected (0.02 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> UPDATE task SET userId = 1 WHERE taskID = 0005;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> UPDATE task SET userId = 1 WHERE taskID = 0006;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> UPDATE task SET userId = 1 WHERE taskID = 0007;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> UPDATE task SET userId = 1 WHERE taskID = 0008;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> SELECT * FROM task;
+--------+-----------------------+-----------+----------+--------+
| taskID | taskDescription       | completed | category | userId |
+--------+-----------------------+-----------+----------+--------+
| 0001   | Phone chat with Sarah |         0 | WORK     |      1 |
| 0002   | Learn JS              |         0 | WORK     |      1 |
| 0003   | View webinar          |         0 | WORK     |      1 |
| 0004   | Spray mount for cards |         0 | WORK     |      1 |
| 0005   | Reply to VP and Felix |         0 | HOME     |      1 |
| 0006   | Get bike serviced     |         0 | HOME     |      1 |
| 0007   | Take back Sloth       |         0 | HOME     |      1 |
| 0008   | Food for lunch        |         0 | HOME     |      1 |
+--------+-----------------------+-----------+----------+--------+
8 rows in set (0.01 sec)

mysql> ALTER TABLE task ADD FOREIGN KEY (userId) REFERENCES users (userId);
Query OK, 8 rows affected (0.05 sec)
Records: 8  Duplicates: 0  Warnings: 0

mysql> SHOW CREATE TABLE users;

| users | CREATE TABLE `users` (
  `userId` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 |

mysql> SHOW CREATE TABLE task;

| task  | CREATE TABLE `task` (
  `taskID` varchar(20) NOT NULL,
  `taskDescription` varchar(100) DEFAULT NULL,
  `completed` tinyint(1) DEFAULT NULL,
  `category` varchar(4) DEFAULT NULL,
  `userId` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`taskID`),
  KEY `userId` (`userId`),
  CONSTRAINT `task_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 |


mysql> ALTER TABLE task CHANGE taskID taskID BIGINT(20) NOT NULL;
Query OK, 8 rows affected (0.04 sec)
Records: 8  Duplicates: 0  Warnings: 0

mysql> SELECT * FROM task;
+--------+-----------------------+-----------+----------+--------+
| taskID | taskDescription       | completed | category | userId |
+--------+-----------------------+-----------+----------+--------+
|      1 | Phone chat with Sarah |         0 | WORK     |      1 |
|      2 | Learn JS              |         0 | WORK     |      1 |
|      3 | View webinar          |         0 | WORK     |      1 |
|      4 | Spray mount for cards |         0 | WORK     |      1 |
|      5 | Reply to VP and Felix |         0 | HOME     |      1 |
|      6 | Get bike serviced     |         0 | HOME     |      1 |
|      7 | Take back Sloth       |         0 | HOME     |      1 |
|      8 | Food for lunch        |         0 | HOME     |      1 |
+--------+-----------------------+-----------+----------+--------+
8 rows in set (0.01 sec)

mysql> SHOW CREATE TABLE task;

| task  | CREATE TABLE `task` (
  `taskID` bigint(20) NOT NULL,
  `taskDescription` varchar(100) DEFAULT NULL,
  `completed` tinyint(1) DEFAULT NULL,
  `category` varchar(4) DEFAULT NULL,
  `userId` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`taskID`),
  KEY `userId` (`userId`),
  CONSTRAINT `task_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 |


mysql> ALTER TABLE task CHANGE taskID taskId BIGINT(20) NOT NULL;
Query OK, 0 rows affected (0.01 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> SELECT * FROM task;
+--------+-----------------------+-----------+----------+--------+
| taskId | taskDescription       | completed | category | userId |
+--------+-----------------------+-----------+----------+--------+
|      1 | Phone chat with Sarah |         0 | WORK     |      1 |
|      2 | Learn JS              |         0 | WORK     |      1 |
|      3 | View webinar          |         0 | WORK     |      1 |
|      4 | Spray mount for cards |         0 | WORK     |      1 |
|      5 | Reply to VP and Felix |         0 | HOME     |      1 |
|      6 | Get bike serviced     |         0 | HOME     |      1 |
|      7 | Take back Sloth       |         0 | HOME     |      1 |
|      8 | Food for lunch        |         0 | HOME     |      1 |
+--------+-----------------------+-----------+----------+--------+
8 rows in set (0.02 sec)

mysql> RENAME TABLE task TO tasks;
Query OK, 0 rows affected (0.01 sec)


mysql> SELECT * FROM tasks;
+--------+-----------------------+-----------+----------+--------+
| taskId | taskDescription       | completed | category | userId |
+--------+-----------------------+-----------+----------+--------+
|      1 | Phone chat with Sarah |         0 | WORK     |      1 |
|      2 | Learn JS              |         0 | WORK     |      1 |
|      3 | View webinar          |         0 | WORK     |      1 |
|      4 | Spray mount for cards |         0 | WORK     |      1 |
|      5 | Reply to VP and Felix |         0 | HOME     |      1 |
|      6 | Get bike serviced     |         0 | HOME     |      1 |
|      7 | Take back Sloth       |         0 | HOME     |      1 |
|      8 | Food for lunch        |         0 | HOME     |      1 |
+--------+-----------------------+-----------+----------+--------+
8 rows in set (0.01 sec)

mysql> SELECT * FROM tasks;
+--------+-----------------------+-----------+----------+--------+
| taskId | taskDescription       | completed | category | userId |
+--------+-----------------------+-----------+----------+--------+
|      1 | Phone chat with Sarah |         0 | WORK     |      1 |
|      2 | Learn JS              |         0 | WORK     |      1 |
|      3 | View webinar          |         0 | WORK     |      1 |
|      4 | Spray mount for cards |         0 | WORK     |      1 |
|      5 | Reply to VP and Felix |         0 | HOME     |      1 |
|      6 | Get bike serviced     |         0 | HOME     |      1 |
|      7 | Take back Sloth       |         0 | HOME     |      1 |
|      8 | Food for lunch        |         0 | HOME     |      1 |
+--------+-----------------------+-----------+----------+--------+
8 rows in set (0.01 sec)


TO CHANGE DATA TABLE OF A COLUMN TO ENUM - this is a string of only allowed values i.e. in this case user can only input 'WORK' or 'HOME' into the category column
mysql> ALTER TABLE tasks MODIFY category ENUM('WORK','HOME');
Query OK, 8 rows affected (0.06 sec)
Records: 8  Duplicates: 0  Warnings: 0


QUIT DATABASE
mysql> quit
Bye
rebeccasmacbook:todo-app-backend rebeccaandrew$


CREATING A DUMP OF YOUR DATABASE AS A DATABASE.SQL FILE IN THE FOLDER YOU ARE IN, IN THIS CASE todo-app-backend. Make sure you're in rebeccaandrew$ and not in mysql>
rebeccasmacbook:todo-app-backend rebeccaandrew$ mysqldump -u root --column-statistics=0 -p -h gradient-instance.cbqebxnwtwyz.eu-west-2.rds.amazonaws.com gradient_todo > database.sql
Enter password:

Can be without the --column-statistics=0 command if it doesn't return an error like that


Type this into console to get log of failures: 
serverless logs -f tasks
