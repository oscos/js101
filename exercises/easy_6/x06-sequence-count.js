/*
  Created: 03/29/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 6 > Sequence Count

  Instructions:

  Create a function that takes two integers as arguments. The first argument 
  is a count, and the second is the starting number of a sequence that your 
  function will create. The function should return an array containing the 
  same number of elements as the count argument. The value of each element
  should be a multiple of the starting number.

  You may assume that the count argument will always be an integer greater than 
  or equal to 0. The starting number can be any integer. If the count is 0, the 
  function should return an empty array.

  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------
  Input: 2 Integers

  Output: return array of integers
  ----------------------------------RULES--------------------------------------
  Explicit:
    - number is integer
    - if count = 0, return empty array
    - `count` is positive integer
    - `starting` number can be any integer (positive, negative, zero)
    - value of each element in array 
      - multiple of starting number
      - how many multiples is dictated by count


  Implicit: 
    - positive
    - negative
    - 0

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  given two numbers, where the first number is the count, and the second
  number is the multipile, list `multiple`, `count` number of times in an array
  -----------------------------------EXAMPLES----------------------------------
  count, multiple
  4, 2 = [2, 4, 6, 8]
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  - define function `sequence` that takes 2 numbers as parameters `num1`, `num2`
  - declare variable `result` initialized to empty array
  - iterate from 1 upto and in and including `num` 
    - multply iterator value times `num2`
    - save result in `result`
  - return result    
  -------------------------------CODE WITH INTENT------------------------------
  **********************************END PEDAC**********************************
*/

const sequence = (num1, num2) => {
  console.dir(`${num1} ${num2}`);
}; 

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []
