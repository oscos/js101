/*
  Created: 03/25/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 4 > Palindromic Strings (Part 1)

  Instructions:

  Write a function that returns true if the string passed as an argument is a 
  palindrome, or false otherwise. A palindrome reads the same forwards and 
  backwards. For this problem, the case matters and all characters matter.
  
  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------

  Input: String
  Output: returns boolean

  ----------------------------------RULES--------------------------------------

  Explicit:
  - string of chars

  Implicit: 
  - case-sensitive 

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  Given string, return the boolean value of comparing the string in reverse
  order to itself.
  -----------------------------------EXAMPLES----------------------------------
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  - define a function `isPalindrome` that takes a string parameter `str`
  - declare `result` initialized to boolean false
  - declare `strReversed` and initialize to the return value of the following:
    - convert string to array
    - reverse the order of the elements
    - convert back to string
  - if `strReversed` equals `str`
    - reassing result to boolean true

  return result
  -------------------------------CODE WITH INTENT------------------------------

  **********************************END PEDAC**********************************
*/

const isPalindrome = (str) => {
  let result = false;
  let strReversed = str.split("").reverse().join("");
  if (strReversed === str) {
    return true;
  }
  return result;
};

console.log(isPalindrome("madam") === true); // true
console.log(isPalindrome("Madam") === false); // false (case matters)
console.log(isPalindrome("madam i'm adam") === false); // false (all characters matter)
console.log(isPalindrome("356653") === true); // true
