JS - DATA TYPES, OPERATORS AND FUNCTIONS

READ THIS IN CONJUNCTION WITH JAMES’ PPT FROM DAY 2 OF IMMERSION WEEK

‘You don’t know JS’ is a good book. 
Here are the links for the digital version of the JS book  (and notice it says "yet" in the title :wink: )
https://github.com/getify/You-Dont-Know-JS 

This is the first book in the series and definitely recommend
[You Don’t Know JS: Up & Going: Amazon.co.uk: Kyle Simpson: 9781491924464: Books](https://www.amazon.co.uk/You-Dont-Know-JS-Going/dp/1491924462)

repl.it - play with code on the screen before bringing it into Studio Visual Code. 

[JavaScript Reserved Words](https://www.w3schools.com/js/js_reserved.asp)

SYNTAX
This is how the language is constructed and arranged. i.e. the semicolons, brackets, white space etc. 
The structure of statements in a computer language. 

JAVASCRIPT SYNTAX

```
function add(a, b) {
	return a+b;
}
```

Function and Return are reserved keywords that tell JS you are about to do something important i.e. return some value. You can’t name your function ‘function’. Here is is named ‘add’. I could call it anything I like, this is up to me, I could call it Susan and the computer won’t mind, but the human reading it would like a clue about what it does. 

The indentation makes the code easier for a human to read. The computer doesn’t care. 

It might be better to call it numberA + numberB instead of a+b - to be clearer for the human reading it. 

In the syntax, think of everything pairing up - two sets of brackets etc. 

Inbetween the curly braces is the function body. 

In JS, most functions will return something but they don’t have to return anything. If it just changes something, it is called a ‘void function’. 

When you declare (a, b) they are called parameters - i.e. while you are writing the software. 
Once you add values to actually use the parameters (7, 3) they are called arguments. Arguments are data from the user, for example. 
There could be more than two parameters - the comma is the key to separating the parameters. 
[Slack](https://techreturners.slack.com/files/U7TQAT492/FQRTR5AEL/screenshot_2019-11-20_at_11.14.32.png)

**P**ARAMETER → **P**LACEHOLDER (This means a placeholder belongs to the function naming and be used in the function body)
**A**RGUMENT → **A**CTUAL VALUE (This means an actual value which is passed by the function calling)

Nowadays, ES6 uses a simpler syntax to do the same job as the code above 

```
add = (a, b) => a + b
```

This is still a function - the fat arrow tells the computer it is a function. 

Not all browsers surpport ES6. Internet Explorer does not for example. If using JS6 for front end, you might need to use a transpiler, which rewrites more modern code as old JS code. You embed the transpiler into your code using React.  JS prior to JS6 is called ‘vanilla’ !!

COMMENTS

These are purely for the human / the team. 
To comment out a whole load of code, highlight everything at press cmd + /
```
// This is a comment. 
/* This is for a 
multi-line comment */
```

DATA TYPES

Number
String (a collection of characters)
Boolean
Null
Undefined
Object

Strongly-typed languages like Java make  you specify whether a variable is a number or a string. Weakly-typed languages like JS let  you not specify until the “string” or number is declared. 

console.log 
doesn’t go public, but is very useful for logging / testing

return
this returns the data from the user that can then be used in some other way

VARIABLES

var
This is old syntax prior to ES6

let / const
These are the new ways of declaring variables in ES6. 

=
This is the assignment operator

CHANGING THE LET VARIABLE

You can’t do this: 
```
let age = 45;
let age = 56;
```
Instead  you have write it like this:
```
let age = 45;
age = 56;
```

EXAMPLE OF A LET VARIABLE

```
let total = 99;

function add(a, b) {
  let total = a + b;
  return total;
}

function subtract(a, b) {
  let total = a - b;
  return total;
}

console.log(add(67, 3));
console.log(subtract(5, 4));
console.log(total);
```

Write your code with all the spaces and comments and function names and then you pass your code to a server to push it live. At this point, you want your website to run as quickly as possible for the user, so you can go through a couple of processes. 
MINIFICATION - this takes out white space
OBFUSCATION - this reduces function names from i.e. firsName to fN. This makes your code harder to understand for others, who might want to ‘borrow’ your code. 
You should test your code again after obfuscation to make sure the user experience hasn’t changed. 

OBJECTS are key value pairs

Might use % to find odd or even - called MODULUS
If it returns NOT then it’s an odd number. 