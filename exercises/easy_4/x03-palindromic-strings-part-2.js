/*
  Created: 03/25/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 4 > Palindromic Strings (Part 2)


  Instructions:

  Write another function that returns true if the string passed as an argument 
  is a palindrome, or false otherwise. This time, however, your function should 
  be case-insensitive, and should ignore all non-alphanumeric characters. If you 
  wish, you may simplify things by calling the isPalindrome function you wrote 
  in the previous exercise.
  
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
  - define function `isRealPalindrome` that takes one String parameter `str`
  - declare a new variable `strLower` intialized to `str` in lowercase format
  - declare an array `alphanum` intialized to lower case letters and
    numbers 0 through 9
  - declare a new variable `arr` initialized to the return value of spliting
    `str` into individual elements
  - split `str` on each character and save each element in an new array `arr`
  - iterate through `arr`and filter out any characters that are not included 
    in `alphanum`
  - join all the elements in `arr` and assign the return value to a new 
    variable `newStr` 
  - invoke the `isPalindrome` method from previous exercise and pass in 
    `newStr` as an argument
  -------------------------------CODE WITH INTENT------------------------------

  **********************************END PEDAC**********************************
*/

const isPalindrome = (str) => {
  let result = false;
  let strReversed = str.split("").reverse().join("");
  if (strReversed === str) {
    return true;
  }
  return result;
};

const isRealPalindrome = (str) => {
  const ALPHANUM = "abcdefghijklmnopqrstuvwxyz0123456789";
  let strLower = str.toLowerCase();
  arr = strLower.split("").filter((item) => {
    return ALPHANUM.includes(item);
  });
  newStr = arr.join("");
  return isPalindrome(newStr);
};

console.log(isRealPalindrome("madam") === true); // true
console.log(isRealPalindrome("Madam") === true); // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam") === true); // true (only alphanumerics matter)
console.log(isRealPalindrome("356653") === true); // true
console.log(isRealPalindrome("356a653") === true); // true
console.log(isRealPalindrome("123ab321") === false); // false
