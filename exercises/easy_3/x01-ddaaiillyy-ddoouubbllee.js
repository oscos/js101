/*
  Created: 03/22/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 3 > ddaaiillyy ddoouubbllee


  Instructions:

  Write a function that takes a string argument and returns a new string that 
  contains the value of the original string with all consecutive duplicate 
  characters collapsed into a single character
*/

/*
  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------
  Input: String
  Output: return String
  ----------------------------------RULES--------------------------------------

  Explicit:
    - given string, return string.

  Implicit: 
    - from the examples, including alpha-numeric, and empty values
    - if empty value, return empty value
    - if string length is less than 2, return string
  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  - Given string, find consecutive duplicate characters and replace
    with single character.
  -----------------------------------EXAMPLES----------------------------------
  - "aa" => "a"
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  - Define function `crunch` with one String parameter `str`
  - Add gaurd clause:
    - if the string length is less than 2, return string
  - Declare a new variable `result`, initialized to empty string
  - iterate through string
    - if character is first character in string
      - add character to `result`
    - else if the current character in iteration is different than the last 
      character in `result.
      - add character to `result`
  - return `result`
  -------------------------------CODE WITH INTENT------------------------------

  **********************************END PEDAC**********************************
*/

const crunch = (str) => {
  if (str.length < 2) return str;
  let result = "";

  for (let i = 0; i < str.length; i += 1) {
    if (i === 0) {
      result += str[i];
    } else if (str[i] !== result[result.length - 1]) {
      result += str[i];
    }
  }

  return result;
};

console.log(crunch("ddaaiillyy ddoouubbllee") === "daily double"); // "daily double"
console.log(crunch("4444abcabccba") === "4abcabcba"); // "4abcabcba"
console.log(crunch("ggggggggggggggg") === "g"); // "g"
console.log(crunch("a") === "a"); // "a"
console.log(crunch("") === ""); // ""
