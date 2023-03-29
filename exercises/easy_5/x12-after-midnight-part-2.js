/*
  Created: 03/27/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 5 > After Midnight (Part 2)

  Instructions:

  As seen in the previous exercise, the time of day can be represented as the 
  number of minutes before or after midnight. If the number of minutes is 
  positive, the time is after midnight. If the number of minutes is negative, 
  the time is before midnight.

  Write two functions that each take a time of day in 24 hour format, and return 
  the number of minutes before and after midnight, respectively. Both functions 
  should return a value in the range 0..1439.

  You may not use javascript's Date class methods.

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

function convert_to_minutes(string, factor) {
  if (string == "24:00") return 0;

  let arr = string.split(":");
  let hours = arr[0];
  let minutes = arr[1];
  let total_minutes = parseInt(hours) * 60 + parseInt(minutes) * factor;
  // console.log(total_minutes);
  return total_minutes;
}

function afterMidnight(string) {
  return convert_to_minutes(string, 1);
}

function beforeMidnight(string) {
  return convert_to_minutes(string, -1);
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
