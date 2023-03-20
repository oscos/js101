/*
  Created: 03/18/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 2 > 

  Instructions:

*/

/*
  *****************************START PEDAC*****************************
  ---------------------------PROBLEM-----------------------------------

  Input: Str
  Output: log String

  ---------------------------RULES--------------------------------------
  Explicit: 
    - String
    - log String using string interpolation
  Implicit: 

  EdgeCases: 
    i.e.
    - empty or null or None values 
      - Yes
    - zero or negative values

  --------------------------MENTAL MODEL---------------------------------
  prompt user for name. 
  if user name conatins `!` at the end of the name, 
  then output the greeting followed by a question all in uppercase 
  otherwise output greeting.
  --------------------------EXAMPLES-------------------------------------
  --------------------------DATA STRUCTURES------------------------------
  --------------------------ALGORITHM------------------------------------
  - define function `greeting` with zero parameters
  - declare a variable `nameInput` initialized to a prompt containing"
    - "What's your name?\n"
  - declare variable `greet`, initialized to empty string
  - if user input ends with `!`: 
    - reassign `greet` to the return value of concatenating
      with 1 space as delimiter, to the following:
      - the String "Hello" 
      - followed by the variable `nameInput`
      - followed by the String, "Why are we screaming?"
    - transform all the characters in `greet` to uppercase
  - otherwise if the user input does not contain `!`, 
    - reassign `greet` to the return value of concatenating
      with 1 space as delimiter, to the following:
      - the String "Hello" 
      - followed by the variable `nameInput`
  - console.log(greet);
  - outside the function `greeting`, invoke the function with zero arguments.
  --------------------------CODE WITH INTENT-----------------------------

  *****************************END PEDAC*********************************
*/

const greeting = () => {
  let rlSync = require("readline-sync");
  let nameInput = rlSync.question("What's your name?\n");

  let greet = "";

  if (nameInput.endsWith("!")) {
    greet = `Hello, ${nameInput} Why are we screaming?`;
    greet = greet.toLocaleUpperCase();
  } else {
    greet = `Hello, ${nameInput}!`;
  }

  console.log(greet);
};

greeting();
