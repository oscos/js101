/*
  Created: 03/27/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 5 > Find the Duplicate

  Instructions:

  Given an unordered array and the information that exactly one value in the 
  array occurs twice (every other value occurs exactly once), determine which 
  value occurs twice. Write a function that will find and return the duplicate 
  value that is in the array.
  
  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------

  Input: Array
  Output: return Number

  ----------------------------------RULES--------------------------------------

  Explicit:
    - Given array
    - return number that appears twice
    - array is not empty

  Implicit: 

  EdgeCases: 
    i.e.
    - empty or null or None values
      - No
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  Given array, return element that appears twice
  -----------------------------------EXAMPLES----------------------------------
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  - create function `findDup` that takes an Array as parameter `arr`
  - declare a new variable `arr2` initialized to emtpy array
  - declare a new variable `result` initialized to string "No Duplicates Found"
  - iterate through `arr` adding each element to `arr2`
    - if current element is already included
      - reassign `result` to current element
    - else 
      - add current element to `arr2`
  - return `result`
  -------------------------------CODE WITH INTENT------------------------------

  **********************************END PEDAC**********************************
*/
const findDup = (arr) => {
  const arr2 = [];
  let result = "No Duplicates Found";
  arr.forEach((item) => {
    if (arr2.includes(item)) {
      result = item;
    } else {
      arr2.push(item);
    }
  });

  console.log(result);
  return result;
};

findDup([1, 5, 3, 1]); // 1
findDup([
  18, 9, 36, 96, 31, 19, 54, 75, 42, 15, 38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
  14, 61, 90, 81, 8, 63, 95, 99, 30, 65, 78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
  89, 10, 84, 1, 47, 68, 12, 33, 86, 60, 41, 44, 83, 35, 94, 73, 98, 3, 64, 82,
  55, 79, 80, 21, 39, 72, 13, 50, 6, 70, 85, 87, 51, 17, 66, 20, 28, 26, 2, 22,
  40, 23, 71, 62, 73, 32, 43, 24, 4, 56, 7, 34, 57, 74, 45, 11, 88, 67, 5, 58,
]); // 73
