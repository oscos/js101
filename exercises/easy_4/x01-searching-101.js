/*
  Created: 03/25/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 4 > 


  Instructions:

  Write a program that solicits six numbers from the user and logs a message 
  that describes whether the sixth number appears among the first five numbers.

  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------

  Input: Number
  Output: log string

  ----------------------------------RULES--------------------------------------

  Explicit: 
    Given number

  Implicit: 

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  Given 6 numbers, 1 at a time, determine if the last number is in the first 5
  -----------------------------------EXAMPLES----------------------------------
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  - Create function `checkForNum` that takes no parameters
  - declare a variable `arr` initialized to an empty array
  - iterate from 0 to 5 and on each iteration:
    - ask the user to pick a random number and save each response to `arr`
      - declare a variable `numInput`, initialized to the users response
      - save `numInput` to the end of `arr`
  - check to see if last element matches any of the first 5 elements 
    - if number is included
      - log a message indicating the number appears in the list of inputs
    - else 
      - log a messaing indicating the number does not exiss in the list of inptus.
  -------------------------------CODE WITH INTENT------------------------------

  **********************************END PEDAC**********************************
*/

//
const checkforNum = () => {
  let arr = [];
  let rlSync = require("readline-sync");

  for (let i = 0; i < 6; i += 1) {
    let numInput = rlSync.question("Pick a number?\n");
    arr.push(numInput);
  }
  if (arr.slice(0, 5).includes(arr[5])) {
    console.log(
      `The number ${arr[5]} appears in ${arr[0]}, ${arr[1]}, ${arr[2]}, ${arr[3]}, ${arr[4]}.`
    );
  } else {
    console.log(
      `The number ${arr[5]} does not appear in ${arr[0]}, ${arr[1]}, ${arr[2]}, ${arr[3]}, ${arr[4]}.`
    );
  }
};

checkforNum();
