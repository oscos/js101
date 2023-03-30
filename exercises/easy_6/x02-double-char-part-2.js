/*
  Created: 03/29/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 6 > 

  Instructions:

  Write a function that takes a string, doubles every consonant character in the 
  string, and returns the result as a new string. The function should not double 
  vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

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

const CONSANANTS = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "y",
  "z",
  "B",
  "C",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "V",
  "W",
  "Y",
  "Z",
];

const doubleConsonants = (str) => {
  let arr = str.split("");

  let arr2 = arr.map((item) => {
    if (CONSANANTS.includes(item)) {
      return item + item;
    } else {
      return item;
    }
  });

  let result = arr2.join("");
  // console.dir(result);
  return result;
};

console.log(doubleConsonants("String") === "SSttrrinngg");
console.log(doubleConsonants("Hello-World!") === "HHellllo-WWorrlldd!");
console.log(doubleConsonants("July 4th") === "JJullyy 4tthh");
console.log(doubleConsonants("") === "");

// doubleConsonants("String"); // "SSttrrinngg"
// doubleConsonants("Hello-World!"); // "HHellllo-WWorrlldd!"
// doubleConsonants("July 4th"); // "JJullyy 4tthh"
// doubleConsonants(""); // ""
