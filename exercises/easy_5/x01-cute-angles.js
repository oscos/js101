/*
  Created: 03/27/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 5 > 


  Instructions:

  Write a function that takes a floating point number representing an angle 
  between 0 and 360 degrees and returns a string representing that angle in 
  degrees, minutes, and seconds. You should use a degree symbol (˚) to represent 
  degrees, a single quote (') to represent minutes, and a double quote (") to 
  represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.
  
  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------

  Input: floating number
  Output: return string

  ----------------------------------RULES--------------------------------------

  Explicit:
    - floating point
    - zero or greater
  Implicit: 

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values
      - yes, includes 0

  ---------------------------------MENTAL MODEL--------------------------------
  given floating point number convert to degrees, minutes, seconds
  -----------------------------------EXAMPLES----------------------------------
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  -------------------------------CODE WITH INTENT------------------------------

  **********************************END PEDAC**********************************
*/

function decimalConverter(num) {
  return (num % 1) * 60;
}

function formatNum(num) {
  return num < 10 ? `0${num}` : num;
}

const dms = (num) => {
  let degrees = Math.floor(num);

  let minutes = Math.floor(decimalConverter(num));

  let seconds = Math.floor(decimalConverter(decimalConverter(num)));

  return `${degrees}\u00B0${formatNum(minutes)}\'${formatNum(seconds)}\"`;
};

console.log(dms(30)); // 30°00'00"
console.log(dms(76.73)); // 76°43'48"
console.log(dms(254.6)); // 254°35'59"
console.log(dms(93.034773)); // 93°02'05"
console.log(dms(0)); // 0°00'00"
console.log(dms(360)); // 360°00'00" or 0°00'00"
