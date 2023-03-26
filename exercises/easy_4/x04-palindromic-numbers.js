/*
  Created: 03/25/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 4 > Palindromic Numbers


  Instructions:

  Write a function that returns true if its integer argument is palindromic, 
  or false otherwise. A palindromic number reads the same forwards and backwards.
  
  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------

  Input: Number
  Output: return Boolean

  ----------------------------------RULES--------------------------------------

  Explicit:
    - integer

  Implicit: 
    - positive integers based off example

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  Given positive integer, convert to string and check if the number 
  reads the same forwards and backwards
  -----------------------------------EXAMPLES----------------------------------
    123 === 321
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  - define function `isPalindromicNumber` that takes one Number parameter `num`
  - declare `numText` variable initalized to the string version of `num`
  - declare `numTextReverse` variable initialized to the return value of the following:
    - split `numText` into array of individual characters
    - reverse the order of the array
    - join the elements in the array
  - return boolean value of reversing the string and comparing it to `num`
  -------------------------------CODE WITH INTENT------------------------------

  **********************************END PEDAC**********************************
*/

const isPalindromicNumber = (num) => {
  numText = String(num);
  numTextReverse = numText.split("").reverse().join("");
  return numTextReverse === numText;
};

console.log(isPalindromicNumber(34543) === true); // true
console.log(isPalindromicNumber(123210) === false); // false
console.log(isPalindromicNumber(22) === true); // true
console.log(isPalindromicNumber(5) === true); // true
