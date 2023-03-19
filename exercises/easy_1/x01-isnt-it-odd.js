/*
  Created: 03/17/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 1 > Isn't it Odd?

  Instructions:

  Write a function that takes one integer argument, which may be positive, negative, 
  or zero. This method returns true if the number's absolute value is odd. You may 
  assume that the argument is a valid integer value.
*/

const isOdd = (num) => (Math.abs(num) % 2 === 1 ? true : false);

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
