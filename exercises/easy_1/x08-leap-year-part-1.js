/*
  Created: 03/18/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 1 > Leap Years (Part 1)

  Instructions:

  In the modern era under the Gregorian Calendar, leap years occur in every year 
  that is evenly divisible by 4, unless the year is also divisible by 100. 
  If the year is evenly divisible by 100, then it is not a leap year, unless the 
  year is also evenly divisible by 400.

  Assume this rule is valid for any year greater than year 0. Write a function 
  that takes any year greater than 0 as input and returns true if the year is a 
  leap year, or false if it is not a leap year.

*/

/*
*****************************START PEDAC*****************************
---------------------------PROBLEM-----------------------------------
Input:  
  - Number 
  - greater than 0
Output: 
  - Returns Boolean 
  - true if leap year, else false
---------------------------RULES--------------------------------------
Explicit: 
  - number is greater than 0

Implicit: 
  - numbers are positive Integers

EdgeCases: 
	i.e.
	- empty or null or None values
	- zero or negative values
--------------------------MENTAL MODEL---------------------------------
Given a number, determine if leap year and return true or false 
if number is :
  evenly divisible by 4 and
  evenly divisible by 100 and 
  evenly divisible by 400
  then its a leap year
else if number is 
  evenly divisible by 4 and 
  NOT evenly divisible by 100 and 
  then its a leap year 
else if number is divisible by 4, then its a leap year
otherwise if none of the conditions above then its not a leap year
--------------------------EXAMPLES-------------------------------------
--------------------------DATA STRUCTURES------------------------------
--------------------------ALGORITHM------------------------------------
- define a function `isLeapYear` that accepts a number as parameter
- declare a variable `flag` initialized to a `false` boolean value
- check:  
    - if the number is evenly divisible by 4 and 
    - if the number is evenly divisible by 100 and 
    - if the number is evenly divisible by 400 
    - then reassign `flag` to boolean `true`
    else
    - if the number is evenly divisible by 4 and 
    - if the number is NOT evenly divisible by 100
    - then reassign `flag` to boolean `true`

  - return flag;
--------------------------CODE WITH INTENT-----------------------------

*****************************END PEDAC*********************************
*/

const isLeapYear = (num) => {
  let flag = false;

  if (num % 4 === 0 && num % 100 === 0 && num % 400 === 0) {
    flag = true;
  } else if (num % 4 === 0 && !(num % 100 === 0)) {
    flag = true;
  }

  return flag;
};

console.log(isLeapYear(2016) === true);
console.log(isLeapYear(2015) === false);
console.log(isLeapYear(2100) === false);
console.log(isLeapYear(2400) === true);
console.log(isLeapYear(240000) === true);
console.log(isLeapYear(240001) === false);
console.log(isLeapYear(2000) === true);
console.log(isLeapYear(1900) === false);
console.log(isLeapYear(1752) === true);
console.log(isLeapYear(1700) === false);
console.log(isLeapYear(1) === false);
console.log(isLeapYear(100) === false);
console.log(isLeapYear(400) === true);
