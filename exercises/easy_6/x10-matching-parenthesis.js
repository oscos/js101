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
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  - create function `isBalanced` that takes one string parameter'
  - declare variable `arr` initialized to empty array
  - iterate through string
    - if current element is `(`
      - save current element to `arr`
    - else if current element is `)` and `arr` is NOT empty
      - remove last element in `arr`
    - else if current element is `)`
      - save current element to `arr`
  - return the return value of checking if `arr` is empty
  -------------------------------CODE WITH INTENT------------------------------
  **********************************END PEDAC**********************************
*/

const isBalanced = (str) => {
  const arr = [];

  str.split("").forEach((item) => {
    if (item === "(") {
      arr.push(item);
    } else if (item === ")" && arr.length > 0) {
      arr.pop();
    } else if (item === ")") {
      arr.push(item);
    }
  });

  return arr.length === 0;
};

// LS Solution
function isBalanced(str) {
  let count = 0;

  for (let char of str) {
    if (count < 0) {
      return false;
    }

    if (char === "(") {
      count += 1;
    }
    if (char === ")") {
      count -= 1;
    }
  }

  return count === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
console.log(isBalanced("What ()) (()") === false); // My own test
