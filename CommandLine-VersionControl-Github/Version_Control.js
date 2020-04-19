VERSION CONTROL

James:
Really useful guide on Git
https://dev.to/unseenwizzard/learn-git-concepts-not-commands-4gjc

VSC keeps track of every change to a file, and you can store each revision of a til so you can go back or forwards. 

It’s a just-in-case thing. GIT will protect you if you’ve committed a file and changed it, you can go back to an earlier version. 

Googledocs maintains a version of the file. 

Mercurial is similar to GIT., but GIT is the one everyone uses. Invented by the same person who invented Linux. 

SVN or Subversion used to be popular.  CVS prior to that. 

GIT is the one most businesses use nowadays. Widely adopted in last 10 years or so. 

DVCS - distributed version control system, which means you can pull down what you want to your own laptop. 

Origin - is the machine that you are pushing the code to that is not your laptop. Github provides that service for us. They are open source, but have just been bought  by Microsoft for a lot of money. Another provider is Atlassian Bitbucket and others on cloud.  Unlimited storage space - it doesn’t store full versions of the file, it stores the history of how that file has changed.  

If you’re a business, you might buy a private repository from Github, rather than a public one. That’s where they make their money. 

ppt - on that slide with people and cylinders, the cylinders are the server. 

With version control, we need to commit little and often. If you’ve got 20 tests to do and it works for three of them, commit it then. And then carry on working.  Git doesn’t track all the ‘save’s you do, just when you COMMIT, it saves the differences in the file between the one now and when you last committed it. 

Can use SVC to commit your changes, with the visual buttons. But we’ll learn it first through the command line, so we know what’s going on under the hood. 

During the course, It’s worth committing code, even if it isn’t working.  Then James can have a look at it and give feedback. 

There’s a difference between COMMITTING (you’re telling Github to keep a version of it on your local laptop. You’re saying I’m bothered about this version and you should be bothered about it too’. 
and PUSHING  (all those things I committed, I want them to be on my local laptop AND on the GitHub servers.). And all the versions you committed are available online to anyone. 
So COMMIT little and often. You might PUSH it once a day. 

Github is basically our online portfolio and employers will look at this to see our learning journey and to see that we are interested in code and playing around. 

James might tend to have one repository per project.  Facebook have one repo with all the projects in it, so when someone pulls down code for the two projects they are working on, they get all the code for the 57 projects they are not working on too. This might be because to make the two work that  they are concerned with, they need code from 20 or so others as well. 

If you move things from one repo to another, you’ll lose the commit history. Or you can clone it and save in new repo, to keep commit history. 

Git is the technology we are using. 
Github is the business who has put all the systems around the technology to  let us use Git. 

FORKING - takes a copy of the repo from someone else’s GitHub account and puts it on your GitHub account. 

CLONING - brings the repo down onto your laptop - locally. 

PULL - if you’ve already forked someone’s repo and they have updated it, you don’t automatically get that, so you need to remember to ‘pull’ down the most recent version. some businesses get their staff to do this each morning. 

CONFLICTS
When you push code back up to a shared Repo, there might  be conflicts between changes you’ve made and changes others have made, as Github merges the file and if there are no conflicts, it will just put the latest version of each line of code. But if you’ve changed the same line of code that someone else has, Github will create a ‘merge conflict’ and it will have to be manually decided by a human. 

You can fetch before you merge, so you can have a look at any potential conflicts. The best way to resolve a conflict is to go and speak to each other.  Or one person might be in charge of merging, but then you have the single point of failure issue, if only one person is in charge and they aren’t in that day. 

BRANCHING
You’d have your code on one branch and another person’s code on another branch, so you can compare them both. 

Within GITHUB

Under the Code tab, you can click [no.] commits you can see the various version changes 

And if you click on the number/letters button on the right, you can see and what was changed (split screen top right).  This long string of numbers and letters is a unique ID for your commit. 

CONTROLLING GIT FROM TERMINAL (git was installed during laptop setup so we can do these tests)

git status [i.e. git space status and then return]
- shows what files it thinks have changed. They are changes not staged for commit - I can see those files have changed since you last committed, but you haven’t told Git that you want those changes to be committed. 

git add .  [i.e. git space add space dot and then return]
This tells git you want all of the files in that folder to be committed
If you just want to add one file, you do git add susan.js [i.e. git space add space susan dot js return]

So by now we’ve edited some code, saved it, and told git we are bothered abut them, but still haven’t committed the changes. So the way we commit is to type
git commit -m”And you put the message in here of what you write” [i.e. git space commit space hyphen , “the message you want to appear in git” and then return]
Often good to use present tense in messages.

You might do git add and git commit several times a day  
So now it’s committed, but it’s only on our laptop. It’s not yet on the cloud. 

git log [i.e. git space log and then return]

To get out of the log, hit q for quit and that brings you back to your cloned repo. 
 
Now we want to get commits off our laptop and onto Github. We might just do this at the end of each day or when we want to show James what we have done. This pushes all the different commits that we have done that day. 
git push origin master [i.e. git space push space origin space master and then return]
This will ask you to put in your GitHub username (rlfweb) and password (which as you type it in, won’t appear on the screen). 

origin master tells git where you want git to push the code to. So for us, origin is our GitHub account. 

git remote -v [i.e. git space remote space hyphen v and then enter] you will see your origin master in the terminal 
This is git equivalent of ls - it lists the 

if you type git branch [i.e. git space branch enter] you get to see the branch you are in. In this case it is * master

git help commit [i.e. git space help space commit and then enter] gives you some help 

For a new repository, easier to create on GitHub and then clone it down. 