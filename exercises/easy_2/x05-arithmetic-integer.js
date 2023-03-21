/*
  Created: 03/19/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 2 > Arithmetic Integer

  Instructions:

  Write a program that prompts the user for two positive integers, and then 
  prints the results of the following operations on those two numbers: 
  addition, subtraction, product, quotient, remainder, and power. Do not 
  worry about validating the input.

  Example:

  ==> Enter the first number:
  23
  ==> Enter the second number:
  17
  ==> 23 + 17 = 40
  ==> 23 - 17 = 6
  ==> 23 * 17 = 391
  ==> 23 / 17 = 1
  ==> 23 % 17 = 6
  ==> 23 ** 17 = 1.4105003956066297e+23
*/

const arithmetic = (num1, num2) => {
  console.log(`num1 + num2 = ${num1 + num2}`);
  console.log(`num1 - num2 = ${num1 - num2}`);
  console.log(`num1 * num2 = ${num1 * num2}`);
  console.log(`num1 / num2 = ${num1 / num2}`);
  console.log(`num1 % num2 = ${num1 % num2}`);
  console.log(`num1 ** num2 = ${num1 ** num2}`);
};

console.log("Enter the first number:");
console.log("Enter the second number:");

arithmetic(23, 17);
