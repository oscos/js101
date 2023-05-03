/*
  Created: 05/02/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Medium 2 > Unlucky Days

  Instructions:

  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------

  Some people believe that Fridays that fall on the 13th day of the month are 
  unlucky days. Write a function that takes a year as an argument and returns 
  the number of Friday the 13ths in that year. You may assume that the year is 
  greater than 1752, which is when the United Kingdom adopted the modern Gregorian 
  Calendar. You may also assume that the same calendar will remain in use for the 
  foreseeable future.

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

const fridayThe13ths = (year) => {
  let counter = 0;

  for (let month = 0; month < 12; month += 1) {
    // Months are zero indexed.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
    // MonthIndex: Integer value representing the month, beginning with 0 for January to 11 for December.
    const date = new Date(year, month, 13);

    // Friday is the 5th day of the week
    if (date.getDay() === 5) {
      counter++;
    }
  }

  return counter;
};

console.log(fridayThe13ths(1986) === 1);
console.log(fridayThe13ths(2015) === 3);
console.log(fridayThe13ths(2017) === 2);
