/*
  Created: 03/29/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 6 > Counting Up

  Instructions:

  Write a function that takes an integer argument and returns an array containing 
  all integers between 1 and the argument (inclusive), in ascending order.

  You may assume that the argument will always be a positive integer.

  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------
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

const sequence = (num) => {
  result = [];
  for (let i = 1; i <= num; i += 1) {
    result.push(i);
  }
  console.dir(result);
  return result;
};

sequence(5); // [1, 2, 3, 4, 5]
sequence(3); // [1, 2, 3]
sequence(1); // [1]
