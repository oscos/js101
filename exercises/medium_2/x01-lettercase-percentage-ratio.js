/*
  Created: 04/22/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Medium 2 > Lettercase Percentage Ratio

  Instructions:

  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------

  Write a function that takes a string and returns an object containing the 
  following three properties:

  the percentage of characters in the string that are lowercase letters
  the percentage of characters that are uppercase letters
  the percentage of characters that are neither
  You may assume that the string will always contain at least one character.

  Input: String

  Output: return obj
  ----------------------------------RULES--------------------------------------
  Explicit:
    return obj with 3 props:
    => { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

  Implicit: 

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  given string iterate through each char and  find:
    - percentage of string chars that are lowercase
    - percentage of string chars that are uppercase
    - percentage of string chars that are neither

  -----------------------------------EXAMPLES----------------------------------
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  - define function `letterPercentages` that takes 1 string arg as param `str`
  - declare obj `charsPercentageObj` with 3 key value pairs with the following keys initialized to 0
    - `uppercase`
    - `lowercase`
    - `neither`
  - split string parameter into array of chars `charsArr`
  - itetate through `charsArr` and on each iteration
    if char is lowercase letter, add 1 to the value of `lowercase` key in `obj`
    else if char is uppercase letter, add 1 to the value of `uppercase` key in `obj`
    else add 1 to the value of `neither` key in `obj`
  - once all iterations are completed, take the value of each key and divide by
    length of `str`, then format value to 2 decimal places
  - return `obj`

  -------------------------------CODE WITH INTENT------------------------------
  **********************************END PEDAC**********************************
*/

const letterPercentages = (str) => {
  const charsPercentageObj = { lowercase: 0, uppercase: 0, neither: 0 };
  const charsArr = str.split("");
  charsArr.forEach((item) => {
    if (item.match(/[a-z]/)) {
      charsPercentageObj.lowercase += 1;
    } else if (item.match(/[A-Z]/)) {
      charsPercentageObj.uppercase += 1;
    } else {
      charsPercentageObj.neither += 1;
    }
  });

  // charsPercentageObj.lowercase = ((charsPercentageObj.lowercase / str.length) * 100).toFixed(2);
  // charsPercentageObj.uppercase = ((charsPercentageObj.uppercase / str.length) * 100).toFixed(2);
  // charsPercentageObj.neither = ((charsPercentageObj.neither / str.length) * 100).toFixed(2);

  for (let key in charsPercentageObj) {
    let val = charsPercentageObj[key];
    val = ((val / str.length) * 100).toFixed(2);
  }

  // console.log(charsPercentageObj);
  return charsPercentageObj;
};

letterPercentages("abCdef 123");
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages("AbCd +Ef");
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages("123");
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
