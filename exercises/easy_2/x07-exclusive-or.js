/*
  Created: 03/19/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 2 > Exclusive Or

  Instructions:

  The || operator returns a truthy value if either or both of its operands are truthy, 
  a falsey value if both operands are falsey. The && operator returns a truthy value 
  if both of its operands are truthy, and a falsey value if either operand is falsey. 
  This works great until you need only one, but not both, of two conditions to be
  truthy: the so-called exclusive or.

  In this exercise, you will write a function named xor that takes two arguments, and 
  returns true if exactly one of its arguments is truthy, false otherwise. Note that 
  we are looking for a boolean result instead of a truthy/falsy value as returned 
  by || and &&.

*/

/*
  *****************************START PEDAC*****************************
  ---------------------------PROBLEM-----------------------------------

  Input: 2 arguments (integeres, booleans)
  Output: boolean

  ---------------------------RULES--------------------------------------
  Explicit: 

  Implicit: 

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  --------------------------MENTAL MODEL---------------------------------
  Given to arguments, return true if one argument is truthy, else return false
  --------------------------EXAMPLES-------------------------------------
  --------------------------DATA STRUCTURES------------------------------
  --------------------------ALGORITHM------------------------------------
  define function `xor` that takes 2 parameters: (x, y)

  if x evaluates to true and y evaluates to false then return true
  else if x evaluates to false and y evaluates to true then return true
  else return false

  --------------------------CODE WITH INTENT-----------------------------

  *****************************END PEDAC*********************************
*/

const xor = (x, y) => {
  if (!!x === true && !!y === false) {
    return true;
  } else if (!!x === false && !!y === true) {
    return true;
  } else {
    return false;
  }
};

console.log(xor(5, 0) === true); // true
console.log(xor(false, true) === true); // true
console.log(xor(1, 1) === false); // true
console.log(xor(true, true) === false); // true
