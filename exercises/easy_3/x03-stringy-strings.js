/*
  Created: 03/22/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 3 > Stringy Strings


  Instructions:

  Write a function that takes one argument, a positive integer, and returns a 
  string of alternating '1's and '0's, always starting with a '1'. The length 
  of the string should match the given integer.
  
  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------

  Input: Integer
  Output: returns String

  ----------------------------------RULES--------------------------------------

  Explicit:
    - given positive integer
    - return string of 1's, and 0's
    - length of string should match given integer

  Implicit: 

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  Given integer, return a string of 1's and 0's begining with 1. The length of
  the string should match the given integer
  -----------------------------------EXAMPLES----------------------------------
  6 => "101010"
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  - Define function `stringy` with one Number parameter `num`
  - Declare variable `result` initialized to empty string
  - iterate from 1 to `num`:
    - if iterator value is odd:
      - append 1 to the end of `result`
    - else append 0
  - return result
  -------------------------------CODE WITH INTENT------------------------------

  **********************************END PEDAC**********************************
*/

const stringy = (num) => {
  result = "";
  for (let i = 1; i <= num; i += 1) {
    if (i % 2 === 1) {
      result += "1";
    } else {
      result += "0";
    }
  }

  return result;
};

// console.log(stringy(6));
console.log(stringy(6) === "101010");
console.log(stringy(9) === "101010101");
console.log(stringy(4) === "1010");
console.log(stringy(7) === "1010101");
