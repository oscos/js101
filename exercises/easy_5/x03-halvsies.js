/*
  Created: 03/27/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 5 > Halvsies

  Instructions:

  Write a function that takes an array as an argument and returns an array that 
  contains two elements, each of which is an array. Put the first half of the 
  original array elements in the first element of the return value, and put the 
  second half in the second element. If the original array contains an odd number 
  of elements, place the middle element in the first half array.
  
  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------

  Input: Array
  Output: return Array

  ----------------------------------RULES--------------------------------------

  Explicit:
    given array, return 2 arrays

  Implicit: 
    - Array can be empty
    - Array can contain 1 value

  EdgeCases: 
    i.e.
    - empty or null or None values
      - Yes, empty values
    - zero or negative values
      - No

  ---------------------------------MENTAL MODEL--------------------------------
  Given array, split in two.  If array length odd, place middle element in 1st half
  -----------------------------------EXAMPLES----------------------------------
  [1, 2, 3, 4 5]
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  - define function `halvsies` that takes one Array parameter `arr`

  - declare a variable `middle`
  - if `arr` length is even
    - initialize `middle` to arr.length / 2
  - else
    - initialize `middle` to arr.length / 2 + 1

  - declare a variable first initialized to the elements of `arr` from 
    first element upto and excluding `middle`
  - declare a variable second initialized to the elements of `arr` from middle
  - upto and including the last element
  - return an array containing `first` and `last`
  -------------------------------CODE WITH INTENT------------------------------

  **********************************END PEDAC**********************************
*/

const halvsies = (arr) => {
  let middle = arr.length % 2 === 0 ? arr.length / 2 : arr.length / 2 + 1;
  let first = arr.slice(0, middle);
  let second = arr.slice(middle);

  // console.log([first, second]);
  return [first, second];
};

halvsies([1, 2, 3, 4]); // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]); // [[1, 5, 2], [4, 3]]
halvsies([5]); // [[5], []]
halvsies([]); // [[], []]
