/*
  Created: 04/22/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Medium 2 > 

  Instructions:

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

const triangle = (num1, num2, num3) => {
  if (num1 === 0 || num2 === 0 || num3 === 0) return "invalid";

  const arr = [num1, num2, num3];
  const arr2 = [...new Set(arr)];

  let valid = true;

  if (num1 < num3 && num2 < num3) {
    if (num1 + num2 < num3) {
      valid = false;
    }
  } else if (num1 < num2 && num3 < num2) {
    if (num1 + num3 < num2) {
      valid = false;
    }
  } else if (num2 < num1 && num3 < num1) {
    if (num2 + num3 < num1) {
      valid = false;
    }
  }

  if (arr2.length === 1 && valid) {
    return "equilateral";
  } else if (arr2.length === 2 && valid) {
    return "isosceles";
  } else if (arr2.length === 3 && valid) {
    return "scalene";
  } else {
    return "invalid";
  }
};

console.log(triangle(3, 3, 3)); // "equilateral"
console.log(triangle(3, 3, 1.5)); // "isosceles"
console.log(triangle(3, 4, 5)); // "scalene"
console.log(triangle(0, 3, 3)); // "invalid"
console.log(triangle(3, 1, 1)); // "invalid"
