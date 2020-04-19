/*

Connecting our frontend to our backend

Again, before you do anything, run your endpoints through Postman to check that the PUT, POST, GET and DELETE still work. 

Then in Postman, click the orange New button and Create a New Collection. 

Give it a name i.e. GradientToDoCollection and click Create

Then bottom left of Postman window gives option of viewing the sidebar if you can't see it already. 

We can see our new Collection in there. 

So now we need to create our requests. 

Our GET is untitled at the moment, so let's save it. In the main Postman window to the right of the blue Send button is a grey Save button. Click on that to Save Request. 

Name it GET Tasks
Click to save it into our new collection. 
Click Save to GradientToDoCollection

Then you see it appear in your collection. 

So then close the GET tab within the main Postman window, so the workspace is clear. 

Then click the + to add a new Untitled Request. Go back to Terminal, grab the Post URL and paste into the Postman Send bar. Change the Method to POST and Save again. Title it CREATE Tasks. Save in the GradientToDoCollection again. 

Then you have two methods that you can click between in your Collection on the left hand side. 

---

POST
All we want to do is be able to add some data to our database. But we want to get our API to do it. 

Google:
pass information to backend api request body or params
This is quite good article: https://dzone.com/articles/rest-api-path-vs-request-body-parameters

We can pass info by the request body so change your POST code in handler.js to this and then serverless deploy. 

```
app.post('/tasks', function (req, res) {
      res.json({
        message: 'Your POST works - making a new task',
        taskSaved:taskToInsert
      });
    });
```

When we run it in Postman, we get this: 

```
{
    "message": "Your POST works - making a new task",
    "taskSaved": {
        "type": "Buffer",
        "data": []
    }
}
```

Not what James was expecting, he thought we'd get undefined. It isn't making it a JSON object yet. 

So let's try googling:
express 4 handle json body
expressjs.com

"built-in middleware" - express is the code the express team have built, then we've got our code and between the two we might have a need for another job to be done. Middleware. And in our case it will be transforming the request body into JSON. 

Add in this to the list of things we are using at the top of handler.js
app.use(express.json());


NOW WE ARE DOING THIS: 
// Take that information and pre-populate a SQL INSERT statement - i.e. write a MySQL statement to do the insert in our code, that will be issued against the database

Look at npmjs.com/package/mysql

Search for mysql. 
Look at how we do inserts - find 'insert' on the page and look at what comes up. 

Getting the ID of an inserted row:

```
connection.query('INSERT INTO posts SET ?', {title: 'test'}, function (error, results, fields) {
  if (error) throw error;
  console.log(results.insertId);
});
```

