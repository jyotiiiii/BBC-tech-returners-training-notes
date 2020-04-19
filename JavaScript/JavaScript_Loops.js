JS LOOPS

SEE JAMES’ PPT FROM DAY THREE OF IMMERSION WEEK

Loops are handy if you want to run through the same code over and over again, with a different value each time
You loop through things
Or you find out how many are in the loop

JavaScript supports different kinds of loops:
for - loops through a block of code a number of times
for/in - loops through the properties of an object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true

FOR LOOP

```
for (i = 0; i < 5; i++) {
    console.log(“The number is “ + i);
}
```
i is the variable name. 
i means index or iterator
The first instruction is where we are asking the computer to start from. In this case, we are asking it to start from index position 0. 
Separated by a colon, the second instruction tells the computer when to stop looping. So in this case, stop at less than 5. 
The third instruction tells the computer how often in the loop to check. i++ is the increment operator. It means i=i+1 and so it means loop through every item. 
The ending index is always the length of the index minus 1. i.e. the item count might be. But the first item occupies index position 0 and therefore the 8th item occupied index position 7. So the length of the loop is <8. 
Item count is 8. The starting index is 0, the ending index is 7. 
To pull out index 3 would be the 4th item in the loop. 
You can also write it  like this <catalogue.length

NB Strings are like Arrays
```
let myString = “Susan”
myString [1] = u
```
because “u” is in position 1 in the index.

ANOTHER FOR LOOP
```
const someVar = [“ABC”, “DEF”, “GHI”];

for(let i = 0; i < someVar.length; i++) {
  console.log(“i = “ + i);
  console.log(someVar[i]);
}

console.log(“END”);
```
This means:
when the index is 0, output ABC
When the index is 1, output DEF
When the index is 2, output GHI

== checks something is the same
=== checks something is the same and the same data type

If you do a return that’s successful, it will kick you out of the loop. So when it finds DEF, it stops. If there’s another ‘DEF’ later on, it won’t find the later one. 


WITHOUT RETURN
```
const someVar = [“ABC”, “DEF”, “GHI”, “DEF”];

function findSomething(lettersToFind) {

  for(let i = 0; i < someVar.length; i++) {
    const letters = someVar[i];

    console.log(letters);

    if(letters === lettersToFind) {
      console.log(“Found DEF”);
    }
  }
}

console.log(findSomething(“DEF”));
```


WITH RETURN
```
const someVar = [“ABC”, “DEF”, “GHI”, “DEF”];

function findSomething(lettersToFind) {

  for(let i = 0; i < someVar.length; i++) {
    const letters = someVar[i];

    console.log(letters);

    if(letters === lettersToFind) {
      return “Found DEF”;
    }
  }
}

console.log(findSomething(“DEF”));
```


FOR EACH 
forEach() — executes a provided function once for each array element.
forEach will check everything despite a return. In this case, a return doesn’t boot us out of the loop. 
```
let results = [60, 71, 25];

results.forEach(function(result) {
    console.log(“You scored “ + result);
});
```


MAP
map() — creates a new array with the results of calling a provided function on every element in the calling array.
i.e. this will visit each item and also allow you to manipulate the data. It returns a new array.  i.e. the code below outputs 
[65, 76, 30] 
in a new array
```
let results = [60, 71, 25];

let updatedResults = results.map(function(result) {
    return result + 5;
});

console.log(updatedResults);
```

FILTER
The filter() method creates a new array with all elements that pass the test implemented by the provided function.
This is really useful. If you have numbers in an array and want to find particular things. 
FILTER chooses what you want to keep. So if you think of it as a shopping basket full of data, each time the loop goes round, if it finds something that doesn’t match your criteria it throws it out of your basket until by the end, you only have the things you wanted left in your basket. 
It’s boolean i.e. if 60 is greater than 40, it keeps 60. 
```
let results = [60, 71, 25];

let peopleThatPassed = results.filter(function(result) {
    return result > 40;
});

console.log(peopleThatPassed);
```

SCOPE
This is global scope - invisible to all numbers below it. 
```
const someNumber = 72;
function printSomeNumber() {
	console.log(someNumber);
}
printSomeNumber(87);
```
//Prints 72


forEach
~https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach~
Map
~https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map~
Filter
~https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter~


At the end of a loop, you can’t put the return statement within the loop

i++ - what do you want to happen every time I go around the loop. I want you to go onto the next one. 
i+2 would mean to look at every second one i.e. 2, 4, 6

THIS IS THE ‘UNTIL’ BIT
i < myArray.length is always a boolean. As soon as this says false, it will stop looping around and boot you out of the loop. 
If instead of  …
i < my array.length 
you have  …
i = true
… your loop will carry on forever … 

```
let book = myArray[i];
```
means the following: 
The loop starts and i is at index position 0, then loops to index position 1, then loops to index position 2. And in each loop, your variable is reassigned to the new index position. 
And the equals means ‘grab’ whatever is in index position 0 and assign it to the variable ‘book’. And then loop around and ‘grab’ what is in index position 1 and assign it to the variable ‘book’. 


LOOPS 
Do I need to check all the way through the array? i.e. how many books in this array  are by this author? You want the computer to check all the way through the whole array to be sure they have collected all the books by that author. 
If so, my return (return count;) needs to be outside the loop, so the computer goes all the way through the loop before stopping. 
When you want to loop through everything in an array ForEach is a good code to use. 

Or do I need to just check until I’ve found what I’m looking for before I want to get out of the loop?


JAMES GOING OVER LOOPS AGAIN

function bounceBall() {
 console.log(‘Bounce’);
}
for (let i = 0; i <5

Looping is a way of getting your code to do the same repeatable task more than once. 

The best way to check things from beginning to end is using a loop. 

The return statement is a way of stopping the computer going any further - we can optimise for the computer. If the question is, “is there a blue pen?, we can let it kick us out as soon as it finds a blue pen. 
If we need to know how many blue pens there are, we need to check the whole loop. 
