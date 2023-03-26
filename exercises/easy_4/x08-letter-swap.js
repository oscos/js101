/*
  Created: 03/25/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 4 > Letter Swap


  Instructions:

  Given a string of words separated by spaces, write a function that swaps the 
  first and last letters of every word.

  You may assume that every word contains at least one letter, and that the 
  string will always contain at least one word. You may also assume that each 
  string contains nothing but words and spaces, and that there are no leading, 
  trailing, or repeated spaces.

  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------

  Input: String
  Output: return string

  ----------------------------------RULES--------------------------------------

  Explicit:
  - Given string with spaces
  - split string using space as delimiter
  - string will contain as least 1 word
  - word will contain at least one char

  Implicit: 

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  Given string space delimitted, swap the first and last word and return new string
  -----------------------------------EXAMPLES----------------------------------
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  define function `swamp` that takes one string as parameter `str`
  - declare a variable `result` initialized to an empty array
  - split `str` using space as delimiter and assign the return value to a 
    new array `wordsArr`
  - iterate through `wordsArr` and assign the current element to a new variable `item`
    - declare a variable `first` intialized to the first character in `item`
    - declare a variable `last` initialized to the last character in `item`
    - declare a variable `middle` initalized to the second character upto and including second to 
      the last character in `item`
    - if `item length` equals 1
      - add `first` to the end of `result`
    - else
      - add `last` + `middle` + `last` to the end of `result`
  - join `result` with 1 space as delimiter and return value to function
  -------------------------------CODE WITH INTENT------------------------------
  **********************************END PEDAC**********************************
*/

// Solution 1:
const swap = (str) => {
  let result = [];
  let wordsArr = str.split(" ");

  wordsArr.forEach((item) => {
    let first = item[0];
    let last = item.slice(-1);
    let middle = item.slice(1, -1);

    if (item.length === 1) {
      result.push(item);
    } else {
      result.push(last + middle + first);
    }
  });

  return result.join(" ");
};

// Solution 2:
const swap = (str) => {
  return str
    .split(" ")
    .map((item) => {
      if (item.length === 1) {
        return item;
      } else {
        return item.slice(-1) + item.slice(1, -1) + item[0];
      }
    })
    .join(" ");
};

console.log(swap("Oh what a wonderful day it is")); // "hO thaw a londerfuw yad ti si"
console.log(swap("Abcde")); // "ebcdA"
console.log(swap("a")); // "a"
