/*
  Created: 03/29/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 6 > Reverse It (Part 1)

  Instructions:

  Write a function that takes a string argument and returns a new string 
  containing the words from the string argument in reverse order.

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

const reverseWords = (str) => {
  let arr = str.split(" ").map((item) => {
    if (item.length >= 5) {
      return item.split("").reverse().join("");
    } else {
      return item;
    }
  });

  // console.log(arr);
  return arr.join(" ");
};

reverseWords("Professional"); // "lanoisseforP"
reverseWords("Walk around the block"); // "Walk dnuora the kcolb"
reverseWords("Launch School"); // "hcnuaL loohcS"
