/*
  Created: 03/26/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 4 > Convert a Number to a String


  Instructions:

  In the previous two exercises, you developed functions that convert simple 
  numeric strings to signed integers. In this exercise and the next, you're 
  going to reverse those functions.

  Write a function that converts a non-negative integer value 
  (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

  You may not use any of the standard conversion functions available in 
  JavaScript, such as String(), Number.prototype.toString, or an expression 
  such as '' + number. Your function should do this the old-fashioned way and 
  construct the string by analyzing and manipulating the number.
  
  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------

  Input: Number
  Output: return String

  ----------------------------------RULES--------------------------------------

  Explicit:
    - Given non-negative integer


  Implicit: 

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values
      - Yes, can be zero
      - No, can not be negative

  ---------------------------------MENTAL MODEL--------------------------------
  Given number convert to string
  -----------------------------------EXAMPLES----------------------------------
  loop 1: 4321 % 10 ** 1 => 1
  loop 2: 4321 % 10 ** 2 => 21
  loop 3: 4321 % 10 ** 3 => 321
  loop 3: 4321 % 10 ** 4 => 4321
  
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  -------------------------------CODE WITH INTENT------------------------------

  **********************************END PEDAC**********************************
*/

const ARRAY_OF_STRINGS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Solution 1: with gaurd clause
const integerToString = (number) => {
  if (number === 0) return "0";

  let result = "";

  while (number > 0) {
    // remainder
    let remainder = number % 10;

    // quotient
    number = Math.floor(number / 10);

    // using remainder as index to lookup string value in ARRAY_OF_STRINGS
    let str = ARRAY_OF_STRINGS[remainder];

    // adding two strings without conversion.
    result = str + result; // note order: str in front of result.
  }

  return result;
};

// Solution 2: Since do while runs once, gaurd clause is NOT needed as number = 0 will execute once
const integerToString = (number) => {
  let result = "";

  do {
    // remainder
    let remainder = number % 10;

    // quotient
    number = Math.floor(number / 10);

    // using remainder as index to lookup string value in ARRAY_OF_STRINGS
    let str = ARRAY_OF_STRINGS[remainder];

    // adding two strings without conversion.
    result = str + result; // note order: str in front of result.
  } while (number > 0);

  return result;
};

console.log(integerToString(1234567890));
console.log(integerToString(4320)); // "4321"
console.log(integerToString(0)); // "0"
console.log(integerToString(5000)); // "5000"
console.log(integerToString(1234567890)); // "1234567890"
