/*
  Created: 03/27/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 5 > List of Digits

  Instructions:

  Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

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

const digitList = (num) => {
  return num
    .toString()
    .split("")
    .map((item) => parseInt(item));
};

console.log(digitList(12345)); // [1, 2, 3, 4, 5]
console.log(digitList(7)); // [7]
console.log(digitList(375290)); // [3, 7, 5, 2, 9, 0]
console.log(digitList(444)); // [4, 4, 4]
