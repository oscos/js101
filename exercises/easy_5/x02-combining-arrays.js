/*
  Created: 03/27/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 5 > Combining Arrays

  Instructions:

  Write a function that takes two arrays as arguments and returns an array 
  containing the union of the values from the two. There should be no duplication 
  of values in the returned array, even if there are duplicates in the original 
  arrays. You may assume that both arguments will always be arrays.
  
  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------

  Input: two arrays
  Output: return one array

  ----------------------------------RULES--------------------------------------

  Explicit:
    - given 2 array arguments
  Implicit: 
  - Since we are not told that the returned array needs to be new, 
    we can append to one of the arrays and itetate through the other.


  EdgeCases: 
    i.e.
    - empty or null or None values
      - No, arrays contain values
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  given two arrays convert to one array
  -----------------------------------EXAMPLES----------------------------------
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  create function `union` that takes two arrays as parameters `arr1` and `arr2`
  - iterate through `arr2`
    - check if current element exists in `arr1` 
    - if false 
      - add current element to `arr1`
  - return `arr1`
  -------------------------------CODE WITH INTENT------------------------------

  **********************************END PEDAC**********************************
*/

const union = (arr1, arr2) => {
  arr2.forEach((item) => {
    if (!arr1.includes(item)) {
      arr1.push(item);
    }
  });
  console.log(arr1);
  return arr1;
};

union([1, 3, 5], [3, 6, 9]); // [1, 3, 5, 6, 9]
union([1, 3, 5], [1, 3, 5]); // [1, 3, 5]
