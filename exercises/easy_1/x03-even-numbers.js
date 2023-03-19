/*
  Created: 03/17/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 1 > Even Numbers

  Instructions:

  Log all even numbers from 1 to 99, inclusive, to the console, 
  with each number on a separate line.
*/

// Solution 1:
const evenNum = () => {
  for (let i = 0; i < 100; i += 1) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

// Solution 2:
const evenNum = () => {
  for (let i = 0; i < 101; i += 2) {
    console.log(i);
  }
};

evenNum();
