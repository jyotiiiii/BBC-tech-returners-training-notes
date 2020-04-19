/*

Setting up a Database on AWS - James’ Webinar

Sign up for an AWS account. 
Databases and database setup

Once you’ve logged into AWS
Make sure you’re in London on top right (or whatever region you want your database to live in)
Click on Services
Search for RDS in top search bar
Click on RDS for Managed Relational Database Service
Click on Create database
Choose a database creation method - Standard Create so we have options available for us
Engine options - MySQL
Leave edition and version alone
Templates - Free tier (only for our purposes of experimenting or training, not for a business)
Settings:
DB instance identifier: put in what you want to call your instance. i.e. gradient-instance
Credential Settings: Master username: root
Master password: put in a password and make a note of these details as they are very hard to reset. 
DB instance size - we only get one size available within free tier - but 1 gig of RAM and 1 virtualCPU is fine
Storage - we can increase this, but 20 GIG is fine for our purposes. And it’s always SSD under Storage type. 
Click to deselect Enable storage autoscaling
Availability & durability - because we’re on the free tier it doesn’t employ multiple Availability Zones. 
Connectivity - for a business, you wouldn’t leave it as a Default VPC, you’d probably set up a Virtual Private Cloud for it. But for our purposes, it’s fine. 
Click on Additional connectivity configuration. 
Click on Publicly accessible: Yes. This means that we can access it from anywhere on the internet. For a business, the default is No, as you probably wouldn’t provide public access to your database, for our purposes, it’s easier if we do. 
VPC Security group - Click on Create new. 
And in New VPC security group name, put in something like gradient-rds-security-group. 
Availability zone: can leave as No preference
Database port: can leave as 3306
Database authentication: leave as Password authentication
Additional configuration - click down to get some more options that we can turn off here. 
Backup - don’t need automatic backups, you might want to do this if you are worried about losing data
Maintenance - don’t need to Enable auto minor version upgrade
Then click Create database
It takes you through to another window where you can see your database there and under Status, it says ‘Creating’. 

In the meantime, we can configure the security groups. So click the instance under DB identifier. 
In this case you’re clicking on gradient-instance
Under Connectivity & security, you can see the section on the right is called Security and under that is VPC security groups. This is essentially a firewall for our database. At the moment it can only be accessed by someone from the IP address from which the database was set up (i.e. at my house). If you click on the link, it opens up in a new window. 
A security group is a firewall, it is saying what machines are able to access my database. The way they work is that they are usually set by default to block everything unless you punch holes in it. So they say ’nothing can access this database unless you grant access to it. 
If you click on the Outbound tab, you can see that the rules are set to All. Can send any data, through any port, to any destination, using any protocol. This means you can send data to anywhere.
But the Inbound rules are set to just one IP address, at my house. 
Click on Edit to give access to the whole world. 
Click on Add Rule, select Type to be MySQL/Aurora then Source to be Anywhere. Then click Save. You wouldn’t do this if you were using this database in a business/production scenario, you’d secure it a lot more, but just for the BBC course, it makes sense to let it be accessible from anywhere. 

Then go back into Services on the top menu bar and into your RDS main window, then click on DB instances to see if the Status has updated. As you refresh, it should say Available under Status. 

Click on your DB identifier and then under Connectivity & security, you need the Endpoint address, so click on that and copy it. 

Open Terminal. 

Type: brew install mysql
 to install mysql as software onto our laptops. 

Type in: 
mysql -u root -p -h gradient-instance.cbqebxnwtwyz.eu-west-2.rds.amazonaws.com 
(the Endpoint address that you copied). -u stands for User and our username is root. -p is for password and -h is for host. When you click enter, you get asked for the password. Enter it and hit enter again. 

mysql should open up. And now we are interacting with a computer based in London that is running MySQL. 

If you type
SHOW DATABASES; 
and hit enter, this will show you all the databases you have installed, which is none at the moment. The 5 built-in SQL databases that do appear are important, so don’t delete them. 

Type: CREATE DATABASE gradient_todo;
and hit enter, it will create your first database

And then if you do SHOW DATABASES;	 again I should see gradient-todo there in the list.

USE gradient_todo; 
to go into database and start doing things - tells MySQL what database you want to use

Once we’re in database, we can start creating tables and put data in

SHOW TABLES;
shows the tables, and that should show Empty set, as we haven’t put a table in yet. 

Think about the structure of your database. 
There’s a name of the database - Acme Inc. 
There are two teams named Marketing and Sales. Each has many employees, and the employees have firstName, lastName, DoB. 
So this is a “one (1)  to many (0..*)” scenario. Instead of the 1 to 0..* Can also be represented with a line - connecting the ONE table on one side, with a crow’s feet line-ending at the MANY table on the other side. 
Team - has a name and also we can specify what it’s contents can be - VARCHAR(50) - means it’s a string with 50 characters
Employeee - has a firstName VARCHAR(50)  lastName VARCHAR(50) , DoB DATE

All teams need a Primary Key and we don’t want that to be something that could repeat in the table, needs to be unique. 

So you can use create a table called team and then in the brackets you put your column headings and the constraints you want to put on that i.e. data type and character length. Also need to say which column is going to be your Primary Key. Commas between each of columns and then a column before you define your Primary Key. 
CREATE TABLE team (teamId BIGINT(20)  NOT NULL AUTO_INCREMENT, name VARCHAR(50), PRIMARY KEY(teamId));

(If you want to put the NOT NULL AUTO_INCREMENT thing, that means that the teamId can’t be null and it also lets MySQL deal with incrementing the number. It will probably start at 1 and go up from there)

Then can do: 
SHOW TABLES;
And you should get your new table appearing. 

Can query the data
SELECT * FROM team;
Selects all data from team. And you’ll get Empty set as you haven’t put any data in. 

So then can insert some data
INSERT INTO team (name) VALUES (“Marketing”);
(Not putting in teamId as letting MySQL do that from auto increment)
That puts in Marketing row

INSERT INTO team (name) VALUES (“Sales”);
Inserts a second row / team called Sales

SELECT * FROM team;
Gives us the view of the table with two headings teamId and name
And 2 rows in set - id of 1 for Marketing, iD of 2 for Sales

![](https://i.imgur.com/uu4VTTE.png)


Then can create a new table for employees. We are basically putting column heading and putting in the data type and length that we want to be allowed to go in that column. The datatype for teamId has to be the same datatype as specified before i.e. BIGINT(20). So each employee has an employeeId which is a string, a first name, a last name, a date of birth and the id of the team they belong to (marketing or sales). And then have to set the Primary Key for the table. 

CREATE TABLE employee (employeeId VARCHAR(10) NOT NULL, firstName VARCHAR(50), lastName VARCHAR(50), dateOfBirth DATE, teamId BIGINT(20), PRIMARY KEY(employeeId));

So this creates your table with its columns. 

Then you can put data into table, by giving the column headings first and then the values you want to put in. A key/value pair. 

INSERT INTO employee (employeeId, firstName, lastName, dateOfBirth, teamId) VALUES (“0001”, “Susan”, “Smith”, “1976-12-15”, 2)

SELECT * FROM employee;
Displays our data. We can see employee table, with correct headings and data for Susan and puts her in the Sales team, which has teamId of 2. 
![](https://i.imgur.com/nQfGzcH.png)


If you add another employee with a teamId of 7, it will allow this, as we haven’t yet added a Foreign Key constraint to our database:

INSERT INTO employee (employeeId, firstName, lastName, dateOfBirth, teamId) VALUES (“0002”, “Sarah”, “Jones”, “1981-11-08”, 7)

FOREIGN KEY CONSTRAINTS - implementing referential integrity on that database 
Need to make sure we can’t insert data into a field that isn’t what we want. So if there are two teams with id of 1 and 2. We don’t want to be able to add an employee with teamId of 7, as that will lose that person, when we output a list of employees from teams 1 and 2. 

ALTER TABLE employee ADD FOREIGN KEY (teamId) REFERENCES team (teamId)
Because we want to alter the employee table by adding a foreign key to the teamId column. We want to reference the teamId column in the team table. 
If you already have data that would not comply with Foreign Key constraint, we aren’t able to add the foreign key constraint. As Sarah Jones’ data is already in the database and it doesn’t comply with the Foreign Key rule. 

So instead we need to alter Sarah’s incorrect data first: 

UPDATE employee SET teamId = 1 WHERE employeeId = “0002”;
We’re saying, get the 0002 row and change teamId to 1, instead of 7. 
(this bit of SQL will come in useful when we are updating our tasks as Done). 


Now try to add your foreign key again and it will work. 

![](https://i.imgur.com/oDHjlea.png)

SHOW CREATE TABLE employee;
This shows the whole table with its behind the scenes constraints etc. 

![](https://i.imgur.com/5pQzfGM.png)


Now can try to add a new employee that doesn’t comply with Foreign Key constraint: 

INSERT INTO employee (employeeId, firstName, lastName, dateOfBirth, teamId) VALUES (“0003”, “Vanessa”, “Jackson”, “1974–09-28”, 7);
![](https://i.imgur.com/dc21xuY.png)


MySQL returns an error - it won’t let us insert that data, as we have a Foreign Key constraint stopping us using 7 for teamId as there are only two teams with iDs of 1 and 2. 

If we want to see all the people that belong to the Marketing team, we could do. 

SELECT * FROM employee WHERE teamId = 1;

With the filter of the WHERE clause, it is only showing the people who belong to team 1, the marketing team. 

To leave your database and return to normal Terminal
quit
and hit return. 


CHANGE DATA TYPE OF A COLUMN
ALTER TABLE tablename MODIFY columnname VARCHAR(4);

