/*
  Created: 04/04/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > String and Text Processing > 

  Instructions:

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

  ignore 77 the 4444 numbers
  01234567890123456789012345

  IgNoRe 77 ThE 4444 nUmBeRs
  012345    678      9012345
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  - define function `staggeredCase` that takes 1 string param `str`
  - declare `newStr` initaliaze empty string
  - declare `counter` initialized to 0
  - split `str` into individual chars and assign to `arr`
  - iterate through `arr` and for each `char`:
    - if `char` is not a letter:
      - char
    - else if `char` is letter and `counter` is even:
      - upcase `char`
      - append to end of `newStr`
      - increase counter by 1
    - else :
      - downcase `char`
      - append to end of `newStr`
      - increase counter by 1
    - return newStr
  -------------------------------CODE WITH INTENT------------------------------
  **********************************END PEDAC**********************************
*/

// Solution 1:
const staggeredCase = (str) => {
  newStr = "";
  counter = 0;
  const arr = str.split("");
  arr.forEach((char) => {
    regex = /[a-z]/gi;
    if (!char.match(regex)) {
      newStr += char;
    } else if (char.match(regex) && counter % 2 === 0) {
      newStr += char.toUpperCase();
      counter += 1;
    } else {
      newStr += char.toLowerCase();
      counter += 1;
    }
  });

  // console.log(newStr);
  return newStr;
};

// Solution 2:
const staggeredCase2 = (str) => {
  let counter = 0;
  let result = str
    .split("")
    .map((char) => {
      regex = /[a-z]/gi;
      if (!char.match(regex)) {
        return char;
      } else if (char.match(regex) && counter % 2 === 0) {
        counter += 1;
        return char.toUpperCase();
      } else {
        counter += 1;
        return char.toLowerCase();
      }
    })
    .join("");

  console.log(result);
  return result;
};

console.log(
  staggeredCase2("I Love Launch School!") === "I lOvE lAuNcH sChOoL!"
);
console.log(staggeredCase2("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase2("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
