/*
  Created: 03/23/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 3 > What Century is That?


  Instructions:

  Write a function that takes a year as input and returns the century. The
  return value should be a string that begins with the century number, and
  ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

  New centuries begin in years that end with 01. So, the years 1901 - 2000 
  comprise the 20th century.
  
  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------

  Input: Number
  Output: return String

  ----------------------------------RULES--------------------------------------

  Explicit:
    -Given positive integer

  Implicit: 

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------

  -----------------------------------EXAMPLES----------------------------------
  1st, 2nd, 3rd, 4th, 5th, 6th, 7th, 8th, 9th, 10th,
  11th,12th,13th,14th,15th,16th,17th,18th,19th,20th 
  21st,22nd,23rd,24th,25th,26th,27th,28th,29th,30th 
  
  Need to account for 1st, 2nd, 3rd numbers of every set
  Need to account for 11th,12th,13th as they do not match the pattern

  Math.ceil(2000) => 20
  Math.ceil(2001) => 21
  Math.ceil(265)  => 3
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  - Define a function `century` that takes one number parameter `num`
  - define a variable `century` initalized to the return value of 
    dividing num by 100 and rounding up
  - define a variable `centuryText` initialized to the string representation 
    of `century`
  - if century ends in 11 then add "th" to `centuryText`
  - if century ends in 12 then add "th" to `centuryText`
  - if century ends in 13 then add "th" to `centuryText`
  - if century ends in 1 then add "st" to `centuryText`
  - if century ends in 2 then add "nd" to `centuryText`
  - if century ends in 3 then add "rd" to `centuryText`
  - else add "th" to `centuryText`
  - return `centuryText`
  -------------------------------CODE WITH INTENT------------------------------

  **********************************END PEDAC**********************************
*/

const century = (num) => {
  let century = Math.ceil(num / 100);
  centuryText = century.toString();
  // console.log(centuryText);

  switch (true) {
    case centuryText.endsWith("13"):
      return centuryText + "th";
    case centuryText.endsWith("12"):
      return centuryText + "th";
    case centuryText.endsWith("11"):
      return centuryText + "th";
    case centuryText.endsWith("1"):
      return centuryText + "st";
    case centuryText.endsWith("2"):
      return centuryText + "nd";
    case centuryText.endsWith("3"):
      return centuryText + "rd";
    default:
      return centuryText + "th";
  }
};

// console.log(century(2000))

console.log(century(2000) === "20th");
console.log(century(2001) === "21st");
console.log(century(1965) === "20th");
console.log(century(256) === "3rd");
console.log(century(5) === "1st");
console.log(century(10103) === "102nd");
console.log(century(1052) === "11th");
console.log(century(1127) === "12th");
console.log(century(11201) === "113th");
