/*
  Created: 03/29/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 6 > Matching Parentheses?

  Instructions:

  Write a function that takes a string as an argument and returns true if all 
  parentheses in the string are properly balanced, false otherwise. To be 
  properly balanced, parentheses must occur in matching '(' and ')' pairs.

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
  [()]
  [)]
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  - create function `isBalanced` that takes one string parameter'
  - declare a variable `result` initialized to false
  - declare a variable `validChars` initialized to ["(",")"]
  - declare variable `arr` initialized to empty array
  - iterate through string
    - if current element is is either `(` or ')`
      - save current element to `arr`
  - reasign result to true if 
    - length of arr is even && 
    - first element in `arr` is `(` && 
    - last element in `arr` is `)`
  - else reasign result to true if 
    - `arr` is empty
  - return result
  -------------------------------CODE WITH INTENT------------------------------
  **********************************END PEDAC**********************************
*/

const isBalanced = (str) => {
  let result = false;
  let validChars = ["(", ")"];
  const arr = [];
  str.split("").forEach((item) => {
    if (validChars.includes(item)) {
      arr.push(item);
    }
  });

  if (arr.length === 0) {
    result = true;
  } else if (
    arr.length % 2 === 0 &&
    arr[0] === "(" &&
    arr[arr.length - 1] === ")"
  ) {
    result = true;
  }

  return result;
};

isBalanced("What (is) this?");

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
