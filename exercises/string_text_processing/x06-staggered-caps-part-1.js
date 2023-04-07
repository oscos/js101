/*
  Created: 04/06/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > String and Text Processing > Staggered Caps (Part 1)

  Instructions:

  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------
  Write a function that takes a string as an argument and returns that string 
  with a staggered capitalization scheme. Every other character, starting from 
  the first, should be capitalized and should be followed by a lowercase or 
  non-alphabetic character. Non-alphabetic characters should not be changed, 
  but should be counted as characters for determining when to switch between 
  upper and lower case.

  Input: String

  Output: Return String
  ----------------------------------RULES--------------------------------------
  Explicit:
    - Every other character, starting from the first, should be capitalized and
    - should be followed by a lowercase or non-alphabetic character.

    - Non-alphabetic characters should not be changed, but 
    - should be counted as characters for determining when to switch between 
      upper and lower case.

  Implicit: 

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  -----------------------------------EXAMPLES----------------------------------
  staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
  staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
  staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

  ignore 77 the 4444 numbers
  01234567890123456789012345

  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  - define function `staggeredCase` that takes 1 string param `str`
  - declare `newStr` initaliaze empty string
  - split `str` into individual chars and assign to `arr`
  - iterate through `arr` and for each `char`:
    - if `char` is not a letter:
      
    - else if `char` is letter and `counter` is even:
      - upcase `char`
      - append to end of `newStr`
    - else :
      - downcase `char`
      - append to end of `newStr`
    - return newStr

  -------------------------------CODE WITH INTENT------------------------------
  **********************************END PEDAC**********************************
*/

// Solution 1:
const staggeredCase = (str) => {
  newStr = "";
  const arr = str.split("");
  arr.forEach((char, index) => {
    regex = /[a-z]/gi;
    if (!char.match(regex)) {
      newStr += char;
    } else if (char.match(regex) && index % 2 === 0) {
      newStr += char.toUpperCase();
    } else {
      newStr += char.toLowerCase();
    }
  });

  return newStr;
};

console.log(staggeredCase("I Love Launch School!") === "I LoVe lAuNcH ScHoOl!");
console.log(staggeredCase("ALL_CAPS") === "AlL_CaPs");
console.log(
  staggeredCase("ignore 77 the 4444 numbers") === "IgNoRe 77 ThE 4444 nUmBeRs"
);

// Solution 2:
const staggeredCase2 = (str) => {
  let result = str
    .split("")
    .map((char, index) => {
      regex = /[a-z]/gi;
      if (!char.match(regex)) {
        return char;
      } else if (char.match(regex) && index % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join("");

  return result;
};

console.log(
  staggeredCase2("I Love Launch School!") === "I LoVe lAuNcH ScHoOl!"
);
console.log(staggeredCase2("ALL_CAPS") === "AlL_CaPs");
console.log(
  staggeredCase2("ignore 77 the 4444 numbers") === "IgNoRe 77 ThE 4444 nUmBeRs"
);
