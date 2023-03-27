/*
  Created: 03/26/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 4 > Convert a Signed Number to a String


  Instructions:

  In the previous exercise, you developed a function that converts non-negative 
  numbers to strings.   In this exercise, you're going to extend that function 
  by adding the ability to represent negative numbers as well.

  Write a function that takes an integer and converts it to a string representation.

  You may not use any of the standard conversion functions available in JavaScript, 
  such as String() and Number.prototype.toString(). You may, however, use 
  integerToString() from the previous exercise.

  You might also want to check the Math.sign() function.
  
  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------

  Input:
  Output:

  ----------------------------------RULES--------------------------------------

  Explicit:

  Implicit: 

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  -----------------------------------EXAMPLES----------------------------------
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  -------------------------------CODE WITH INTENT------------------------------

  **********************************END PEDAC**********************************
*/

const ARRAY_OF_STRINGS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

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

const signedIntegerToString = (number) => {
  let result = "";
  let sign = Math.sign(number);
  let absNumber = Math.abs(number);
  let unsignedString = integerToString(absNumber);

  switch (sign) {
    case -1:
      return "-" + unsignedString;
    case 1:
      return "+" + unsignedString;
    case 0:
      return unsignedString;
  }
};

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
