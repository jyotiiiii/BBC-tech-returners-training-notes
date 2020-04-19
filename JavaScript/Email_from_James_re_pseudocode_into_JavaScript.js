/*

Email from James re pseudocode into JS

Hi Rebecca,

I've shared below the process I went through on Slack and converting pseudocode into the Javascript solution

As part of the fundamentals exercises (and problem solving in general) one of things I've mentioned is doing it in pseudo code first and Rebecca has done this in her exercises and kindly said that I can share her code then how I would go about translating it from pseudo code into Javascript
 
The process below shows that exercise.
 
The function in question is getQuantity and the pseudo code is this:
*/ 
function getQuantity(title) {
  //psuedocode first
  // we want to loop through whole catalogue, starting at the beginning and checking one at a time, until we find the particular title
  for (let i = 0; i < catalogue.length; i++) {
  // then we want to return the quantity of book available of that title
  // we don't then need to check the rest of the array, it's fine to be booted out once we have found the title we wanted
}
};

//So reading this the first thing I would do is mirror the pseudo code to match the indentation of what the real code would be
 
function getQuantity(title) {
  //psuedocode first
  // we want to loop through whole catalogue, starting at the beginning and checking one at a time, until we find the particular title
  for (let i = 0; i < catalogue.length; i++) {
    // then we want to return the quantity of book available of that title
    // we don't then need to check the rest of the array, it's fine to be booted out once we have found the title we wanted
  }
};

/*
So thats exactly the same but with a bit of indentation for readability
 
Reviewing that we can see the following 
- we want to loop through whole catalogue, starting at the beginning and checking one at a time, until we find the particular titleAnd Rebecca has correctly identified that the best way of going through a collection (array) of things is with a loop
 
A for loop looks like a good candidate
which has already been done
 
So next I'm going to look what activities take place each time around the loop
 
And we can see we have
- then we want to return the quantity of book available of that title
- we don't then need to check the rest of the array, it's fine to be booted out once we have found the title we wanted
The first thing it says is the quantity of the book so lets firstly grab the book
*/
function getQuantity(title) {
  //psuedocode first
  // we want to loop through whole catalogue, starting at the beginning and checking one at a time, until we find the particular title
  for (let i = 0; i < catalogue.length; i++) {
    const book = catalogue[i];
    // then we want to return the quantity of book available of that title
    // we don't then need to check the rest of the array, it's fine to be booted out once we have found the title we wanted
  }
};

/*
Now we don't want to return the quantity of just any book, we want the specific book that matches, or as the pseudo code says - "of that title"When we're thinking of "checking" something or thinking of doing something IF something matches then we should think of conditions, conditions ALWAYS evaluate to true or false
*/

// So we probably want to do an IF
function getQuantity(title) {
  //psuedocode first
  // we want to loop through whole catalogue, starting at the beginning and checking one at a time, until we find the particular title

 for (let i = 0; i < catalogue.length; i++) {
    const book = catalogue[i]; 
   
// then we want to return the quantity of book available of that title
    
if( book.title === title ) {
    } 
      }
};
   
/*
we don't then need to check the rest of the array, it's fine to be booted out once we have found the title we wanted

Then the final statement says
// we don't then need to check the rest of the array, it's fine to be booted out once we have found the title we wanted
So if we DO match (true) then we can jump out of the loop and thats fine whats we've found the title we wanted
 
to be "booted" out of a loop we can use return which not only boots us out of the loop but also exits the function and returns the value
 
So our function changes to this
*/
function getQuantity(title) {
  //psuedocode first
  // we want to loop through whole catalogue, starting at the beginning and checking one at a time, until we find the particular title

for (let i = 0; i < catalogue.length; i++) {
    const book = catalogue[i];    

// then we want to return the quantity of book available of that title
    if( book.title === title ) {
      // we don't then need to check the rest of the array, it's fine to be booted out once we have found the title we wanted

 return book.quantity;
    }
  }
};

/*
And that's it done
We might commit there and then maybe at a later date strip it back to remove the comments an optimise any areas we don't need variables for
 
So it becomes
 
*/
function getQuantity(title) {
  for (let i = 0; i < catalogue.length; i++) {
    if( catalogue[i].title === title ) {
      return catalogue[i].quantity;
    }
  }
}

/*
Let me know any questions on the above and hope that helps.
James