/*
  Created: 04/04/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > String and Text Processing > Lettercase Counter



  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------

  Write a function that takes a string and returns an object containing three 
  properties: one representing the number of characters in the string that are 
  lowercase letters, one representing the number of characters that are uppercase 
  letters, and one representing the number of characters that are neither.

  Input: string

  Output: returns obj
  ----------------------------------RULES--------------------------------------
  Explicit:
  - returns an object containing three properties: 
    - one representing the number of characters in the string that are lowercase letters, 
    - one representing the number of characters that are uppercase letters, and 
    - one representing the number of characters that are neither.
  Implicit: 
    - string can contain empty values
  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  given string, return object that contains 3 key value pairs
    key: lower case letters, value: number of chars
    key: upper case letters, value: number of chars
    key: non-letters, value: number of chars
  -----------------------------------EXAMPLES----------------------------------
  letterCaseCount("abCdef 123"); // { lowercase: 5, uppercase: 1, neither: 4 }
  letterCaseCount("AbCd +Ef"); // { lowercase: 3, uppercase: 3, neither: 2 }
  letterCaseCount("123"); // { lowercase: 0, uppercase: 0, neither: 3 }
  letterCaseCount(""); // { lowercase: 0, uppercase: 0, neither: 0 }
  --------------------------------DATA STRUCTURES------------------------------
  object to hold three key/value pairs
  -----------------------------------ALGORITHM---------------------------------
  - define a function `letterCaseCount` that takes one string parameter `str`
  - convert string to individual chars and assing to `chars`
  - declare `obj` and initialized to:
    - lowercase: 0
    - uppercase: 0
    - neither: 0
  - iterate through `chars` and check current element `char`:
    - if char is lowercase
      - increase the value of lowercase key in `obj` by 1
    - else if char is uppercase
      - increase the value of upperase key in `obj` by 1
    - else
      - increase the value of neither key in `obj` by 1
  return obj
  -------------------------------CODE WITH INTENT------------------------------
  **********************************END PEDAC**********************************
*/

const letterCaseCount = (str) => {
  const obj = { lowercase: 0, uppercase: 0, neither: 0 };
  const chars = str.split("");
  chars.forEach((char) => {
    if (char.match(/[a-z]/g)) {
      obj["lowercase"] += 1;
    } else if (char.match(/[A-Z]/g)) {
      obj["uppercase"] += 1;
    } else {
      obj["neither"] += 1;
    }
  });
  console.log(obj);
};

letterCaseCount("abCdef 123"); // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount("AbCd +Ef"); // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount("123"); // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount(""); // { lowercase: 0, uppercase: 0, neither: 0 }
