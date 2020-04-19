Serverless (Lambda on AWS)

Recap

Services offered by Cloud providers (AWS)
Databases
	* ACID Compliance
	* Different DBMS’s
	* Relational / non-relational (NoSQL)

Taking a dump of your database - output your database to a .sql file and can use it 

LEARNING OBJECTIVES

Understand serverless cost operating model

Awareness of monolithic architecture and microservice architectures

Understand event-based architecture and lambda use cases

ARCHITECTURE

**Monolithic** - this means all your code is packaged up in one thing and then you need to deploy that all in one go. You might have to use the same language and a bit harder to scale out. Would be like taking everything Amazon do on their website, searching, taking orders, taking payment, emailing confirmation - this would all be on one software. 
Pros are its quicker to get software together and deploy. But when for example, you need to upgrade your software, you'd have to do that on everything at the same time and it’s a big deal. 

**Service-Oriented or Microservices**
So for Amazon, the Email Service could be Node or JS. Order Service, Payment Service, Search Service, Stock Service - all these things can be on different software and bring it together for the buyer  on the screen. So when one software needs updating, don’t have to update everything. 

**AWS Lambda**
This says, just give us the code to send an email, and we’ll do the rest. 
AWS Lambda lets you run code without provisioning or managing servers. 
You only pay for the compute time you consume - there is no charge when your code is not running. 
Code can execute on triggers from other AWS services:
		* If your database changes, it can trigger a piece of code, and that code says, “there’s a new order, I’ll send an email”. 
	* called directly from web or mobile applications
		* When you make a request for some data, you say to API ‘give me some data’ and it brings it back - a web request / a http trigger. 
You only pay for the code that is running. You can scale up when you have a lot of people going to your website. So during the week you can’t vote, but then 10 million people vote during the voting period, so that triggers that type of code, and those machines need turning on to cope. You only pay for what you use. 
You don’t need serverless to do this, but serverless does it for  you. 

S3 - Super Simple Storage - adding a file to a hard drive on a massive scale- optimise a piece of video or photos for the different screens - compression for different devices. 
DynamoDB - 
Simple Email Service - when you’ve sent an email you might want to notify something
Amazon Alexa - is event-based, waiting for someone to say something. 
API Gateway - HTTPS GET POST - the gateway acts as when you are delivering a letter, you take it to the gateway and it knows where to send it and it sends it over there to where the function is waiting to be triggered. 

Good software is loosely coupled and highly cohesive. 

If your software feels seamless to the user, you’ve done a good job. 

The client (your mobile phone for example) will make a request to the API Gateway which will trigger a piece of code we’ve written in NodeJS within Lambda and that goes to the database to get the info. 

We’ve done …
Create
Retrieve
Update
Delete

Request Methods 
GET - our browser says ‘get’ me that content. When you say 'get', think 'retrieve'
POST - think of this as 'create me some new data' when you are saving some new data i.e. when you sign up as a new user, you 'post' your data
PUT  - this is updating existing data
DELETE - think of as deleting some data

You say GET me the tasks from the API
The server will say, 'yes here are your tasks'

When you make a request, it’ll be in the headers of the request packet - effectively the address on a envelope. The contents of the letter are the data you are asking for. 

REQUEST - RESPONSE MODEL

You might say ‘get me all the tasks for user Susan’. 
The request will contain information regarding the nature of the request such as an ID. 
The response will contain the answer/data

A lot of APIs will respond in Json. We are going to use that. Json is a bit language agnostic. Lots of languages can interpret it and use it in some way. 

API (Application Programming Interface)

A set of functions and procedures allowing the creation of applications that access the features or data of an operating system, application or other service. 

Our apps will have certain functionality in them. 

Let’s say we take Twitter, it will have certain functionality in it. It would be nice to give that functionality to other developers to embed in their sites, so users can post a tweet from that site, without having to be redirected to twitter.com to send a tweet. If we make an API, we say you can write your software in any language and you can use our software to write a tweet. It exposes your functionality in a safe way, to other software developers. 

You decide what functions to make available. 

A good analogy is a waiter with a menu, a customer will choose something from the menu and then waiter (or API) will go to the kitchen and ask the chef (backend) who will get the food (data from the database) and then the waiter will bring it back to you. So the API owner sets the menu and what is available. 

Our react code willl issue a GET request to our API and it will ask our API for tasks. It will return an Array of our tasks
A POST request with a json object for saving a task. 
(A PUT request to edit a task)
It will return Json objects and we can display those however we choose. 


We will use Postman to test our API - before we connect it to our React App. Help us to test our API and database, before we link our frontend and backend. 


James:
This video is a good description of the difference between relational and non-relational (NoSQL) databases
You can ignore everything after 10 minutes, as it then goes product-focused for Google Cloud Firestore. But the first 10 minutes explain the two types of database pretty well
https://youtu.be/v_hR4K4auoQ (edited) 