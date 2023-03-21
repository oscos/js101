/*
  Created: 03/19/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 2 > Squaring an Argument

  Instructions:

  Using the multiply() function from the "Multiplying Two Numbers" problem, 
  write a function that computes the square of its argument (the square is 
  the result of multiplying a number by itself).
*/

const multiply = (num1, num2) => {
  return num1 * num2;
};

const square = (num) => {
  return multiply(num, num);
};

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
