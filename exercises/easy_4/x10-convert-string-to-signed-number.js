/*
  Created: 03/26/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 4 > Convert a String to a Number


  Instructions:

  In the previous exercise, you developed a function that converts simple numeric 
  strings to integers. In this exercise, you're going to extend that function to 
  work with signed numbers.

  Write a function that takes a string of digits and returns the appropriate 
  number as an integer. The string may have a leading + or - sign; if the first 
  character is a +, your function should return a positive number; if it is a -, 
  your function should return a negative number. If there is no sign, return a
  positive number.

You may assume the string will always contain a valid number.

You may not use any of the standard conversion methods available in JavaScript, 
such as parseInt() and Number(). You may, however, use the stringToInteger() 
function from the previous lesson.
  
  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------

  Input: string
  Output: Integer

  ----------------------------------RULES--------------------------------------

  Explicit:
    - given string containing either `+` , `-`, or no sign

  Implicit: 

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  -----------------------------------EXAMPLES----------------------------------
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  - define function `stringToSignedInteger` that takes one String parameter `str`
  - declare variable `result` initialized to empty string ""
  - declare variable `flag` initialized to 1
  - declare variable `cleanStr` initialized to `str`
  - if `str` contains `-` 
    - reassign `flag` to -1
    - reassign cleanStr to the return value of removing `-` from `str`
  - else if `str` contains `+` 
    - reassign cleanStr to the return value of removing `+` from `str`
  - reassign `result` to the return value of 
    - invoking `stringToInteger` with `cleanStr` as argument,
      and multiply return value by `flag`
  - return result
  -------------------------------CODE WITH INTENT------------------------------

  **********************************END PEDAC**********************************
*/

const stringToInteger = (str) => {
  let result = 0;
  const arr = str.split("").reverse();
  arr.forEach((item, index) => {
    let product = item * 10 ** index;
    result += product;
  });

  return result;
};

const stringToSignedInteger = (str) => {
  let result = "";
  let flag = 1;
  let cleanStr = str;
  if (str.includes("-")) {
    flag = -1;
    cleanStr = str.replace("-", "");
  } else if (str.includes("+")) {
    cleanStr = str.replace("+", "");
  }
  result = stringToInteger(cleanStr) * flag;

  return result;
};

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
