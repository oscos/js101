/*
  Created: 04/04/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > String and Text Processing > Capitalize Words

  Instructions:

  Write a function that takes a string as an argument and returns that string with 
  the first character of every word capitalized and all subsequent characters in lowercase.

  You may assume that a word is any sequence of non-whitespace characters.

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

const swapCase = (str) => {
  let result = str.split("").map((char) => {
    if (char.toUpperCase() === char) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  });
  console.log(result.join(""));
  return result.join("");
};

swapCase("CamelCase"); // "cAMELcASE"
swapCase("Tonight on XYZ-TV"); // "tONIGHT ON xyz-tv"
