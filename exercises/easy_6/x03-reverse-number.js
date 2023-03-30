/*
  Created: 03/29/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 6 > Reverse Number

  Instructions:

  Write a function that takes a positive integer as an argument and returns that 
  number with its digits reversed.

  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------
  Input: 

  Output: 
  ----------------------------------RULES--------------------------------------
  Explicit: Number

  Implicit: return Number

  EdgeCases: 
    - Number can be 1 digit long
    i.e.
    - empty or null or None values
    - zero or negative values
    

  ---------------------------------MENTAL MODEL--------------------------------
  -Given number, reverse the digits and return new value
  -----------------------------------EXAMPLES----------------------------------
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  - define function `reverseNumber` that takes 1 
  -------------------------------CODE WITH INTENT------------------------------
  **********************************END PEDAC**********************************
*/

// Solution 1:
const reverseNumber = (num) => {
  result = "";
  arr = num.toString().split("");
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    result += arr[i];
  }

  console.dir(parseInt(result));
  return parseInt(result);
};

// Solution 2:
const reverseNumber = (num) => {
  result = num.toString().split("").reverse().join("");
  // console.dir(parseInt(result));
  return parseInt(result);
};

// Solution 3:
const reverseNumber = (num) =>
  Number(Array.from(String(num), Number).reverse().join(""));

console.dir(reverseNumber(12345)); // 54321
console.dir(reverseNumber(12213)); // 31221
console.dir(reverseNumber(456)); // 654
console.dir(reverseNumber(12000)); // 21 -- Note that leading zeros in the result get dropped!
console.dir(reverseNumber(1)); //) 1
