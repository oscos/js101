/*
  Created: 03/27/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 5 > Combine Two Lists

  Instructions:

  Write a function that combines two arrays passed as arguments, and returns 
  a new array that contains all elements from both array arguments, with each 
  element taken in alternation.

  You may assume that both input arrays are non-empty, and that they have the 
  same number of elements.

  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------
  Input: two arrays

  Output: single array
  ----------------------------------RULES--------------------------------------
  Explicit:
    - given 2 arrayy return a single array

  Implicit: 

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  - Given 2 arrays, return 1 array containing elements from each array array.
    The elements should alternate
  -----------------------------------EXAMPLES----------------------------------
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  - define a function `interleave` that takes 2 Array parameters: `arr1`, `arr2`
  - declare variable `result` initialized to empty array
  - iterate through `arr1` with iterator starting at 0
    - use iterator to retrieve element from `arr2`
    - save current element from `arr1`
    - save element from `arr2`
  - return `result`
    
  -------------------------------CODE WITH INTENT------------------------------
  **********************************END PEDAC**********************************
*/

const interleave = (arr1, arr2) => {
  let result = [];
  arr1.forEach((item, index) => {
    result.push(item);
    result.push(arr2[index]);
  });

  console.log(result);
  return result;
};

interleave([1, 2, 3], ["a", "b", "c"]); // [1, "a", 2, "b", 3, "c"]
