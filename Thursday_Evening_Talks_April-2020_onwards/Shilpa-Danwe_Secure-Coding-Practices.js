/*

Shilpa Danwe - Secure Coding Practices

Worked in BBC for 5 years. 

I am Principal Software Engineer and Security Champion, Online Technology Group

Being a Security Champion is more about knowledge-based practices and trying to get those best practices as part of the team's working

Very supportive of women re-entering workplace after career break. Active in Wistem. Available to help and support us at any time, outside this session. 

What is security software and Risk Principles
* Confidentiality - trusting an application to handle users' personal data
* Integrity - your application reflects the experience people expect i.e. a shopping app allows people to shop
* Availability - available all the time
We could achieve these with various security controls

SECURE CODING CHECKLIST

* Input validations - a hacker would be thinking - what actions can I make the app do - so anything that is denied, is allowed. So if you let users access the Admin screen, then that is allowed. 
Validate input data on client and server side - i.e. check that names are letters only, emails have @ sign in them etc. etc. You should have validations in frontend and backend
Validate for expected data type, length, range i.e mobile phones should be 12 numbers long
Centralised input validation routine - good practice to put all your validations in one place so you know where to go to make changes
Pay attention to special characters (<>?,&'") - as these can mean different things in databases
So keep it all in mind as you design - think about what users are not allowed to do and make sure that is denied. 

* Session management - when you login to an app, you can see your profile, favourites, data etc. That's when your session is started. It's useful for you to know when sessions start and end.
Use server or framework's session management controls -
Session timeout period - for examle apps that are sensitive such as your bank's app, you get kicked out of the app if user isn't active
No concurrent logins with the same User ID - you don't want a banking application to allow people to log into their account using the same userID on multiple devices. So if you log into your phone, you get booted off the website and visa versa. 
So these are some of the things you implement, depending on the business case 
Logout - when user logs out, make sure you close all the sessions. 

AUTHENTICATION AND PASSWORD MANAGEMENT 

Insist on at least 16 digit characters for passwords with things like needing capital letters, numbers, symbols in a password
For forgotten passwords, send an email with a link and it should have an expiry time i.e. only valid for an hour or 24 hours
If you can, rotate passwords, so they are only valide for 90 days and then you have to change it. 

* Authentication must be on server side
* Centralised authentication control
* Use HTTP POST request parameter
* Password management controls


ERROR HANDLING AND LOGGING

Do not disclose sensitive data in error responses and in logs i.e. user data
Implement generic and custom error pages - two different types of logging, like if someone goes to page that doesn't exist. Or you may have custom pages i.e. 
Ensure logging contains important log event data e.g. validaton, authentication failures, date and time of failure
Restrict access to logs

DATA PROTECTION

Implement least privileges
Encrypt highly sensitive information (at rest and in transit)
Do not inlcude sensitive information in HTTP GET request
Set data retention policy - so you delete data when you don't need it anymore
Do not reveal backend system or other sensitive information in comments.  

DATABASE SECURITY

Use secure credentials for database access
Use parameterised queries
Lowest possible level of privilege - if your function is to read database, make sure they only have read-only access, not write or admin. 
Close connection as soon as possible - when  you've finished using database, make sure you close the connection, to keep datbase secure. 


GENERAL CODING PRACTICES

Review and validate third party code/libraries - makes sure you don't install untrusted libraries into your code
Restrict access to privilege/sensitive data
Always validate input data - makes sure data you're getting is what you need and expect and that it is clean. 
Do not store or disclose sensitive user information in logs
Explicitly close database connections, file connections ater use
Logout functionality should fully terminate the associated session or connection. 

CODE ANALYSIS TOOLS 
- they go through your code and check how secure it is. 

ECL - Eclipse Emma plugin
Intellij inspect code - backend clode analysis - helps you clean up your code
JaCoCo, Cobertura
SonarSource - JS analaysis
SonarLint
ESLint - does code analysis in frontend

#shilpadanwe
shilpa.danwe@bbc.co.uk



Q&A

Rebecca Salsbury - this is such an important and growing area - 

BBC is investing a lot into security - there's a security champion route - each team has one - you don't need to be an expert - you just need an interest to know more about it, once a month there are meetups and have talks from security experts, what are various tools within BBC to be used for security. 

Making sure content is safe - checking content security is safe. protecting streams of data, so people can't hack it and save it and then sell it on. 

At BBC, there are also Privacy Champions, Accessibiltiy Champions. Mental Health First Aiders, normal First Aiders, so there are a variety of places you can find yourself doing more than your normal work. 


InfoSec are a group within the BBC who check through security issues of new software, before it goes lives - they have a level of approval. 
Before Lydia went to Infosec for their approval, she had meeting with her team's security champion so that they could iron out any obvious issues before meeting InfoSec. 
InfoSec have a role to prevent BBC being under major attack. They do a lot of investigation to prevent those things going wrong. 


Next Thursday 16 April at 6.30pm
Rebecca Salsbury will do a workshop session for 45 minutes about Resilience. 
She's aware that we are all waiting for the BBC to resolve our situation. They are doing it as quickly as they can, in the meantime, she's got some ideas to offer around being resilient in these difficult times! 
Do a little preparation - have a look around the web - everyone is doing webposts about how to work from home and how to cope with family. How not to catastrophise. 