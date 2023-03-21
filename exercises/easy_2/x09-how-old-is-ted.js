/*
  Created: 03/19/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 2 > How Old is Teddy?

  Instructions:

  Build a program that randomly generates Teddy's age, and logs it to the console. 
  Have the age be a random number between 20 and 120 (inclusive).

*/

const randomAge = (min, max) => {
  let age = Math.floor(Math.random() * (max - min + 1) + min);
  return age;
};

console.log(randomAge(22, 120));
