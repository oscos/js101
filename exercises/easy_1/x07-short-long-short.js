/*
  Created: 03/18/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 1 > Short Long Short

  Instructions:

  Write a function that takes two strings as arguments, determines the length of the two strings, 
  and then returns the result of concatenating the shorter string, the longer string, and the 
  shorter string once again. You may assume that the strings are of different lengths.

  Examples:

*/

/*
*****************************START PEDAC*****************************
---------------------------PROBLEM-----------------------------------

Input: Given 2 strings
Output: Return 1 string


---------------------------RULES--------------------------------------
Explicit: 
  - strings are of different lengths

Implicit: 
  - from the examples, the strings appear to be only letters

Questions: 
  - Could special characters be introduced that need escaping?
    - not from the examples given

EdgeCases: 
	i.e.
	- empty or null or None values
      - yes, empty strings are allowed
	- zero or negative values
    - yes, zero length strings are allowed

--------------------------MENTAL MODEL---------------------------------
Given 2 strings combine into 1 string and return it.  The new string
is made up of the shorter string,  the longer string, and the 
shorter string again.
--------------------------EXAMPLES-------------------------------------
str1 = "abc"
str2 = "jk"
new_str = "abc" + "jk" + "abc"
--------------------------DATA STRUCTURES------------------------------
--------------------------ALGORITHM------------------------------------
# Solution 1
- define a function `shortLongShort` that with two string parameters
- declare two variables, `short` and `long` to empty strings

- compare the lengths of two strings of different lenghts and assign 
  - `short` to string with shorter length
  - `long` to string with longer length

- compare the lengths of two strings of different lenghts and assign 
    if string1 is shorter than string two then
  - assign `short` to string1
  - assign `long` to string2
    else 
  - assign `short` to string2
  - assign `long` to string1

- return short + long + short
--------------------------CODE WITH INTENT-----------------------------

*****************************END PEDAC*******************************
*/

// Solution 1:
const shortLongShort = (str1, str2) => {
  let short = "";
  let long = "";

  if (str1.length < str2.length) {
    short = str1;
    long = str2;
  } else {
    short = str2;
    long = str1;
  }

  let xVar = short + long + short;

  return xVar;
};

// // Solution 2:
// const shortLongShort = (str1, str2) => {
//   if (str1.length < str2.length) {
//     return str1 + str2 + str1
//   } else {
//     return str2 + str1 + str2
//   }
// }

console.log(shortLongShort("abc", "defgh")); // "abcdefghabc"
console.log(shortLongShort("abcde", "fgh")); // "fghabcdefgh"
console.log(shortLongShort("", "xyz")); // "xyz"
