/*
  Created: 04/06/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Medium 1 > 

  Instructions:

  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------
  Input: BinInt

  Output: Return BigInt
  ----------------------------------RULES--------------------------------------
  Explicit:
  - given number calculate and return the INDEX of first fib number that has the same amount of digits as the method parameter
  - first fib number has index 1 (index 1 based) Implicit:
  Implicit: 
  - What is fibonacci?

    Fibonacci Sequence
    Maths Is Fun
    https://www.mathsisfun.com › numbers › fibonacci-se...
    The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... The next number is found by adding up the two numbers before it:.
  

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  - return the first number in the fibonnaci sequence that has the same number
  of digits equal to the number argument passed in
  -----------------------------------EXAMPLES----------------------------------
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  - initialize array with first two numbers of fib sequence [1, 1] (exclude 0)
  - iterate through array until the size of the last element in the array
    is equal to the `num` argument
    - on each iteration, add the last two numbers of the array and push
      the sum to the array
  - return the length of the array
  -------------------------------CODE WITH INTENT------------------------------
  **********************************END PEDAC**********************************
*/

const findFibonacciIndexByLength = (num) => {
  arr = [1n, 1n];

  while (arr.slice(-1).toString().length < num) {
    // sum of the last two elements of array
    sumOfLastTwo = arr.slice(-2).reduce((acc, sum) => acc + sum, 0n);
    arr.push(sumOfLastTwo);
  }

  result = BigInt(arr.length);
  // console.log(result);
  return result;
};

findFibonacciIndexByLength(2n) === 7n; // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n; // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
// findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.
