/*

Express and other dependencies - week 10

CREATING YOUR PACKAGE.JSON
In which you list all your dependencies and other things for your App. 
npm is the (free) Amazon of javascript dependencies. All the free libraries are on there. Other languages have other places i.e. Java has maven central.  
Make sure you are in your correct folder (- in this case todo-app-backend)
npm init -f
This creates a new file called package.json in  your project. 
packagelock.json - fixes/locks in all the dependencies and says you’ve got those versions i.e. 1.4.8 until you explicitly want the later version. 

INSTALLING NEW DEPENDENCIES

Installing Express for working with our backend. 

npm install —save express

the dash dash save - means that express appears in your dependencies section within your package.json

you could do npm i express 
i now means install
new versions of node automatically do the save bit. 

express is saved in node folder and it doesn’t git that, it’s in our greyed out folder. Gitignore. 

npm install —save serverless-http
This installs serverless.http and you can see your dependencies again in package.json

“express”: “^4.17.1”,
The ^ means install a versions including and above 4.17.1
packagelock.json - locks the versions in

Versioning conventions for software. 
MAJOR MINOR PATCH
3.5.6
The first number is major, the second number is minor and the third number is patch. 
So that’s the risk of upgrading the software. 
3.5.6 It’s not major, it’s just a patch. 
4.0.0 - it’s a major rewrite, it’ll break things. 

So now we’ve got two dependencies that we are able to use. 

CREATING AN INDEX.JS

We put this into handler.js
```
const serverless = require(‘serverless-http’);
const express = require(‘express’)
const app = express()

app.get(‘/‘, function (req, res) {
res.send(‘Hello World!’)

})

module.exports.handler = serverless(app);
```

req stands for request
res stands for respond
when someone asks for that url, the handler will handle it. Use it for events too i.e. on-click handler, which will handle the fact that a click has just happened. 

Every time we update handler.js we have to type into terminal: 
serverless deploy
so the code we’ve been working with on our laptop, then goes up to AWS, so it can be used. 

Status codes in the internet
200 is fine
3 i.e. 302 - a redirect - when the browser knew you wanted something but has sent you somewhere else
4 i.e. 404 - saying you’re at fault, you’ve asked for a page that doesn’t exist. 
500 - when the server has done something else - server error

http - hypertext transfer protocol - tells computer that I am going to talk to this computer in this language. 
https - it’s secure - so they say I’m going to talk in this language, but in code (encrypted). 

yml - yet another markup language
yaml - yet another markup language 

TOOLS TO USE TO TEST / DEBUG
We can assume that Postman works - so we know it’s our serverless code that is the problem. Once we combine it with React, it’s harder to tell what is symptom and what is root cause. 

Don’t be fearful of error messages. They are helpful. But they often point to the symptom, not the cause. So if it points to line 8, the problem will be before line 8 (be careful with this as it could be something further down your file that calls a function earlier on). 

in serverless.yml
handler.tasks means handler.js tasks

CREATE A LOG
In your terminal, type in
serverless logs -f tasks
In this case f stands for function, not force. 
And tasks is our function name from serverless.yml
If you don’t get any logging, you haven’t got any errors. Ignore things that relate to Express or things like that, as they are errors within the express package, not your own code. Anything you didn’t write, that has been provided for us, you can assume is okay. 
You get a whole list and all of them work okay, going from the bottom upwards and it’s the one at the top that is the error. 




James  21:51
@channel These were some of the pages I visited tonight:
https://www.codecademy.com/articles/what-is-rest
https://12factor.net
https://serverless.com/blog/serverless-express-rest-api/ (edited) 


HOMEWORK before other webinar

Update the handler.js to send back a hard-coded array of tasks.

To give you a hint, it'll go in the funciton, you'd do it below (req, res) { and above res.json { 

At the moment, it's sending back a json object. 

We need to alter our code to send back an array of tasks. 

Remember the tasks we created in react state, it might be as simple as taking that and pasting it into the backend. 

And then test what you get in Postman. 

We're then going to hook handler.js to our database, so rather than having a hard-coded array of tasks, we will get the tasks from the database. 


