/*
  Created: 04/01/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 7 > Multiply All Pairs

  Instructions:

  Write a function that takes two array arguments, each containing a list of 
  numbers, and returns a new array containing the products of all combinations 
  of number pairs that exist between the two arrays. The returned array should 
  be sorted in ascending numerical order.

  You may assume that neither argument will be an empty array.

  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------
  Input: 2 Arrays 

  Output: 1 Array
  ----------------------------------RULES--------------------------------------
  Explicit:
  - Given 2 arrays, return 1
  - The single array contains the product of the numbers in the 2 array arguments
    passed in
  - Non-empty arrays

  Implicit: 

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  Given 2 arrays multiply the elements in 1st array times the elements in 2nd array.
  -----------------------------------EXAMPLES----------------------------------
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  -------------------------------CODE WITH INTENT------------------------------
  **********************************END PEDAC**********************************
*/

// Solution 1:
const multiplyAllPairs = (arr1, arr2) => {
  const productArr = [];
  arr2.forEach((item) => {
    productArr.push(item * arr1[0]);
    productArr.push(item * arr1[1]);
  });

  const result = productArr.sort((a, b) => a - b);

  // console.dir(result);
  return result;
};

// Solution 2: using 2 iterations, makes it so that I don't have to worry about
// array size or iteration order.
const multiplyAllPairs = (arr1, arr2) => {
  const result = arr1
    .map((v1, k1) => {
      return arr2.map((v2, k2) => {
        return v1 * v2;
      });
    })
    .flat()
    .sort((a, b) => a - b); // regular sort treats numbers as strings, so need to account for data type

  console.log(result);
  return result;
};

multiplyAllPairs([2, 4], [4, 3, 1, 2]); // [2, 4, 4, 6, 8, 8, 12, 16]
