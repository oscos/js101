/*
  Created: 04/06/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Medium 1 > Fibonacci Numbers (Memoization)

  Instructions:

  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------

  Our recursive fibonacci function from an earlier exercise isn't very efficient. 
  It starts slowing down with an nth argument value as low as 35. One way to 
  improve the performance of our recursive fibonacci function 
  (and other recursive functions) is to use memoization.

  Memoization is an approach that involves saving a computed answer for future 
  reuse, instead of computing it from scratch every time it is needed. In the 
  case of our recursive fibonacci function, using memoization saves calls to 
  fibonacci(nth - 2) because the necessary values have already been computed 
  by the recursive calls to fibonacci(nth - 1).

  For this exercise, your objective is to refactor the recursive fibonacci 
  function to use memoization.

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

const fibonacci = (num, prevVals = []) => {
  if (prevVals[num] != null) {
    return prevVals[num];
  }

  if (num < 3) return 1;

  result = fibonacci(num - 1, prevVals) + fibonacci(num - 2, prevVals);

  prevVals[num] = result;
  console.log(prevVals[num])

  return result;
};


console.log(fibonacci(12)); // 144

// console.log(fibonacci(1)); // 1
// console.log(fibonacci(2)); // 1
// console.log(fibonacci(3)); // 2
// console.log(fibonacci(4)); // 3
// console.log(fibonacci(5)); // 5
// console.log(fibonacci(12)); // 144
// console.log(fibonacci(20)); // 6765
// console.log(fibonacci(100)); //
