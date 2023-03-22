/*
  Created: 03/19/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 2 > Always Return Negative.' 


  Instructions:

  Write a function that takes a number as an argument. If the argument is a 
  positive number, return the negative of that number. If the argument is a 
  negative number, return it as-is.
*/

/*
  *****************************START PEDAC*****************************
  -----------------------------------PROBLEM-----------------------------------

  Input: number
  Output: number

  ----------------------------------RULES--------------------------------------

  Explicit:
    given positive or negative number

  Implicit: 

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  Given positive or negative number, return negative if number is positive, 
  else return number as is.
  -----------------------------------EXAMPLES-----------------------------------
  - number = 2  => -2
  - number = -2 => -2
  --------------------------------DATA STRUCTURES-------------------------------
  -----------------------------------ALGORITHM----------------------------------
  - define function `negative` that takes one number parameter `num`
  - if num < 0 then return num otherwise return num * -1
  --------------------------CODE WITH INTENT-----------------------------------

  **********************************END PEDAC**********************************
*/
const negative = (num) => {
  return num < 0 ? num : num * -1;
};

console.log(negative(5)); // -5
console.log(negative(-3)); // -3
console.log(negative(0)); // -0
