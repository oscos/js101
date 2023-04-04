/*
  Created: 04/02/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 7 > Sum of Sums


  Instructions:

  Write a function that takes an array of numbers and returns the sum of the 
  sums of each leading subsequence in that array. Examine the examples to see 
  what we mean. You may assume that the array always contains at least one number.

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

// Solution 1:
const sumOfSums = (arr) => {
  const runningSum = [];
  let sum = 0;

  arr.forEach((item) => runningSum.push((sum += item)));
  const result = runningSum.reduce((acc, item) => acc + item);

  console.log(result);
  return result;
};

// Solution 2:
const sumOfSums = (arr) => {
  let sum = 0;
  const result = arr
    .map((item) => (sum += item))
    .reduce((acc, item) => acc + item);

  console.log(result);
  return result;
};

sumOfSums([3, 5, 2]); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]); // 4
sumOfSums([1, 2, 3, 4, 5]); // 35
