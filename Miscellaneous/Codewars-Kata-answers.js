/*

Codewars Kata answers

## Kata 1

Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:
time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5


### Starting code: 
function litres(time) {
  return 0;
}

### My psuedocode / code:
// multiply litres x 0.5, then use floor method to round down to nearest whole integer

### Correct answer:
function litres(time) {
  return Math.floor(time * 0.5);
}


## Kata 2

Very simple, given a number, find its opposite.

Examples:

1: -1
14: -14
-34: 34


### Starting code: 
function opposite(number) {
  //your code here
}

### My psuedocode / code:
// is there a method for switching positive and negative? 

### Correct answer:
