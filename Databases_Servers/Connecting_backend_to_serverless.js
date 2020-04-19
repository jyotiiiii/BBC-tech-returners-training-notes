Connecting backend to serverless

Harriet Ryder - https://dev.to/harri_etty/the-introduction-to-servers-i-wish-i-d-had-44jl

We are now at the place where our API now issues queries to our database. 

Our frontend has React app with a list of tasks, that can be edited

Our backend has four endpoints in serverless.yml and in handler.js

Then we use the serverless framework from serverless.com to deploy that, to get that JS that we've written and deploy it into AWS as a Lambda function. 

Serverless is a framework for taking our code, packaging it up deploying it into the cloud, at AWS, and makes sure it's accessible, as long as we follow its rules, which is the serverless.yml

Node can be used for code that is written in Java, Python, C#, Ruby, Go etc. 

Lambda is the platform that AWS give us for running serverless code. 

The API gateway gives us the http address for the various functions - get, put, delete, post

Every time we run serverless deploy, it does the same job, and so it's reliable, as a machine. 

serverless.com isn't just for AWS, it let's us deploy to Google Cloud and other providers. It started off open source and then they noticed people were using it and so made a paid solution. 

It's serverless to us, but there are of course servers that host things, but we never see them. 

Originally, if you were in a company and had a dev team and an ops team, it always felt serverless to the dev team as they handed the code to the ops team to upload onto the servers and deal with that. 

Serverless is great for event-based stuff, where you might i.e. get a confirmation email within an hour of it.  

Once you are in your database, you are on another computer at that point, the one that is hosting your mysql database. 

ASYNCHRONOUS CODE 

Doing multiple things at the same time, or at least starting them off at the same time. 

If we have a piece of code that needs to fetch some info from the database and then using that info it needs to change it and then update the database with the changes. If it's synchronous, it does those things one at a time. In a lot of cases, that is good, we need to get data back before we do the next thing. 

But there are cases when we want them to be done at the same time. This is asynchronous, where we have a shorter execution time, so we are only as slow as our slowest thing. If we are talking about machines talking to machines, it's usually the machines being occupied doing something while we asked it to do something else. 

All data queries should be asynchronous, unless there's a particular reason why not. Such as there is a query that needs some data first before the next one is triggered. Or we do them asynchronously but chain them, using .then

Going back to that atomicity idea, you would want that to be synchronous, like the cash point, where you would want them to rely on each other. Or you need a piece of code that sits around an asynchronous code, where if one thing goes wrong, it tells everything else to cancel. They would all have to undo everything back to where it was before. 

JavaScript is single threaded. Within asynchronous, it fires them off one after the other and then goes back to check them all throughout the length of the execution. 

As a human being, we are multi-threaded, we can drive and have a conversation at the same time. 

async and wait - in newer versions of JS
All languages will have some sort of async and wait. 
.then means I'm done. .error means it's not worked.

PROMISES

Allow us to fire off a piece of code to run
This is when  you have a piece of code that says .then
This is saying 'I want to start this function and when it's finished, I want this to fire'.

```
function doAsyncTask() {
  var asyncExecution = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async Work Complete");
      resolve();
    }, 2000);
  });
  return asyncExecution;
}
console.log("START");
doAsyncTask()
.then(() => {
  console.log("I've finished");
})
.catch(() => {
})
console.log("END");
```

Promise is a reserved word.

A callback function is a function you have when you want it to happen after something else has happened. 

We just need to know that functions can be performed at the same time and tell us when they are done. Like the kettle, you put it going and then it flicks off when it's boiled and then we do our next steps of pouring the water. 

setTimeout() is a built-in JS function that delays something for a set amount of time. Set it in milliseconds so 2000 is 2 seconds. 

Unless you use promises, the functions are synchronous. 
But the libraries have the promises built in. So the libraries are usually asynchronous, unless you specify .then for it to be synchronous. 

If your function is a promise, once it's completed, you can then follow it with a .then
Or you can do a .catch if the function fails. i.e. the kettle broke

Redux is used in React and it's a way of separating your state from your App.js so it's a bit like having a separate CSS sheet for your state. A kind of grandparent - a global state management that announces it to your components. 

Watch Netflix 'The Code' 

NodeJS is the same as using JS but on the backend. Because JS used to only be able to be used in a browser, and then some people decided they would try to get JS to run on servers and things like raspberry pie. And that was labelled NodeJS, but is is basically same as normal JS. So you can put NodeJS on your CV, because it shows that you have done backend. It shows you are full stack! 

Typing
serverless info 
into terminal, gives us our endpoints again, without having to deploy again. 