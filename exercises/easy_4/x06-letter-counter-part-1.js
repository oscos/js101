/*
  Created: 03/25/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 4 > Letter Counter (Part 1)


  Instructions:

  Write a function that takes a string consisting of zero or more space separated 
  words and returns an object that shows the number of words of different sizes.

  Words consist of any sequence of non-space characters.
  
  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------

  Input: String
  Output: return Object (Hash)

  ----------------------------------RULES--------------------------------------

  Explicit:
    - String can be zero length and up
    tabulate words of same length 
    - by tabulate I mean group and count
    - Words consist of any sequence of non-space characters.
      - each space is delimiter between words.


  Implicit: 

  EdgeCases: 
    i.e.
    - empty or null or None values
      - yes, empty strings
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  Given string, group words of same length and return an object where the group 
  represents the key, and the count represents the value
  -----------------------------------EXAMPLES----------------------------------
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  - define a function `wordSizes` tha takes one String parameter `str`
  - declare a variable obj initialized to an empty Object
  - declare a varaible wordLength initialized to 0;
  - split string into array using space as delimiter and assign it to a new 
    variable `arr`
  - iterate through `arr`
    - reassign wordLength to the string representation of the length of current item
    - if wordLength is already included as a key in `obj`
      - increase the value of key by 1
    - else
      - add key to `obj` and set the value to 1
  - return obj
  -------------------------------CODE WITH INTENT------------------------------

  **********************************END PEDAC**********************************
*/

// Solution 1:
const wordSizes = (str) => {
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

/*
// Solution 2:
const wordSizes = (str) => {
  if (str.length === 0) return {};
  const obj = {};
  let objKeys = Object.keys(obj);
  let wordLength = 0;
  let arr = str.split(" ");

  arr.forEach((item) => {
    wordLength = item.length.toString();
    objKeys = Object.keys(obj);
    if (objKeys.includes(wordLength)) {
      obj[wordLength] += 1;
    } else {
      obj[wordLength] = 1;
    }
  });
  // console.log(obj);
  return obj;
};
*/

console.log(wordSizes("Four score and seven.")); // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes("Hey diddle diddle, the cat and the fiddle!")); // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes("")); // {}
