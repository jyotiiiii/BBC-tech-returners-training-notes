/*

Deploying React App to Github pages

Charlotte  18:06
@James I've tried to deploy our app to git pages, but its only deployed the read me. What have i done wrong ? (edited) 

James  18:06
Have you used gh-pages to deploy? 
If not then you'll need to use that - I'll grab you a link

Charlotte  18:07
I did it from github

James  18:29
For react apps it's slightly different

Charlotte  18:33
oh okay!

James  18:35
This one is good - you can start from step 2
https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f (edited) 

Good question - you can totally ignore step 4 - you'll have already created your repo

Charlotte  5 days ago
Hi James, its failed, any idea what this error means ?

![](https://i.imgur.com/6QXPrkR.png)




James  5 days ago
Looks like an error in the code, that in dev is just a warning but when producing a full production ready build then its not allowing it
I'd take a look at the component that has those <a> tags in

Charlotte  5 days ago
Fixed, that now it's chucking up a whole load of errors after deploying  :confused:

Charlotte  5 days ago
http://ACDMProject.github.io/thought-catcher