/*
  Created: 04/18/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Medium 1 > Word to Digit

  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------
  Write a function that takes a sentence string as an argument and returns that 
  string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 
  'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its 
  corresponding digit character.

  Input: String

  Output: return String
  ----------------------------------RULES--------------------------------------
  Explicit:
    convert number spelling to number

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

/*

// Soluton attempt fails due to period
// Will have to use some sort of regex

// Example 1:
const NUMBERS = {'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9}

const wordToDigit = (str) => {
  arr = str.split(" ")

  return arr.map((item) =>  (item in NUMBERS) ? NUMBERS[item] : item );
}


// Second soluton attempt also fails for the same reason
// just wanted to practice with a different data structure
// Will have to use some sort of regex

const NUMBERS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const wordToDigit = (str) => {
  arr = str.split(" ");

  return arr.map((item) =>
    NUMBERS.includes(item) ? NUMBERS.indexOf(item) : item
  );

};
*/

// Solution:
const NUMBERS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const wordToDigit = (str) => {
  arr = str.split(" ");

  return arr.map((item) => {
    regex = /[^a-z]/gi;
    let item2 = item.replace(regex, "");
    // console.log(item2);
    return NUMBERS.includes(item2) ? NUMBERS.indexOf(item2) : item;
  });
};

console.log(
  wordToDigit("Please call me at five five five one two three four. Thanks.")
);
// "Please call me at 5 5 5 1 2 3 4. Thanks."
