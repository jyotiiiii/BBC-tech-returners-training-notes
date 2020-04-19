JavaScript OOP: OBJECT ORIENTED PROGRAMMING

SUMMARY

OOP is the bringing together of an object, its encapsulated data, its embedded objects and their data  (if there are any) and its processes 
i.e. a car object (with data like colour, engine size), with its embedded objects like the wheel objects (that have data like alloys, size), with its processes (like starting the car, changing gear). 

OBJECTS

You sometimes see Object Oriented and people then do Object Oriented Design
The object might be a person or a book and that has certain properties. 
JavaScript wasn’t originally object orientated, but it is more so now. Java and C++ are naturally object oriented. 

An object contains encapsulated data and procedures grouped together to represent an entity. The ‘object interface’ defines how the object can be interacted with. 
An object-oriented program is described by the interaction of these objects. 
Object-oriented design is the discipline of defining the objects and their interactions to solve a problem that was identified and documented during object-oriented analysis.

ENCAPSULATED DATA

Thinking about our code representing real world objects. For example, Amazon writes code modelling books. Books have certain properties: title, author, isbn, no of pages, date, and there are certain things I can do such as buy it, check stock etc. 
If we think of an object, a car is an object, and that might have its own properties, but it also has other objects associated with it. Such as wheel object, a seat object, a radio object. And they are contained within the car. They exist independently, but the car is the container that pulls them all together. 
Encapsulated data is the properties of the object. Cars have a number of doors, an engine size, a colour. We are used to categorising data like that, in the real world. 
A wheel object might have a boolean for ‘does it or does it not’ have alloys, tyre size etc. ?

And PROCEDURES …

I might provide a function that allows you to start the car. You don’t care about the process of the car starting, but the people who get the car to start do care about that code. 
- If you’re writing the code to start the car but you don’t care about what happens  under the hood - that is ABSTRACTION. 
-
And STATE …

They manipulate the state of the object. When we get in the car, the state of Engine Started will be false. And then when the engine starts, the state of Engine Started will be true. 

AND IN CODE … 

And in code, this is a JSON object … 
```
let myCar = {
	engineSize: 1100,
	colour: “black”,
	engineStarted: false,
	wheels: {
		alloy: true,
		size: 18
}
}
function startCar(carToStart) {
	carToStart.engineStarted = true;
}
```

engine size is  ‘key’
1100 is ‘value’
Together they are the ‘key value pair’
As a group the engine size and colour etc are the Properties of the Object. 

The alloy and size are the properties of the Wheels object that are within the car object

The variable is called myCar and the object starts with the curly brackets. 

People will call these the ‘properties ‘ of the car. 

Keys don’t need to be wrapped in strings, but they used to be in older versions. 

ARRAYS

JavaScript arrays are used to store multiple values in a single variable.
You can use ‘loops’ to visit each item in an array
Commonly used to contain a collection of objects

The computer knows it’s an Array because of the square brackets. It can be called anything you like. 
It’s a way of bringing data together in a form that can be analysed. Separate items in array with commas. For example, a book catalogue … 

```
const catalogue = [
	“Dracula by Bram Stoker”,  “Harry Potter by J K Rowling”
];
function countBooks() {
	return catalogue.length;
}
```


```
const myArray = [3, 6, 9, 6];

function checkNumbers() {
  let count = 0;
  for(let i =0; i < myArray.length; i++) {
    console.log(“Checking: “ + myArray[i])
    if(myArray[i] === 6 ) {
      count++
    }
  }
  return count;
}
checkNumbers()
```

Think of Arrays (term is common to all to all languages). The purpose of them is to collect multiple values to a single variable or array name. Some languages call them ‘collections’.  It’s a bag of stuff. 
(In Java, a set is a collection that doesn’t have duplicates. A List is an ordered collection. )
We’ve had collections of strings, numbers, objects. 
If I was a car dealership, I could have a list of car objects. 

```
let someNames = [“Thomas”, “Gordon”, “Henry”, “Ashima”, “Rosie”];
let someNumbers = [1, 4, 3, 38, 37];
```

An ARRAY OF OBJECTS can be

```
let someEngines = [ { name: “Thomas”, number: 1 },
   		{ name: “Rosie”, number: 37 },
   		{ name: “Gordon”, number: 4 }];
```

LOOPING THROUGH ARRAYS

```
let someEngines = [ { name: “Thomas”, number: 1 },
   		{ name: “Rosie”, number: 37 },
   		{ name: “Gordon”, number: 4 }];


for(let engine of someEngines) {
	console.log(engine.name);
}
```

OTHER FUNCTIONS OF ARRAYS

```
let someEngines = [ { name: “Thomas”, number: 1 },
   		{ name: “Rosie”, number: 37 },
   		{ name: “Gordon”, number: 4 }];


let numberOfEngines = someEngines.length; // will return 3

let thomas = someEngines[0]; // indexed from zero
let rosie = someEngines[1];
```

When you want to access the properties of an object you can use . 
i.e. dot notation. Or you can use square bracket notation.

IF YOU TAKE THIS ARRAY

```
const catalogue = [
  “The Catcher in the Rye by J.D. Salinger”,
  “Dracula by Bram Stoker”,
  “Between the Assassinations by Aravind Adiga”,
];
```

TO REWRITE AS AN OBJECT

```
let draculaBook = {
	title: “Dracula”,
	author: “Bram Stoker”
};

console.log(draculaBook.title);
// output Dracula
```

Or can have 
```
const catalogue = [
	{ title: “Dracula”,  author: “Bram Stoker”},
];
```
 
If you need to take all the list of book catalogues and make them objects. You can do that by code, or you can do it manually. 

```
for(let i = 0, i < catalogue.length, i++) {
const book = catalogue[i];
console.log(book.author)’;
```
This gives me the value of the author key
// outputs list of authors
console.log(book.title + “written by” + book[“author”]);
/// above you can see that you can use dot operator or square brackets. but you wouldn’t normally mix them like this. You’d use just dot  notation. 

To change something you could do 

```
let bookToChange = catalogue [1];
bookToChange.author = “Roald Dahl”’
```


```
for(let i = 0, i < catalogue.length, i++) {
const book = catalogue[i]; 

console.log)book.title + “Written by” book.author);
```
// output  Bram Stoker now reads Roald Dahl. 

```
catalogue[1].author = “JK Rowling”;
```
//this is another way of changing Bram Stoker to JK Rowling

REFERENCES
Javascript objects
~https://www.w3schools.com/js/js_objects.asp~
Javascript arrays
~https://www.w3schools.com/js/js_arrays.asp~





