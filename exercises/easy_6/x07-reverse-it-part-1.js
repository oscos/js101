/*
  Created: 03/29/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 6 > Reverse It (Part 1)

  Instructions:

  Write a function that takes a string argument and returns a new string 
  containing the words from the string argument in reverse order.

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

const reverseSentence = (str) => {
  // console.dir(str.split(" ").reverse().join(" "));
  str.split(" ").reverse().join(" ");
};

reverseSentence(""); // ""
reverseSentence("Hello World"); // "World Hello"
reverseSentence("Reverse these words"); // "words these Reverse"
