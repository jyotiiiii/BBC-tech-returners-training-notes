GITHUB - forking and cloning

[GitHub glossary - GitHub Help](https://help.github.com/en/github/getting-started-with-github/github-glossary)

FORKING 
Make sure you are logged into GitHub and then go onto the GitHub account of the person you want to Fork from. Go the the folder you want to Fork and click Fork. This takes the files from another person’s GitHub and forks them into your GitHub account. This makes a copy at that moment. If they subsequently update the code you have already Forked, you’ll need to Fork it again. Your copy won’t automatically update.  [If you make changes to the code and want them to take them into their original code, you can contact them and offer your changes, then they can merge then with their code if they want to. 


CLONING - this brings the Forked files down onto your own machine. 

Click the green Clone/Download button on your GitHub account. Copy the HTTPS address. 

Open Terminal on your computer. 

Change the current working directory to the location where you want the cloned directory to be made.

Type git clone, and then paste the URL you copied from github online i.e.

$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY

When you have done this, you navigate to the correct folder in iTerm. When you are sure you are there, if you type
code .
and then return, this will open all the contents of the folder you forked, into Visual Studio Code. 

NPM

Every time you bring down a new repository from GitHub you need to run npm (new package manager) again. 

Go to correct folder in Terminal and then put in this command
npm install
and hit return. 
This goes to npmjs.com and pulls down all the code that is dependent on other people’s code. 
Once you’ve done this, you can do 
ls 
and hit return in iTerm. You can see the package there. Then do
npm test 
and hit return to check it. 

NPMJS.COM
You can go to npmjs.com and look at Jest for example to se if you want to use it. 
Look to see who is the licensee. Is it someone reputable? MIT or Apache V3 are reputable. They have open source software that you can use for commercial websites. 
Look at how many times the code has been downloaded. If half a million other people are using it, it’s probably pretty okay! Check when it was last published, as if it hasn’t been updated for a year, it might not be so good. 

