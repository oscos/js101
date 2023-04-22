/*
  Created: 04/06/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Medium 1 > Fibonacci Numbers (Procedural)

  Instructions:

  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------
  Fibonacci Numbers (Procedural)
  In the previous exercise, we developed a recursive solution for computing 
  the nth Fibonacci number. In a language that is not optimized for recursion, 
  some (but not all) recursive functions can be extremely slow and may require 
  massive quantities of memory and/or stack space. If you tested for bigger nth 
  numbers, you might have noticed that getting the 50th fibonacci number already 
  takes a significant amount of time.

  Fortunately, every recursive function can be rewritten as a non-recursive 
  (or procedural) function.

  Rewrite your recursive fibonacci function so that it computes its results 
  without using recursion.

  Note that JavaScript can accurately compute integers up to 16 digits long; 
  this means that fibonacci(78) is the largest Fibonacci number that you can 
  accurately compute with simple operations in JavaScript.

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

const fibonacci = (num) => {
  const arr = [1, 1];

  while (arr.length < num) {
    let sumOfLastTwo = arr.slice(-2).reduce((acc, sum) => acc + sum, 0);
    arr.push(sumOfLastTwo);
  }

  // let result = arr.slice(-1); // this returns array with last element - we want last element only
  let result = arr[arr.length - 1];
  //console.log(result);
  return result;
};

console.log(fibonacci(20)); // 6765
console.log(fibonacci(50)); // 12586269025
console.log(fibonacci(75)); // 2111485077978050
console.log(fibonacci(100)); // 2111485077978050