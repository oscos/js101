/*
  Created: 03/27/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 5 > Double Char (Part 1)

  Instructions:

  Write a function that takes a string, doubles every character in the string, 
  and returns the result as a new string.

  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------
  Input: string

  Output: String
  ----------------------------------RULES--------------------------------------
  Explicit:
    - Given string, repeat each character

  Implicit: 

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  given string repeat each character.  If empty string, return empty string
  -----------------------------------EXAMPLES----------------------------------
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  - define function `repeater` that takes one string parameter `str`
  - declare variable `result` iniitialized to empty string
  - iterate through string
    - repeat each character and save return value to `result`
  -------------------------------CODE WITH INTENT------------------------------
  **********************************END PEDAC**********************************
*/

const repeater = (str) => {
  let arr = str.split("");
  let arr2 = arr.map((item) => item + item);
  let result = arr2.join("");
  //console.dir(result);
  return result;
};

repeater("Hello"); // "HHeelllloo"
repeater("Good job!"); // "GGoooodd  jjoobb!!"
repeater(""); // ""
