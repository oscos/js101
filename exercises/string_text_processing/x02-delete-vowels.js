/*
  Created: 04/06/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > String and Text Processing > Delete Vowels

  Instructions:

  Write a function that takes an array of strings and returns an array of the 
  same string values, but with all vowels (a, e, i, o, u) removed.

  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------
  Input: Array

  Output: return Array
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

// Solution 1:

const VOWELS = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

const removeVowels = (arr) => {
  let result = [];

  arr.forEach((item) => {
    word = "";
    chars = item.split("");

    chars.forEach((char) => {
      if (!VOWELS.includes(char)) {
        word += char;
      }
    });

    result.push(word);
  });

  console.log(result);
  return result;
};

removeVowels(["abcdefghijklmnopqrstuvwxyz"]); // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(["green", "YELLOW", "black", "white"]); // ["grn", "YLLW", "blck", "wht"]
removeVowels(["ABC", "AEIOU", "XYZ"]); // ["BC", "", "XYZ"]

// Solution 2:  String.prototype.replaceAll()
const removeVowels2 = (arr) => {
  const regex = /[aeiou]/gi;
  let result = arr.map((item) => {
    return item.replaceAll(regex, "");
  });

  console.log(result);
  return result;
};

removeVowels2(["abcdefghijklmnopqrstuvwxyz"]); // ["bcdfghjklmnpqrstvwxyz"]
removeVowels2(["green", "YELLOW", "black", "white"]); // ["grn", "YLLW", "blck", "wht"]
removeVowels2(["ABC", "AEIOU", "XYZ"]); // ["BC", "", "XYZ"]
