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
  - declare a variable `numbersArr` initialized to an empty array
  - iterate 6 times and each time request a number from user
    - for the first 5 iterations
      - save the user response to `numbersArr`
    - for 6th iteration
      - check if response is included in `numbersArr`
        - if number is included
          - log a message indicating the number appears in the list of inputs
        - if number is NOT included
          - log a messaing indicating the number does not exiss in the list of inptus.

  -------------------------------CODE WITH INTENT------------------------------

  **********************************END PEDAC**********************************
*/

const checkforNum = () => {
  let arr = [];
  let rlSync = require("readline-sync");

  for (let i = 0; i < 5; i += 1) {
    let numInput = rlSync.question("Pick a number?\n");
    if (i < 5) {
      numbersArr.push(numInput);
    } else {
      if (numbersArr.includes(numInput)) {
        console.log(
          `The number ${inputNum} appears in ${arr[0]}, ${arr[1]}, ${arr[2]}, ${arr[3]}, ${arr[4]}.`
        );
      } else {
        console.log(
          `The number ${inputNum} does not appear in ${arr[0]}, ${arr[1]}, ${arr[2]}, ${arr[3]}, ${arr[4]}.`
        );
      }
    }
  }
};
