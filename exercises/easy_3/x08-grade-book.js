/*
  Created: 03/23/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 3 > Grade Book


  Instructions:

  Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

  Numerical score letter grade list:

  90 <= score <= 100: 'A'
  80 <= score < 90: 'B'
  70 <= score < 80: 'C'
  60 <= score < 70: 'D'
  0 <= score < 60: 'F'

  Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.
  
  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------

  Input: Three Number parameters
  Output: returns String

  ----------------------------------RULES--------------------------------------

  Explicit:
    - Given three postive integers between 0 and 100 parameters
    - Return letter  

  Implicit: 

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  -----------------------------------EXAMPLES----------------------------------
  getGrade(95, 90, 93);    // "A"
  getGrade(50, 50, 95);    // "D"
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  - define function `getGrade` with three number parameters `num1`, `num2`, `num3`
  - declare variable `avg` intialized to the return value of suming the three
    number parameters and dividing by 3
  - compare avg as follow
    - 90 <= avg <= 100: 'A'
    - 80 <= avg < 90: 'B'
    - 70 <= avg < 80: 'C'
    - 60 <= avg < 70: 'D'
    - 0 <=  avg < 60: 'F'
  -------------------------------CODE WITH INTENT------------------------------

  **********************************END PEDAC**********************************
*/

const getGrade = (num1, num2, num3) => {
  let avg = (num1 + num2 + num3) / 3;

  switch (true) {
    case avg < 60:
      return "F";
    case avg < 70:
      return "D";
    case avg < 80:
      return "C";
    case avg < 90:
      return "B";
    case avg <= 100:
      return "A";
    default:
      "None Found";
  }
};

// console.log(getGrade(50, 50, 95));
console.log(getGrade(95, 90, 93) === "A");
console.log(getGrade(50, 50, 95) === "D");
