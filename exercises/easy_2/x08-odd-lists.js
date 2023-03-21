/*
  Created: 03/19/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 2 > Odd Lists

  Instructions:

  Write a function that returns an Array that contains every other element of an 
  Array that is passed in as an argument. The values in the returned list should 
  be those values that are in the 1st, 3rd, 5th, and so on elements of the
  argument Array.

*/

/*
  *****************************START PEDAC*****************************
  ---------------------------PROBLEM-----------------------------------

  Input: Array
  Output: return Array

  ---------------------------RULES--------------------------------------
  Explicit: 

  Implicit: 

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  --------------------------MENTAL MODEL---------------------------------
  Given an array, return new array of elments whose index is even
  --------------------------EXAMPLES-------------------------------------
  --------------------------DATA STRUCTURES------------------------------
  --------------------------ALGORITHM------------------------------------
  - define a function `oddities` that takes 1 array parameter `arr`
  - declare new array `result` initialize to empty array
  - iterate through `arr` with iterator value starting at 0
    the iterator counter by 2 on each iteration.
    - append `arr` element to end of `result`
    - increase iterator counter by 2 on each iteration
  - return `result`
  --------------------------CODE WITH INTENT-----------------------------

  *****************************END PEDAC*********************************
*/

const oddities = (arr) => {
  let result = [];

  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }

  return result;
};

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
