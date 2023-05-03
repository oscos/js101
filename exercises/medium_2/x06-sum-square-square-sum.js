/*
  Created: 04/22/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Medium 2 > Sum Square - Square Sum

  Instructions:

  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------

  Write a function that computes the difference between the square of the sum of 
  the first count positive integers and the sum of the squares of the first count 
  positive integers.

  Input: 

  Output: 
  ----------------------------------RULES--------------------------------------
  Explicit:

  Implicit: 

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  -----------------------------------EXAMPLES----------------------------------
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  -------------------------------CODE WITH INTENT------------------------------
  **********************************END PEDAC**********************************



*/

const sumSquare = (arr) => {
  return arr.reduce((acc, n) => acc + n ** 2, 0);
};

const squareSum = (arr) => {
  return arr.reduce((acc, n) => acc + n, 0) ** 2;
};

// solution 1:
const sumSquareDifference = (num) => {
  const arr = [];

  while (num > 0) {
    arr.push(num);
    num -= 1;
  }

  return squareSum(arr) - sumSquare(arr);
};

// Solution 2
const sumSquareDifference = (num) => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#sequence_generator_range
  let arr = Array.from({ length: num }, (_, index) => index + 1);

  return squareSum(arr) - sumSquare(arr);
};

console.dir(sumSquareDifference(3)); // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10)); // 2640
console.log(sumSquareDifference(1)); // 0
console.log(sumSquareDifference(100)); // 25164150
