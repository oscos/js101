/*
  Created: 03/19/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 2 > Get Middle Character

  Instructions:

  Write a function that takes a non-empty string argument and returns the 
  middle character(s) of the string. If the string has an odd length, you 
  should return exactly one character. If the string has an even length, 
  you should return exactly two characters.

*/

/*
  *****************************START PEDAC*****************************
  -----------------------------------PROBLEM-----------------------------------

  Input: String
  Output: return string

  ----------------------------------RULES--------------------------------------

  Explicit:
    - 1 or more characters 
    - if string length odd, return middle 1 chars
      else if string length even, return two chars

  Implicit: 

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  - given string, determine length, if odd, return middle char, 
    else, return middle two chars
  -----------------------------------EXAMPLES-----------------------------------
  Launche //
  0123456 // length/2 = 3.5 ceil = 4, min
  Launch
  012345 //2,3 [2,4] => 2,3


  --------------------------------DATA STRUCTURES-------------------------------
  -----------------------------------ALGORITHM----------------------------------
  - define function centerOf with one parameter `str`
  - declare `strLength` variable initialized to the length of the `str`.
  - declare `min` variable initialized to the length / 2 rounded down to the previous int
  - declare `max` variable initialized to the length / 2 rounded up to the next int
  - declare `result` variable initialize to empty string
  - if `strLength is odd:
    - reassing `result` to the middle one character in `str`
  - else
    - reassign `result` to middle two character in `str`
  - return `result`
  --------------------------CODE WITH INTENT-----------------------------------

  **********************************END PEDAC**********************************
*/

// Solution 1:
const centerOf = (str) => {
  let strLength = str.length;
  let min = Math.floor(strLength / 2);
  let max = Math.ceil(strLength / 2);
  let result = "";
  if (strLength % 2 === 1) {
    result = str.slice(min, max);
  } else {
    result = str.slice(min - 1, max + 1);
  }

  return result;
};

// console.log(centerOf("Launch"));
// console.log(centerOf("Launch School"));

console.log(centerOf("I Love JavaScript") === "a"); // "a"
console.log(centerOf("Launch School") === " "); // " "
console.log(centerOf("Launch") === "un"); // "un"
console.log(centerOf("Launchschool") === "hs"); // "hs"
console.log(centerOf("x") === "x"); // "x"
