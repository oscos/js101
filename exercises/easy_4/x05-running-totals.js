/*
  Created: 03/25/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 4 > Running Totals


  Instructions:

  Write a function that takes an array of numbers and returns an array with the
  same number of elements, but with each element's value being the running 
  total from the original array.
  
  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------

  Input: Array
  Output: return Array

  ----------------------------------RULES--------------------------------------

  Explicit:
    - single dimension array
  Implicit: 
    - based off examples, array can be 1 and empty values.

  EdgeCases: 
    i.e.
    - empty or null or None values
      - Yes, empty values
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  Given array, iterate through each element and add the previous elements in
  place.  Return array of running totals for each value in array.

  -----------------------------------EXAMPLES----------------------------------
  array = [2, 4, 6] => [2, 6, 12]
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  - define a function `runningTotal` that takes one Array parameter `arr`
  - declare a variable `result` initalized to an empty array
  - declare a variable `sum` initalized to zero 0
  - iterate through `arr` with iterator starting at zero 0:
    if iterator value is zero 0,
      - add current element to the end of `result`
    else
      - add current element to the last element in `result` and 
        reassign return value to `sum`
      - add sum to the end of `result`
        
    return result;
  -------------------------------CODE WITH INTENT------------------------------

  **********************************END PEDAC**********************************
*/

// Solution 1
const runningTotal = (arr) => {
  const result = [];
  let sum = 0;

  arr.forEach((item, index) => {
    if (index === 0) {
      result.push(item);
    } else {
      sum = item + result[result.length - 1];
      result.push(sum);
    }
  });

  return result;
};

console.log(runningTotal([2, 5, 13])); // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20])); // [14, 25, 32, 47, 67]
console.log(runningTotal([3])); // [3]
console.log(runningTotal([])); // []
