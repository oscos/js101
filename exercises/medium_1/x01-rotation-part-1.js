/*
  Created: 04/08/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Medium 1 > Rotation (Part 1)

  Instructions:

  Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

  If the input is not an array, return undefined.
  If the input is an empty array, return an empty array.
  Review the test cases below, then implement the solution accordingly.

  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------
  Input: Array

  Output: return new Array
  ----------------------------------RULES--------------------------------------
  Explicit:
  - rotates an array by moving the first element to the end of the array
  - Do not modify the original array.
  - If the input is not an array, return undefined.
  - If the input is an empty array, return an empty array.
  - Review the test cases below, then implement the solution accordingly.

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

const rotateArray = (obj) => {
  if (!Array.isArray(obj)) return undefined;
  if (obj.length === 0) return [];

  result = obj.slice(1).concat(obj.slice(0, 1));

  // console.log(result)
  return result;
};

console.log(rotateArray([7, 3, 5, 2, 9, 1])); // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(["a", "b", "c"])); // ["b", "c", "a"]
console.log(rotateArray(["a"])); // ["a"]
console.log(rotateArray([1, "a", 3, "c"])); // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3])); // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([])); // []

// return `undefined` if the argument is not an array
console.log(rotateArray()); // undefined
console.log(rotateArray(1)); // undefined

// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array)); // [2, 3, 4, 1]
console.log(array); // [1, 2, 3, 4]
