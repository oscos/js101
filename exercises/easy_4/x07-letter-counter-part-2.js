/*
  Created: 03/25/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 4 > Letter Counter (Part 2)


  Instructions:

  Modify the wordSizes function from the previous exercise to exclude non-letters 
  when determining word size. For instance, the word size of "it's" is 3, not 4.
  
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
  - define function `wordSizes` that takes one String parameter `str`
  - declare a new array `validCharsArr` that contains 
    - lower case letters
    - uppper case letters
    - numbers 0-9
    - single space
  - declare a new variable `cleanStr` initialized to empty string
  - iterate through string :
    - if current element is in `validCharsArr`
      - add current element to the end of cleanStr`
  - return the return value of invoking the `prevWordSizes` function from the 
    previous exercise, and pass `cleanStr` as an argument
  -------------------------------CODE WITH INTENT------------------------------

  **********************************END PEDAC**********************************
*/

const prevWordSizes = (str) => {
  if (str.length === 0) return {};

  const obj = {};
  let wordLength = 0;
  let arr = str.split(" ");

  arr.forEach((item) => {
    wordLength = item.length.toString();
    if (wordLength in obj) {
      obj[wordLength] += 1;
    } else {
      obj[wordLength] = 1;
    }
  });

  return obj;
};

const wordSizes = (str) => {
  const validCharsArr =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ";
  let cleanStr = "";
  str.split("").forEach((item) => {
    if (validCharsArr.includes(item)) {
      cleanStr += item;
    }
  });

  return prevWordSizes(cleanStr);
};

console.log(wordSizes("Four score and seven.")); // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes("Hey diddle diddle, the cat and the fiddle!")); // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes("")); // {}
