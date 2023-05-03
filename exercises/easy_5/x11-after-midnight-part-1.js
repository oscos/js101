/*
  Created: 03/27/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 5 > After Midnight (Part 1)


  Instructions:

  The time of day can be represented as the number of minutes before or after 
  midnight. If the number of minutes is positive, the time is after midnight. 
  If the number of minutes is negative, the time is before midnight.

  Write a function that takes a time using this minute-based format and returns 
  the time of day in 24 hour format (hh:mm). Your function should work with any 
  integer input.

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

const getMinutes = (num) => {
  while (num < 0) {
    num = 3600 + num;
  }
  return num % 60;
};

const getHours = (num) => {
  while (num < 0) {
    num = 1440 + num;
  }

  let result = Math.floor((1440 + num) / 60);
  return result % 24;
};

function formatNum(num) {
  return num < 10 ? `0${num}` : num;
}

const timeOfDay = (num) => {
  let minutes = getMinutes(num);

  let hours = getHours(num);

  return `${formatNum(hours)}:${formatNum(minutes)}`;
};

// additional solution added 05/02/2023 after reviewing other student solutions

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function formatNum(num) {
  return num < 10 ? `0${num}` : num;
}

function timeOfDay(num) {
  if (num < 0) {
    num = (num % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    num = num % MINUTES_PER_DAY;
  }

  let hours = Math.floor(num / MINUTES_PER_HOUR);
  let minutes = num % MINUTES_PER_HOUR;

  return `${formatNum(hours)}:${formatNum(minutes)}`;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
