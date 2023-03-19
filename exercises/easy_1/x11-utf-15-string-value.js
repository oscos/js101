/*
  Created: 03/18/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 1 > UTF-16 String Value

  Instructions:

  Write a function that determines and returns the UTF-16 string value of a string 
  passed in as an argument. The UTF-16 string value is the sum of the UTF-16 values 
  of every character in the string. (You may use String.prototype.charCodeAt() to 
  determine the UTF-16 value of a character.)

*/

/*
  *****************************START PEDAC*****************************
  ---------------------------PROBLEM-----------------------------------

  Input: String
  Output: returns number

  ---------------------------RULES--------------------------------------
  Explicit: 
    - utf-16 string
    - return sum of utf-16 values of every character in string
    - use String.prototype.charCodeAt() to determine utf-16 value of a character

  Implicit: 

  EdgeCases: 
    i.e.
    - empty or null or None values 
      - YES, string can be empty
    - zero or negative values

  --------------------------MENTAL MODEL---------------------------------
  Given string, iterate throug every character and conver it to a number
  using the given method. Take the value of each element returned by the
  method and add them together.
  --------------------------EXAMPLES-------------------------------------
  string = "abc"
  "abc".charCodeAt(0) = 97
  "abc".charCodeAt(0) = 98
  "abc".charCodeAt(0) = 99
  = 97 + 98 + 99
  --------------------------DATA STRUCTURES------------------------------
  --------------------------ALGORITHM------------------------------------
  - define a function `utf16Value` with one string parameter `str`
  - declare variable `sum`, and initialize it to 0
  - iterate from 0 up to 1 less than the length of the str arg.
    - pass the number value to the charCodeAt method as an argument. 
      - i.e. str.charCodeAt(number)
    - reassign sum to itself plus the return value of the charCodeAt method.
  - return sum
  --------------------------CODE WITH INTENT-----------------------------

  *****************************END PEDAC*********************************
*/

const utf16Value = (str) => {
  let sum = 0;

  for (let i = 0; i < str.length; i += 1) {
    sum += str.charCodeAt(i);
  }

  return sum;
};

console.log(utf16Value("Four score") === 984); // 984
console.log(utf16Value("Launch School") === 1251); // 1251
console.log(utf16Value("a") === 97); // 97
console.log(utf16Value("") === 0); // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9"; // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA) === 937); // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA) === 2811); // 2811
