/*
  Created: 03/26/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 4 > Convert a String to a Number


  Instructions:

  The parseInt() method converts a string of numeric characters (including an 
  optional plus or minus sign) to an integer. The method takes 2 arguments 
  where the first argument is the string we want to convert and the second 
  argument should always be 10 for our purposes. parseInt() and the Number() 
  method behave similarly. In this exercise, you will create a function that 
  does the same thing.

  Write a function that takes a string of digits and returns the appropriate 
  number as an integer. You may not use any of the methods mentioned above.

  For now, do not worry about leading + or - signs, nor should you worry about 
  invalid characters; assume all characters will be numeric.

  You may not use any of the standard conversion methods available in JavaScript, 
  such as String() and Number(). Your function should do this the old-fashioned 
  way and calculate the result by analyzing the characters in the string.
  
  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------

  Input: String
  Output: return number

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
  - define function `stringToInteger` that takes one string parameter `str`
  - declare a new variable `result` initialized to 0
  - declare a new variable `arr` initialized to the return value of 
    - split `str` into an array of individual chars 
    - reverse the order of the elements
  - iterate through `arr` with counter starting at 0
    - declare new variable `product` intialized to: 
      - multiply each current item by ten raised to the power of counter (10 ** counter)
    - reassign result to itself + product (result += counter)
  - return result
  -------------------------------CODE WITH INTENT------------------------------

  **********************************END PEDAC**********************************
*/

// Solution 1
const stringToInteger = (str) => {
  let result = 0;
  const arr = str.split("").reverse();
  arr.forEach((item, index) => {
    let product = item * 10 ** index;
    result += product;
  });

  return result;
};

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
