/*

Serverless Credentials Setup: External Config / configuration variables for Serverless Databases

Our app won't work withtou our usernames, passwords, connection strings etc, but we don't want those to be uploaded with our code to public servers or to our github accounts. 

Also, we don't put them into our codebase as we might want to limit access to them within the buisness. So developers might have access to all the code and be able to change it, but not have access to the database username and password. It might not be legal for them to have access to that, so we keep those in a separate configuration file. 

at www.12factor.net/config
number III is Config - store config in the environment. 

There are different environments that we promote our software to i.e. start off in a Dev environment, and we are always deploying code to there, and then when we're happy with any new code, we might promote that version to our User Acceptance Environment or UAT. Then if users come back happy, we might promote it to our Production environment.  

For our APIs we haven't created a production environment. we only have a dev environment (our serverless ip address has dev in it - the one that is pasted into postman for testing)

Before you do this, do a 'serverless deploy' within terminal, and run it through Postman, to verify before starting that everything works - so know if it doesn't work, it's my new code that has broken it, not something I did before. 

---

Make a new file called 
config.dev.json and put this into it: 

```
{
    "DB_HOST" : "the endpoint of your AWS instance",
    "DB_USER" : "whatever the username is",
    "DB_PASSWORD" : "whatever the password is",
    "DB_SCHEMA" : "whatever the database is called"
}
```

You would only call it .dev. because we are in a dev environment. Otherwise you'd call it something like config.prod.json

---

Update the gitignore file within todo-app-backend folder with this:

```
# Ignore config
config.*.json
```

This means it will only live on our laptop and it won't be commited up to the git master. 

The star means all or any. So at the moment we have a config.dev.json but in future this might change to config.prod.json or something else and we would want that ignored too. So by putting the * in, it future proofs it against us changing the filename and forgetting to update the .gitignore file

If you do 'git status' you'll get that .gitignore has changed, but config.dev.json won't appear there as you've asked git to ignore it. 

---

login info within handler.js changes to this: 

```
const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_SCHEMA
});
```



---
Look at https://serverless.com/framework/docs/providers/aws/guide/variables/
and see Recursively reference properties

In my serverless.yml

add this code below 'region: eu-west-2'
indented to the same level as region as per below:

```
  region: eu-west-2
  environment: 
    DB_HOST: ${file(./config.${self:provider.stage}.json):DB_HOST}
    DB_USER: ${file(./config.${self:provider.stage}.json):DB_USER}
    DB_PASSWORD: ${file(./config.${self:provider.stage}.json):DB_PASSWORD}
    DB_SCHEMA: ${file(./config.${self:provider.stage}.json):DB_SCHEMA}
```

This is telling the code to:
 
DB_PASSWORD: ${file - look for the password in ...
(./ - ... the same directory
config.${self:provider.stage}.json - ... called config.dev.json
):DB_PASSWORD} - ... read the password from there


If any of this goes wrong i.e. the password is put in wrong, the serverless deploy will work fine as the password isn't used until the database is actually asked for some data within Postman. But within Postman, we will get an error. 
And if we then go to Terminal and do 'serverless logs -f tasks'
and it will show us the error log and we can see the failed line at the top of the log. 

Have to do serverless deploy every time we change the code, as otherwise it is only changed on our laptop and not on the AWS server. 

If it's all working fine, commit and push your code. You'll see in VSC within the git staged changed, that config.dev.json doesn't appear in the list of changed files, which is correct, because we don't want that pushed up to our public repository. 

We now don't need to keep remembering to change our config details within handler.js to XXXX before we commit changes, as we are not changing the config.dev.json file and they are all in there. 

