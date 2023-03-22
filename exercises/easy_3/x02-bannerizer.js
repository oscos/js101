/*
  Created: 03/22/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 3 > 


  Instructions:

  Write a function that will take a short line of text, and write it to the 
  console log within a box.
  
  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------

  Input: string
  Output: log string

  ----------------------------------RULES--------------------------------------

  Explicit:

  Implicit: 

  EdgeCases: 
    i.e.
    - empty or null or None values
      -yes empty string
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  -----------------------------------EXAMPLES----------------------------------
    logInBox('To boldly go where no one has gone before.');
    +--------------------------------------------+
    |                                            |
    | To boldly go where no one has gone before. |
    |                                            |
    +--------------------------------------------+

    logInBox('');
    +--+
    |  |
    |  |
    |  |
    +--+
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  - define function `logInBox` that takes one String parameter `str`
  - declare variable `xPad` initialized to " " (One empty string)
  - declare variable `xPlus` intialized to "+"
  - declare variable `xDash` intialized to "-"
  - declare variable `xPipe` intialized to "|"
  - declare variable `strLength` initialized to the length of the `str` param
  - declare a variable `first` intialized to concatenating:
      - xPlus, xDash, (xDash repeated strLength times), xDash, xPlus
  - declare a variable `second` intialized to concatenating:
      - xPipe, xPad, (xPad repeated strLength times), xPad, xPipe
  - declare a variable `content` intialized to concatenating:
    - xPipe, xPad, `str`,xPad, xPipe
  - console.log(first)
  - console.log(second)
  - console.log(content)
  - console.log(second)
  - console.log(first)
  -------------------------------CODE WITH INTENT------------------------------

  **********************************END PEDAC**********************************
*/

const logInBox = (str) => {
  let xPad = " ";
  let xPlus = "+";
  let xDash = "-";
  let xPipe = "|";
  let strLength = str.length;
  let first = "".concat(xPlus, xDash, xDash.repeat(strLength), xDash, xPlus);
  let second = "".concat(xPipe, xPad, xPad.repeat(strLength), xPad, xPipe);
  let content = "".concat(xPipe, xPad, str, xPad, xPipe);
  console.log(first);
  console.log(second);
  console.log(content);
  console.log(second);
  console.log(first);
};

logInBox("");
logInBox("To boldly go where no one has gone before.");
