/*
  Created: 03/22/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 3 > Fibonacci Number Location By Length [OBSOLETE]


  Instructions:

  You may skip this exercise at this time; it may be too difficult for most 
  beginners at this stage. We have moved it to one of the Medium exercise sets, 
  but leave this one here to preserve the student answers.

  The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) 
  such that the first two numbers are 1 by definition, and each subsequent 
  number is the sum of the two previous numbers. Fibonacci numbers often appear 
  in mathematics and nature.

  Computationally, the Fibonacci series is a simple series, but the results 
  grow at an incredibly rapid rate. For example, the 100th Fibonacci number is 
  354,224,848,179,261,915,075—that's enormous, especially considering that it 
  takes six iterations just to find the first 2-digit Fibonacci number.

  Write a function that calculates and returns the index of the first Fibonacci 
  number that has the number of digits specified by the argument. 
  (The first Fibonacci number has an index of 1.)

  You may assume that the argument is always an integer greater than or equal to 2.

  JavaScript's normal Number type can represent integers accurate up to the 
  value of Number.MAX_SAFE_INTEGER, which is the 16-digit value 9007199254740991. 
  Any integer larger than that value loses accuracy. For instance, the following 
  code outputs 1, not 2 as you may expect:

  console.log(Number.MAX_SAFE_INTEGER + 2 - Number.MAX_SAFE_INTEGER);

  We'll be working with much larger numbers in this problem. Fortunately, 
  JavaScript now supports a BigInt type that lets you work with massive integers, 
  limited only by the amount of memory available to your program, and the time 
  you can devote to waiting for an answer.

  To use BigInt integers in your solution, simply append the letter n to any 
  numbers you use in your solution: 1n, 1234567890123456789012345678901234567890n, 
  and so on. JavaScript will take care of the rest.
  
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

// normal fibonacci
// const findFibonacciIndexByLength = (bigNum) => {
//   if (bigNum < 2) return bigNum;
//   // console.log(bigNum);

//   return findFibonacciIndexByLength(bigNum - 2n) + findFibonacciIndexByLength(bigNum - 1n);
// };

// work in progress
function findFibonacciIndexByLength(bigNum) {
  // let num = 0;

  if (bigNum < 2) return bigNum;

  let num =
    findFibonacciIndexByLength(bigNum - 2n) +
    findFibonacciIndexByLength(bigNum - 1n);
  // let text = num.toString();
  // arr.push(text);
  // console.log(arr);
  // if (num.toString().length === bigNum) return num
  console.log(num);
  return num;

}

console.log(findFibonacciIndexByLength(2n));

// console.log(findFibonacciIndexByLength(2n)) // === 7n); // 1 1 2 3 5 8 13
// findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
// findFibonacciIndexByLength(10n) === 45n;
// findFibonacciIndexByLength(16n) === 74n;
// findFibonacciIndexByLength(100n) === 476n;
// findFibonacciIndexByLength(1000n) === 4782n;
// findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.
