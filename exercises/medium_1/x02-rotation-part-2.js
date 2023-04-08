/*
  Created: 04/08/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Medium 1 > Rotation (Part 2)

  Instructions:

  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------

  Write a function that rotates the last count digits of a number. To perform 
  the rotation, move the first of the digits that you want to rotate to the end 
  and shift the remaining digits to the left.

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
  rotateRightmostDigits(735291, 6);      // 352917

  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  -------------------------------CODE WITH INTENT------------------------------
  **********************************END PEDAC**********************************
*/

// Solution 1:
const rotateRightmostDigits = (num1, num2) => {
  let arr = num1.toString().split("");
  let n = arr.splice(-num2, 1)[0];
  arr.push(n);

  let result = parseInt(arr.join(""));
  // console.dir(result)
  return result;
};

console.log(rotateRightmostDigits(735291, 1) === 735291);
console.log(rotateRightmostDigits(735291, 2) === 735219);
console.log(rotateRightmostDigits(735291, 3) === 735912);
console.log(rotateRightmostDigits(735291, 4) === 732915);
console.log(rotateRightmostDigits(735291, 5) === 752913);
console.log(rotateRightmostDigits(735291, 6) === 352917);

// Solution 2:
const rotateRightmostDigits2 = (num1, num2) => {
  const arr = num1.toString().split("");
  const arr2 = arr.splice(-num2, 1);

  let result = arr.concat(arr2).join("");

  return parseInt(result);
};

console.log(rotateRightmostDigits2(735291, 1) === 735291);
console.log(rotateRightmostDigits2(735291, 2) === 735219);
console.log(rotateRightmostDigits2(735291, 3) === 735912);
console.log(rotateRightmostDigits2(735291, 4) === 732915);
console.log(rotateRightmostDigits2(735291, 5) === 752913);
console.log(rotateRightmostDigits2(735291, 6) === 352917);
