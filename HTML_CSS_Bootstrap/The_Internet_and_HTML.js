The Internet and HTML

Homework is just creating your webpage, using only HTML. 

What is a website? 
A collection of linked web pages.
It’s code that browser will look at and display. into something we can read as a human. 
HyperText Markup Language. It’s the markup of ‘what is on the page’.

When you go to a website i.e 
tech returners/index.html 
This is the page your browser will look for - it’s looking for index.html. 

Right click (2 finger click on the mac) anywhere on the page and select Inspect. 
Elements - You can see all the tags etc. 
Network - see all the requests that go from laptop to BBC servers to get content from their servers to my laptop - it’s getting  JS, images, gifs. Sometimes it will go to server to get it. But browsers also have Caches, which optimises the speed the website loads, so if images are already saved down on your laptop, it doesn’t download them again, it uses the ones from the cache. 

If you’re visiting a site that’s hosted in London, it’ll be pretty quick to get it. But it takes 80 milliseconds to get a webpage from the US. Nearly 1/10 of a second to get anything to appear. This is called latency. So the more caching you can do the better for the speed - then your laptop will use the local version on your laptop, not bring down the identical content again.  
Servers often send content from a server that’s in your country and it’s quicker and it’s in your currency. 
RAM - if computer is turned off, whatever is in there gets destroyed - and this is fast, so if you want it fast and don’t mind if it gets lost, save it in RAM. 
Hard disk memory - where you save things you don’t want destroyed. But this is slow. 

Chrome and all other browsers do a lot of optimisation, deciding which files to cache on your computer and which ones not too. 

When you clear your cache, I want you to forget everything I have on my laptop and I want the newer versions of everything.  

CLIENT / SERVER

Servers are generally left on all the time, which is why laptops don’t make good servers, as we turn them off. Servers are always connected. 
Servers are also usually connected to the internet. 
They are in buildings that have protection from power cuts i.e. diesel generators kick in. 

A client is the laptop, mobile phone or TV that goes to the BBC server to get the content. We can access the internet with lots of devices or clients. 

The client requests stuff from the server, and the server responds. Request/response model. 

Many interactions begin with a URL (uniform resource locator)
https (hypertext transfer protocol secure) the rules or protocols - like agreeing we’re going to speak French. 
www.techreturners.com - this is the host - this is telling the browser where to go to get stuff from. This is like your street address.  They are purposely written in human words. 
.com 
.tv is not TV, it’s an island near New Zealand - tuvolo. The business person took all the money as they didn’t register the .tv domain. 
/about - this is just telling the browser to change directory into the About folder. Like Terminal using cd 

HTTP REQUESTS

1. DNS  Lookup (Domain Name Server)
a. Utilising cache - does my computer know where it is?
b. DNS query - this will ask server where to go for that webpage you want
IP v4 - only goes up to 256 as power of 2
IP v6 - now have longer IP addresses as have run out of them

2. Initiate TCP connection
a. HTTP (HyperText Transfer Protocol)
b. Sends in GET request (asking for content) When you ask for a webpage you are doing a GET. 
CRUD
C reate  - POST - creating new data
R ead / Retrieve - GET - get me some content
U pdate - PUT - updating some data
D elete - DELETE - if you’re deleting data 

TAKE THE REST OF THE THINGS ROM PPT

IP address - Internet Protocol address
In Terminal, you can do ping google.com
And you’ll get back the IP address of google. It’s easier to use google.com than type in this IP address: 172.217.169.78. If you past this into navigation bar, it takes you to google. 

TTL - Time To Live
This tells your cache it’s time to check the server is still where you thought it was, in order to increase speed 
When you provision the domain, you choose how long your TTL will be. 
Can’t have just one as then you have a single point of failure. 
You have a couple and spread the risk of one stopping working. 

[All software will break, all software has bugs in it, you’re better off designing for failure. 
Treat software like cattle not pets. They are there for a period of time and then you get rid of them. ]

THREE WAY HANDSHAKE
Trying to establish a communication pathway:
SYN packet goes from device i.e. your phone to the server. Like walking into restaurant and saying ‘hi to waiter’
Server sends SYN-ACK - which is like the waiter saying ‘hi, I’ve seen you, I’ve got you’.
the ACK then is the client saying ‘can you walk me to my seat’
And the server sends the content. 

ELEMENTS, TAGS AND ATTRIBUTES

Elements - two matching tags and everything in-between
<p>Some paragraph</p>

Opening tag for paragraph tag (might be H1 tag etc)
Element is “Some paragraph”
Closing tag

<div class=‘main’> - attribute name is class, the class of the div is main and the opening and closing tags

Page is HTML tags
Head is the title, css files etc.
Body - is everything you see on the page. 
HTML is everything on the page, not what it looks like. 


HOMEWORK - due Tuesday evening so James can review on Wednesdays. If you do it before and want feedback, send James a message on Slack. 
Commit little and often, so James can see the journey we’ve been on. 
Use VSC for the HTML too. and open it in Chrome (double click on file in Finder and it should open into Chrome. 

Just commit your code to GitHub and James can see it there. 

Just what’s on the page, The Skeleton. not what it looks like (CSS) or its functionality (JavaScript)
The buttons won’t  work for example
The HTML is just data. 

Marvel and Balsamic are little design tools. 
Low fidelity is paper and pen design tools
High fidelity is as close as you can get to the real thing. 
This is the planning section. Remember 80% planning, 20% coding. 
User experience study of some type - try it out. 

START ON PREPARATION TASKS AND GO THROUGH THOSE
Can look online at various examples of To Do Lists
Then create in HTML what you have done in your drawing. 
If it’s in a grid, do it in a table in HTML. 
Sort it by importance
if there’s a repeat, flat it up
categories
dates
CRUD

MVP - MINIMUM VIABLE PRODUCT
All the minimum things you can’t live without. 
All the things you’d love it to have i.e. hit return to add a task, not just click the Add button. 

MoCoW
Must have
Could have
Would have

MAKE A SKETCH WITH PAPER AND PEN - THE SECTIONS - USE COLOURED PENS - TAKE A PHOTO AND PUT IT IN REPO
Tasks should be loops
Task rows should be loops
WRITE THINGS YOU WANT TO BE DYNAMIC
At start - things to do will be 0 and there won’t be any tasks
The state at the start is zero. 
