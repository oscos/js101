/*
  Created: 03/23/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 3 > Clean up the words


  Instructions:

  Given a string that consists of some words and an assortment of non-alphabetic 
  characters, write a function that returns that string with all of the 
  non-alphabetic characters replaced by spaces. If one or more non-alphabetic 
  characters occur in a row, you should only have one space in the result 
  (i.e., the result string should never have consecutive spaces).
  
  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------

  Input: String
  Output: Return String

  ----------------------------------RULES--------------------------------------

  Explicit:
    - Given string of non-alpha and alph chars
    - return alph chars, replacing non-alpha chars with single space

  Implicit: 

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  Given string of chars keep only alpha chars, and replace single and 
  multi-chars with single space
  -----------------------------------EXAMPLES----------------------------------
  "---what's my +*& line?" =>  " what s my line "
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  - define function `cleanUp` that takes one string parameter `str`
  - declare a variable `alphabetArr` that contains an Array of lower and 
    upppercase letters.
  - declare a variable `result` and initialize it to an empty string
  - declare a variable `counter` and initialize it to zero 0
  - iterate through `str` starting with index 0
    - if current element in string is in `alphabetArr`
      - add the letter to the end of `result`
      - reset counter to zero 0
    - else if counter value is zero 0
      - add one space to `result`
      - increase `counter` by 1
  - return `result`
  -------------------------------CODE WITH INTENT------------------------------

  **********************************END PEDAC**********************************
*/
const cleanUp = (str) => {
  let alphabetArr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  let counter = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (alphabetArr.includes(str[i])) {
      result += str[i];
      counter = 0;
    } else if (counter === 0) {
      result += " ";
      counter += 1;
    }
  }

  return result;
};

console.log(cleanUp("---what's my +*& line?") === " what s my line ");
