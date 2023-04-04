/*
  Created: 04/02/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 7 > Grocery List

  Instructions:

  Write a function that takes a grocery list in a two-dimensional array and 
  returns a one-dimensional array. Each element in the grocery list contains 
  a fruit name and a number that represents the desired quantity of that fruit. 
  The output array is such that each fruit name appears the number of times 
  equal to its desired quantity.

  In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. 
  Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.

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

const buyFruit = (arr) => {
  result = [];
  arr.forEach((item) => {
    for (let i = 0; i < item[1]; i += 1) {
      result.push(item[0]);
    }
  });
  console.log(result);
  return result;
};

buyFruit([
  ["apple", 3],
  ["orange", 1],
  ["banana", 2],
]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
