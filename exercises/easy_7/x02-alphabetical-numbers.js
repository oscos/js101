/*
  Created: 03/31/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 7 > Alphabetical Numbers

  Instructions:

  Write a function that takes an array of integers between 0 and 19 and returns 
  an array of those integers sorted based on the English word for each number:

  zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, 
  thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------
  Input: Array

  Output: Array
  ----------------------------------RULES--------------------------------------
  Explicit:
  - Given array of integers between 0 and 19
  - Return array of integers sorted by their english name

  Implicit: 
  - includes zero 
  - positive integers


  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  Given an array of integers between 0 and 19 inclusive, return array with the 
  values sorted by their name in English
  -----------------------------------EXAMPLES----------------------------------
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  - define function `alphabeticNumberSort` that takes one array parameter `arr`
  - define a constant variable `STRING_OF_NUMBERS` with the text representation 
    of numbers 0-19
  - declare `arrSortedByName` and intialize it to the return value of the follow:
    - iterate through `arr` and for each item, return the text representation
      by looking up the item in `STRING_OF_NUMBERS` by matching index
    - sort the return value
    - iterate through return value and for each item, return the index in 
      `STRING_OF_NUMBERS` based on the current element value.
  - return `arrSortedByName`
  -------------------------------CODE WITH INTENT------------------------------
  **********************************END PEDAC**********************************
*/

// Solution 1:
const STRING_OF_NUMBERS = [
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
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const alphabeticNumberSort = (arr) => {
  let arrSortedByName = arr
    .map((index) => STRING_OF_NUMBERS[index])
    .sort()
    .map((item) => STRING_OF_NUMBERS.indexOf(item));

  // console.log(arrSortedByName);
  return arrSortedByName;
};

// Solution 2:
const alphabeticNumberSort = (arr) => {
  const sortedArr = arr.sort((a, b) =>
    STRING_OF_NUMBERS[a].localeCompare(STRING_OF_NUMBERS[b])
  );
  console.log(sortedArr);
  return sortedArr;
};

alphabeticNumberSort([
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
]);

// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
