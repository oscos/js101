/*
  Created: 04/01/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 7 > Leading Substrings

  Instructions:

  Write a function that takes a string argument and returns a list of substrings 
  of that string. Each substring should begin with the first letter of the word, 
  and the list should be ordered from shortest to longest.

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

/*
// Solution 1:
const leadingSubstrings = (str) => {
  let result = [];
  str.split("").forEach((item, index) => {
    if (index === 0) {
      result.push(item);
    } else {
      result.push(result[result.length - 1] + item);
    }
  });

  // Not needed in this solution
  // result = result.sort((a, b) => a.length - b.length);

  // console.log(result);
  return result;
};


// Solution 2
const leadingSubstrings = (str) => {
  let result = [];
  const arr = str.split("").forEach((item, index) => {
    let acc = str.slice(0, index + 1);
    // console.log(acc);
    result.push(acc);
  });

  // Not needed in this solution, but pehaps in others.
  result = result.sort((a, b) => a.length - b.length);

  console.log(result);
  return result;
};
*/

leadingSubstrings("abc"); // ["a", "ab", "abc"]
leadingSubstrings("a"); // ["a"]
leadingSubstrings("xyzzy"); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
