/*
  Created: 03/19/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 2 > AThe End Is Near But Not Here

  Instructions:

  Write a function that returns the next to last word in the String passed to it as an argument.

  Words are any sequence of non-blank characters.

  You may assume that the input String will always contain at least two words.
*/

/*
  *****************************START PEDAC*****************************
  ---------------------------PROBLEM-----------------------------------

  Input: String
  Output: return string

  ---------------------------RULES--------------------------------------
  Explicit:
    - contains at least two words 
    - words are non-blank characters
  Implicit: 

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  --------------------------MENTAL MODEL---------------------------------

  --------------------------EXAMPLES-------------------------------------
  --------------------------DATA STRUCTURES------------------------------
  --------------------------ALGORITHM------------------------------------
  - define a function `penultimate` with one string parameter `str`
  - split `str` into substrings by using space characters between 
    words as delimiter, and append each substring to the end of a new 
    array `arr`
  - return the second to the last element in `arr`
  
  --------------------------CODE WITH INTENT-----------------------------

  *****************************END PEDAC*********************************
*/

const penultimate = (str) => {
  let arr = str.split(" ");
  return arr[arr.length - 2];
};

console.log(penultimate("one") === "one"); // logs true
console.log(penultimate("") === ""); // logs true
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
