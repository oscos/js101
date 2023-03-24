/*
  Created: 03/23/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 3 > 


  Instructions:

  A double number is an even-length number whose left-side digits are exactly 
  the same as its right-side digits. For example, 44, 3333, 103103, and 7676 
  are all double numbers, whereas 444, 334433, and 107 are not.

  Write a function that returns the number provided as an argument multiplied
  by two, unless the argument is a double number; otherwise, return the double 
  number as-is.
  
  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------

  Input: Number
  Output: Number

  ----------------------------------RULES--------------------------------------

  Explicit:
    - Given positive Integer

  Implicit: 

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  - Given positive Integer num, if number length is even, split the number in 
    half and if the two sides are the same, return num, else
    multiply num by 2.
  -----------------------------------EXAMPLES----------------------------------
  01230123
  middle point = 4
  0123 = 0123
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  - define a function `twice` that takes one number parameter `num`
  - declare a variable `numText` initialized to the string `num`
  - declare a variable `result` initialized to `num * 2`
  - declare a variable `mid` initialized to the length of `numtext` divided by 2
  - declare a variable `match` initialized to:
    - use `mid` to slice the `numText` in 2 equal parts and compare for equality
    - Note that the `numText` can only be divided into 2 equal parts when
      length is even so there is no need to check for odd length.
  - if `match` evaluates to true then reassign result to `num`
  - return `result`
  -------------------------------CODE WITH INTENT------------------------------

  **********************************END PEDAC**********************************
*/

const twice = (num) => {
  let numText = num.toString();
  let result = num * 2;
  let mid = numText.length / 2;

  // this will only return true when string length is even and both parts match
  let match = numText.slice(0, mid) === numText.slice(mid);

  if (!!match) {
    result = num;
  }

  return result;
};

console.log(twice(37) === 74);
console.log(twice(44) === 44);
console.log(twice(334433) === 668866);
console.log(twice(444) === 888);
console.log(twice(107) === 214);
console.log(twice(103103) === 103103);
console.log(twice(3333) === 3333);
console.log(twice(7676) === 7676);
