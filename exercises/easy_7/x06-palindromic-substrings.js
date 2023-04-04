/*
  Created: 04/02/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 7 > Palindromic Substrings

  Instructions:

  Write a function that returns a list of all palindromic substrings of a string. 
  That is, each substring must consist of a sequence of characters that reads the 
  same forward and backward. The substrings in the returned list should be sorted 
  by their order of appearance in the input string. Duplicate substrings should 
  be included multiple times.

  You may (and should) use the substrings function you wrote in the previous 
  exercise.

  For the purpose of this exercise, you should consider all characters and pay 
  attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' 
  are not. In addition, assume that single characters are not palindromes.

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

// Helper method from previous exercise
const leadingSubstrings = (str) => {
  let result = [];
  const arr = str.split("").forEach((item, index) => {
    let acc = str.slice(0, index + 1);
    // console.log(acc);
    result.push(acc);
  });

  // instructions say do not reorder
  // result = result.sort((a, b) => a.length - b.length);

  // console.log(result);
  return result;
};

// Solution 1:
const substrings = (str) => {
  let result = [];
  let arr = str.split("").forEach((_, index) => {
    let chars = str.slice(index);
    let xArr = leadingSubstrings(chars);
    result.push(xArr);
  });

  //console.log(result.flat());
  return result.flat();
};
// helper method to reverse string
const reverseString = (str) => {
  return str.split("").reverse().join("");
};

const palindromes = (str) => {
  let result = [];
  let substringsArr = substrings(str);
  let palArr = substringsArr.filter((item) => {
    if (item.length > 1 && item === reverseString(item)) {
      result.push(item);
    }
  });

  console.log(result);
  return result;
};

palindromes("abcd"); // []
palindromes("madam"); // [ "madam", "ada" ]

palindromes("hello-madam-did-madam-goodbye");
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes("knitting cassettes");
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
