/*
  Created: 03/31/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 7 > Sum Of Digits

  Instructions:

  Write a function that takes one argument, a positive integer, and returns the 
  sum of its digits. Do this without using for, while, or do...while loops - instead,
  -use a series of method calls to perform the sum.


  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------
  Input: Integer

  Output: Integer
  ----------------------------------RULES--------------------------------------
  Explicit:
    - Given positive integer
    - 

  Implicit: 

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  - Given number, return the sum of the individual digits that make up that number
  - do not use loops, instead use built in methods from class
  -----------------------------------EXAMPLES----------------------------------
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  -------------------------------CODE WITH INTENT------------------------------
  **********************************END PEDAC**********************************
*/

const sum = (num) => {
  let result = num
    .toString()
    .split("")
    .reduce((acc, n) => parseInt(acc) + parseInt(n), 0);

  // console.dir(result);
  return result;
};

sum(23); // 5
sum(496); // 19
sum(123456789); // 45
