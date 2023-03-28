/*
  Created: 03/27/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 5 > 

  Instructions:

  Write a function that takes an array of integers as input, multiplies all of 
  the integers together, divides the result by the number of entries in the 
  array, and returns the result as a string with the value rounded to three 
  decimal places.

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

const multiplicativeAverage = (arr) => {
  let arr2 = arr.reduce((acc, item) => acc * item);

  let avg = (arr2 / arr.length).toFixed(3).toString();
  // console.dir(avg);
  return avg;
};

console.log(multiplicativeAverage([3, 5]) === "7.500"); // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]) === "28361.667"); // "28361.667"
