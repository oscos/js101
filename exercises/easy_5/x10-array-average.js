/*
  Created: 03/27/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 5 > Array Average

  Instructions:

  Write a function that takes one argument, an array of integers, and returns 
  the average of all the integers in the array, rounded down to the integer 
  component of the average. The array will never be empty, and the numbers will 
  always be positive integers.

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

const average = (arr) => {
  let arr2 = arr.reduce((acc, item) => acc + item);
  let avg = Math.floor(arr2 / arr.length);
  //console.log(avg);
  return avg;
};

average([1, 5, 87, 45, 8, 8]); // 25
average([9, 47, 23, 95, 16, 52]); // 40
