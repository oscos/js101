/*
  Created: 03/27/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 5 > Multiply Lists

  Instructions:

  Write a function that takes two array arguments, each containing a list of 
  numbers, and returns a new array that contains the product of each pair of 
  numbers from the arguments that have the same index. You may assume that the 
  arguments contain the same number of elements.

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

const multiplyList = (arr1, arr2) => {
  let arr3 = arr1.map((item, index) => item * arr2[index]);

  console.log(arr3);
  return arr3;
};

multiplyList([3, 5, 7], [9, 10, 11]); // [27, 50, 77]
