/*
  Created: 04/01/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 7 > All Substrings

  Instructions:
  
  Write a function that returns a list of all substrings of a string. Order the 
  returned list by where in the string the substring begins. This means that all 
  substrings that start at index position 0 should come first, then all substrings 
  that start at index position 1, and so on. Since multiple substrings will occur
  at each position, return the substrings at a given index from shortest to longest.

  You may (and should) use the leadingSubstrings function you wrote in the 
  previous exercise:

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

// Solution from Previous exercise
const leadingSubstrings = (str) => {
  let result = [];
  const arr = str.split("").forEach((item, index) => {
    let acc = str.slice(0, index + 1);
    // console.log(acc);
    result.push(acc);
  });

  // Not needed in this solution
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

  console.log(result.flat());
  return result.flat();
};

substrings("abcde");

/*
// returns: 

[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
*/
