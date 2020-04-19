/*
Databases

Front end is the visuals of how your application looks. It can be a React app, so it’s a webpage with React running on it. It could be on a TV, it could be on your phone. It could even be Alexa, so it’s not visual, but it is how user receives the data. 

Your front end will communicate with a back end. Which is Node JS. Node is the backend framework like React is the frontend framework. 

The backend is going to communicate with, fetch data, save data, delete data, update data on a database. 

Databases are persistent, they are always on, so if you turn off your laptop, the data is still available. 

Databases are ways of storing data in a manner that is easier for humans to read and understand. 

Relatable database management systems RDBMS. 

SQL - structured query language. Also called sequel. 

SQL is how you interact with the database. So like you ask ‘how many tasks have I got left’ and SQL is the computer way of saying the same thing. 
90% of databases will be using SQL language. It’s a standard on lots of different databases. 
There are non-relational databases, which use different languages, and mostly don’t use SQL. Mongo, for example, is a non-SQL database. 

A Database is a structured way of storing data. An excel spreadsheet is like a database, but the differences between that is what the database management system gives us. 
* Security - you might want to manage who has access to the database. Anyone who has the Excel file password can see the whole spreadsheet. But the database can select just a bit of data to show to someone and also tracks who sees the data. 
* Database manages passwords for who accesses it. Can set up users that can only read data, and others who can read and write data. 
* Size - there may be millions of rows of data and would be writing to them all the time. BBC would also have loads of different databases - called polyglot persistence. 
* Accuracy of data - rules preventing you putting in the wrong data i.e. only data you can put in is a number between 1 and 10. Or only a city. 
* Redundancy - it has multiple copies of data in case things go wrong
* Overwriting - Ten people editing the same thing, 100 people editing the same thing. Databases will lock you out until someone has finished, so like trying to buy concert tickets, databases are giving you 5 minutes to finish your transaction and locking everyone else out, so they don’t sell the same ticket twice. 

WHAT IS A DATABASE? 

A database is storage. It’s a computerised system that makes it easy to search, select and store information. An efficient hard drive, that compresses data. They are just files under the hood. 

A database is a computerised system that makes it easy to search, select and store information. 

CRUD - Create, retrieve, update, delete. 

In other words, a database is used by an organisation as a method of storing, managing and retrieving information. 

Modern databases are managed using a database management system (DBMS). 

DBMS

Oracle is expensive - you get Oracle support with it as well
MySQL is free, even commercially. It was open source, created by the community, but Oracle bought the rights to it. 
mongoDB - is popular. It’s a noSQL. It’s good now. 
PostgreSQL - it’s free and may be used when people are going to upgrade to Oracle at some time. 
Amazon Aurora - another database
Microsoft SQL Server - another database
Microsoft Access

You go to AWS and tell them that you want a particular database. “I want a MySQL database” and they give you that. 

RELATIONAL AND NON-RELATIONAL DATABASES

Sometimes non-relational databases are called NoSQL databases - good at ingesting lots of data really really quickly. But not very good at getting data back and manipulating it. Some people use one database for taking lots of data in. Called hot data. 
And then they might use another database for manipulating or interacting with that data. 
So accepting data quick in real time into noSQL one and then shift it off to another SQL database over the next few hours, to get some reporting on that data later in the week, for example. 

If a business’s website is going slow, it’s often not the code, it’s generally the database. They are bottlenecks as you have to get lots of data out to people at the same time. 

Relational databases use the same concept of parent-child. So if a database has two tables, Team and Employees. 
Employees belong to a team. 16 employees in four team. What team you belong to is the relationship between you and the team  you are in. Relational databases map those relationships such as one-many, one-one, 
You have to design your data upfront. You have to design your database. 
So for our app, one user might make 50 tasks and so this is the relationship. 

Non-relational databases are good at key pairs, but not so good at relational things. It’s like they hold the data all in one table. 

Relational databases tend to be ACID compliant. Atomicity Consistency Isolation Durable

UNDERSTANDING A DATABASE TRANSACTION

What does a cashpoint do? 
You put your card in
You give your PIN
Options - ask for money - select Amount
Check your balance
Check the notes are available in machine
Card returned
Take card
Cash returned
Take cash
COMMIT the transaction 

With a database, have to make sure that all of these pass, to let any of them pass. 

If any one of them fail, we don’t commit the transaction, we rollback the transaction (we may store some state to see what has happens)

ACID compliance - talking about Atomicity, that is making sure that everything happens, to make sure it passes. 
At what time does the bank know it’s okay to take £10 off your bank balance, and £10 off the money that’s in the machine and £10 off the main balance of the actual bank itself. 

ATOMICITY

Atomicity guarantees that each transaction is treated as a single ‘unit’, which either succeeds completely or fails completely: if any of the statements constituting a transaction fails to complete, the entire transaction fails and the database is left unchanged. 

An atomic system must guarantee atomicity in each and every situation, including power failures, errors and crashes. 

A posh word for making sure stuff gets done. 

When you go through a survey, the atomic unit is smaller, so for example you get to the end of a page and your answers are saved and when you go back to do the rest of your answers, it takes you directly to the bits you haven’t completed yet. 

CONSISTENCY

Consistency ensures that a transaction can only bring the database from one valid state to another. i.e. going from no rows to a fully completed row. You have to fill in all the data fields to commit the data. 

Whereas in Excel, you can fill in half the row, but it doesn’t stop you saving and closing before you have filled in all the cells. 

It is the opposite of "EVENTUAL CONSISTENCY" … and yes, that is a thing! Like with Amazon, you go through the checkout immediately. And then they check the stock. Then they charge your card. And if they haven't got the item or your card is rejected, they roll back and email you to say that it hasn’t gone through. Because the scale of their business means they can’t wait for everyone’s card to be charged, before they accept the order. 

The Amazon model also has a complicated 'eventually consistent' model as the transaction is only really complete once the delivery has been successful and you have the thing in your hand. And that relies on couriers etc. 

A smaller online shop, would charge your card while you wait on their website and you’d see the order confirmation when it’s actually gone through. 

ISOLATION

This is queueing to make sure that a database doesn’t subtract one to a number at exactly the same time as it subtracts one from the same number. i.e. in stock terms, you don’t want the stock level to be 10 and one transaction subtracts 1 from this to leave 9 and another transaction also sees 10 and subtracts 1 to give 9. You want the first one to subtract 1 from 10 and the second to have to wait until it sees 9 and then subtract 1 to give 8, which would be correct. 

In tech terms, this is 
FIFO - first in, first out - shop queue 
LIFO - last in, first out - redundancies 
i.e. for Amazon, you’d want only one thing to happen at once, so two people couldn’t order one book at the same time. Some businesses might say, no problem, we’ll get the book anyway. Other businesses might be more careful. 
Databases will pick a winner, force the isolation and let James buy the book and make me wait until he has or hasn’t completed, before it either says book is still available or it isn’t available anymore. 

DURABILITY

If database got turned OFF and then ON a day later, it would still be there. 

ONE TO MANY EXAMPLE

One user can have many tasks
A user can exist without having any tasks
but tasks can’t exist without having a user associated with them. 

PRIMARY KEY

PK - unique ID for that row - Primary Key. Every row will have a unique ID. 

FOREIGN KEY
FK - This is an additional control that we put in. For example, this could make sure that the ten tasks that Susan has put in, are told that they are the tasks that Susan owns, so when we try to get Susan’s tasks, her tasks come. 

Structured Query Language - SQL

JAMES SEPARATES OUT WHAT ARE HUMAN WORDS AND WHAT ARE DATABASE RESERVED WORDS

i.e. 
CREATE DATABASE MyBookshop;

CREATE is insert
RETRIEVE is select
UPDATE is edit
DELETE is delete