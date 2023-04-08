/*
  Created: 04/06/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Medium 1 > 

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
  
  735291  // 321579
  352917 // move index 0 to end
  329175 // move index 1 to end
  321759 // move index 2 to end
  321597 // move index 3 to end
  321579 // move index 4 to end


  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  -------------------------------CODE WITH INTENT------------------------------
  **********************************END PEDAC**********************************
*/

// Solution from previous exercise:
const rotateRightmostDigits = (num1, num2) => {
  const arr = num1.toString().split("");
  const arr2 = arr.splice(-num2, 1); // notice the negative sign in front of num2

  let result = arr.concat(arr2).join("");

  // return parseInt(result); // doesn't work for edge case with leading zer (105)
  return result;
};

const maxRotation = (num) => {
  num
    .toString()
    .split("")
    .forEach((_, index) => {
      num = rotateRightmostDigits(num, -index);
    });
  return parseInt(num);
};

// console.log(maxRotation(105)); // 15 -- the leading zero gets dropped

console.log(maxRotation(735291) === 321579);
console.log(maxRotation(3) === 3);
console.log(maxRotation(35) === 53);
console.log(maxRotation(105) === 15); // -- the leading zero gets dropped
console.log(maxRotation(8703529146) === 7321609845);
