/*
  Created: 03/29/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 6 > Name Swapping

  Instructions:

  Write a function that takes a string argument consisting of a first name, 
  a space, and a last name, and returns a new string consisting of the last name, 
  a comma, a space, and the first name.

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

const swapName = (str) => {
  // console.dir(str.split(" ").reverse().join(", "));
  return str.split(" ").reverse().join(", ");
};

swapName("Joe Roberts"); // "Roberts, Joe"
