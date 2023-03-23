/*
  Created: 03/22/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 3 > Right Triangles


  Instructions:

  Write a function that takes a positive integer, n, as an argument and logs a 
  right triangle whose sides each have n stars. The hypotenuse of the triangle 
  (the diagonal side in the images below) should have one end at the lower-left 
  of the triangle, and the other end at the upper-right.
  
  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------

  Input: Integer
  Output: log string

  ----------------------------------RULES--------------------------------------

  Explicit:
    - Given Positive Integer
    - log strings

  Implicit: 

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  -----------------------------------EXAMPLES----------------------------------
  triangle(5);
       * // 4 spaces + 1 star
      ** // 3 spaces + 2 stars
     *** // 2 spaces + 3 stars
    **** // 1 space  + 4 stars
   ***** // 0 space  + 5 stars

  triangle(9);

            *
           **
          ***
         ****
        *****
       ******
      *******
     ********
    *********
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  - define function `triangle` that takes one Number parameter `num`
  - declare variable `xPad` initialized to one space " "
  - declare variable `xStar` initialized to one space "*"
  - iterate from 1 to num and on each iteration, log in one line:
    - # of spaces repeated num - iterator value AND 
    - # of stars repeated iterator value, 
  -------------------------------CODE WITH INTENT------------------------------

  **********************************END PEDAC**********************************
*/

// Solution 1:
const triangle = (num) => {
  let xPad = " ";
  let xStar = "*";
  for (let i = 1; i <= num; i += 1) {
    console.log(xPad.repeat(num - i), xStar.repeat(i));
  }
};

triangle(5);
triangle(9);
