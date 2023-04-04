/*
  Created: 04/04/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > String and Text Processing > Uppercase Check

  Instructions:

  Write a function that takes a string argument and returns true if all of the 
  alphabetic characters inside the string are uppercase; false otherwise. Ignore 
  characters that are not alphabetic.
  
  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------
  Input: String

  Output: return boolean
  ----------------------------------RULES--------------------------------------
  Explicit:
  - return true if all letters are uppercase
  - return false otherwise
  - ignore chars that are not letters


  Implicit: 
  - string can contain zero or 1 chars
  - can contain non-letters
  EdgeCases: 
    - empty values
    i.e.
    - empty or null or None values
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  Given string, return true if all letter chars are uppercase, else false
  -----------------------------------EXAMPLES----------------------------------
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  - define functino `isUppercase` that takes 1 String parameter `str`
  - declare constant Array variable `LOWER_LETTERS` that contains lowercase letters
  - declare variable result initialized to `true`
  - declare a variable `lettersArr` initialized to the return value of transforming 
    `str` to array
  - iterate through lettersArr
    - if current item is a within `LOWER_LETTERS` reassign result to false
  -return `result`
  -------------------------------CODE WITH INTENT------------------------------
  **********************************END PEDAC**********************************
*/

LOWER_LETTERS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// // Solution 1:
// const isUppercase = (str) => {
//   let result = true;
//   const lettersArr = str.split("");
//   lettersArr.forEach((item) => {
//     if (LOWER_LETTERS.includes(item)) {
//       result = false;
//     }
//   });

//   console.log(result);
//   return result;
// };

// Solution 2: More efficient as it stops iterating after first false
const isUppercase = (str) => {
  for (let i = 0; i < str.length; i += 1) {
    if (LOWER_LETTERS.includes(str[i])) return false;
  }

  return true;
};

isUppercase("4SCORE!");

// console.log(isUppercase("t")); // false
// console.log(isUppercase("T")); // true
// console.log(isUppercase("Four Score")); // false
// console.log(isUppercase("FOUR SCORE")); // true
// console.log(isUppercase("4SCORE!")); // true
// console.log(isUppercase("")); // true
