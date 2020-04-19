TERMINAL / THE COMMAND LINE

THE COMMAND LINE
We’ll use the command line for much of what we do
Windows / Linus / Mac - employ the same commands. 
We need this because we may be working with servers that don’t have a screen, so you need to be able to interact with them through the command line. Instead of a mouse and screen, we are using iTerm. 
We’re going to be doing tasks we do anyway, like open applications, moving files, but instead of through Finder, we’ll use the iTerm. 
We’ll be using the Unix command line
It’s case sensitive. Some mac ones are not. but get used to being case sensitive as it’s safer. 
Don’t put spaces in your filenames and folders. Instead use underscores. 
A folder / directory is the same thing. 

iTerm doesn’t ask you if you are sure you want to do something i.e. delete things, it just does it if you ask it to. 

You can type the first couple of characters of a directory name i.e. St and then tab and iTerm will autocomplete the name Stepintotech it thinks you want to use. This is good to do, so you save time, but also so you are sure you have the name right. If there is more than one folder beginning with St then iTerm will show all the options you have within that folder. 

You can see your Bash history by using arrow keys to go up and down through the history of the commands you have done. 

iTerm is relative so while we’re in a certain folder, we can assume that is where the command line will operate. It’s not necessary to type in the full filename i.e. users/rebeccaandrew …. and so on. That would be absolute. We can do this if we want. 

PACKAGE MANAGERS
npm - node package manager. 
It’s a way of getting software onto your computer. You just run a command and the npm grabs the package from the relevant host and loads it onto your computer. It will work with anything that is open source i.e. doesn’t include licensed software like Adobe or Microsoft etc. 
Mac - Homebrew
Linux - (Aptitude, Yum)
Windows - Chocolatey

SOME COMMANDS (the spaces I have put within each command are important and hit enter after the final character)

pwd
Print Working Directory - tells you what directory you are in

code .
Opens the contents of the current directory in Studio Visual Code
(you can also open SVC, then go into Finder and drag the folder over and drop it onto SVC)

ls  
(lowercase LS) show files and folders - means list.

man ls   
gives you the manual for the ls command

ls -alh   
this lists it all - a means all, l means list, h means in human readable form!!

q   
quits out of what you are doing

clear   
clears your screen and takes you back up to the top

cd some_directory   
change directory

the UP arrow key and then return
repeats the most recent command 
can do this twice i.e. hitting the UP arrow twice gives you your second to last command

pwd   
print working directory.
Show current directory - tells you what folder you are in

mkdir stepintotech_course  
mkdir means make directory. stepintotech_course is the name of the new folder and when you hit return, it makes a new folder in the directory you are already in.

mv  notes.txt countries.txt    
would change the name of the file from notes to countries. If you then do ls and enter, you’ll see countries.txt in your directory, but won’t any longer see notes.txt

rm countries.txt 
removes a file i.e. deletes it
If you delete things they don’t go into Trash. It’s gone forever, that’s why we need version control. 

rm -rf stepintotech_course
This will delete your stepintotech_course folder, if you type this command while you are in the folder in which the stepintotech_course folder resides. 
rm means remove, rf means remove force. This will delete a folder and all its contents

-rm * 
will delete everything on a whole computer if you put in this command while you are in your home drive

cp countries countries2.txt
this will create a copy of the countries text file and name it countries2.txt

cp somefile.js /some/new/location/.
This will copy a file into a new location

mv somefile.js /some/new/location/.    Moves a file somewhere 

cat somefile.js   Output a file to screen
touch notes.txt   Create a text file called notes.txt in the folder that you are in. If you don’t do the .txt extension, it autocreates a ‘Terminal’ kind of text file. If you create notes.doc, that will be a word document. The extension is there to tell the computer which programme to open that file with. 

echo “Hello world”   
Print texts, in this case, Hello world, to the console - std out - means standard out. 

echo “Hello world” > notes.txt   
This puts text into a particular file. It doesn’t append it, it overwrites all the existing content in that file. Called Redirect standard output to a file

echo “Another greeting” >> notes.txt 
This adds text to the bottom of a file i.e. append standard output to a file i.e. 
echo “France” >> countries2.txt
adds France under Spain in countries2.txt
NB, within the speech marks you can use characters like ?! as well 
Maybe good to get into the habit of using >> instead of > so as a matter of habit, you append files rather than replace all their content. 

Within iTerm, you can use Ctrl + C to go back to the control line - 

cat countries2.txt
cat means catenate. This will show the contents of a file names countries2.txt. 

cat countries2.txt >> countries.txt
This will put all the contents of the countries2.txt file and put it at the bottom of all the content of countries.txt i.e. append not replace

PIPING
This is a key part of the Unix command line

cat countries.txt | wc -l
The piping key is above the backward slash on mac keyboard. It ‘pipes’ or ‘feeds’ into the next command. The command above will give the word count and line count of the countries.txt file.  If you don’t include -l at the end, you get the number of lines, words and bytes

cat notes.txt | grep “world”  
Pipe output from one command as the input to another command

cd ~
This is the tilda character. It will take you back to your home directory, which for us is rebeccaandrew

history
this will show you your last 500 commands. Might want to use clear after this! 

cd ..
This goes back up one directory

npm install    
save react-redux - Node Install a Package

npm start   
Node start app

Ctrl+R  
in the terminal lets you search for anything that you've previously typed


TASKS TO PRACTICE
1 Create a new file called countries.txt

2 Without leaving the command line, spend a couple of minutes adding countries each person in the pair has visited to a new line of the file
echo -e “Romania\nIreland\nBulgaria” >> countries.txt

3 How many lines in the file all together?

4 How many words in the file all together?

5 How many bytes is the file?
All these above can be answered by cat countries.txt | wc

6 What is the command for sorting lines in a file?
sort

7 Sort the file so that the countries appear on the terminal in alphabetical order (a-z)
sort countries.txt

8 Create a new file containing the countries, sorted alphabetically (do not leave the console, or use copy and paste!)
sort countries.txt > countries.sorted.txt

REFERENCES
Windows Package Manager - Chocolatey
~https://chocolatey.org/~
HomeBrew
~https://brew.sh/~
Unix command cheat sheet
~http://cheatsheetworld.com/programming/unix-linux-cheat-sheet/~


**Tasks for when you can’t wait to do more command line**

1. Create a new directory
2. Create two files in this directory
3. In one file, create a list of your favourite drinks
4. In the second file, create a list of your pair’s favourite drinks. Make sure there is some overlap!
5. Using the command line, create another file which contains both lists all together
6. Sort the file, and save it back into a file of the same name
7. Find a command which will count how many times the same line appears in the file. You want to see how many times the same drink appears in the list.
8. Create a new file called most_popular.txt which contains a list of the drinks sorted by popularity.