// ANSWERS FOR HOMEWORK

const catalogue = [
  { title: “The Catcher in the Rye”, author: “J.D. Salinger”},
  { title: “Dracula”, author: “Bram Stoker” },
  { title: “Between the Assassinations”, author: “Aravind Adiga” }
];

for(let i =0; i < catalogue.length; i++ ) {
  const book = catalogue[i];

  console.log(book.title + “ written by “ + book.author);
}

// let bookToChange = catalogue[1];
// bookToChange.author = “Roald Dahl”;

catalogue[1].author = “JK Rowling”;

for(let i =0; i < catalogue.length; i++ ) {
  const book = catalogue[i];

  console.log(book.title + “ written by “ + book.author);
}





function checkBook(book) {
  // I need to look at each book in the catalogue
  let matches = catalogue.filter(function(item) {
    return book === item;
  });

  return matches.length >= 1;

}



function checkBook(book) {
  // I need to look at each book in the catalogue
  for(let i=0; i < catalogue.length; i++) {
    let bookToCheck = catalogue[i];
    console.log(bookToCheck);

    // whilst checking each book I need to see if the book and author
    // match the one that is passed into the function
    // if it does I can return true (without checking the rest)
    // otherwise I need to continue checking

    if( bookToCheck === book ) {
      return true;
    }
  }

  return false;

}


// Fundamentals 002

function checkBook(book) {
for (let i = 0; i<catalogue.length; i++){
	let bookToCheck = catalogue [i];
	if(bookToCheck === book) {
		return true;
}
}
return false;
}


// this above means
let i = 0  // start at index point 0
i<catalogue.length // index is less than the length of the catalogue because array indexes start at 0 not at 1. 
i++ //means check them one at a time


let bookToCheck = catalogue [i]
// This says check through the array called catalogue and check for the index number in order. So the first time it loops, check index point 0,  which is Salinger. The second time it loops, check index point 1, which is Stoker. And then it’s more clear, if you get bookToCheck (the one they are checking in the array) equal to book(from data test document) then …