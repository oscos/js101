/*
  Created: 03/18/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 1 > Multiples of 3 and 5

  Instructions:

  Write a function that computes the sum of all numbers between 1 and some other number, 
  inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, 
  the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

  You may assume that the number passed in is an integer greater than 1.
*/

/*
  *****************************START PEDAC*****************************
  ---------------------------PROBLEM-----------------------------------

  Input: number
  Output: return number

  ---------------------------RULES--------------------------------------
  Explicit: 
    - postive integer greater than 1
    - include given number in sum

  Implicit: 

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  --------------------------MENTAL MODEL---------------------------------
  Given number, calculate the sum of all numbers up to given number 
  ONLY if number is evenly divisible by 3 and 5
  --------------------------EXAMPLES-------------------------------------
    if num = 20 then 
      (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).
    return 98 
     
  --------------------------DATA STRUCTURES------------------------------
  --------------------------ALGORITHM------------------------------------
  - define `multisum` function that takes 1 number parameter
  - declare a variable `sum` and initialize it to 0
  - iterate from 1 to `number`
    - if iterator value is: 
      - evenly divisible by 3 OR
      - evently divisible by 5 then
      - reasign sum to itself + iterator i.e (sum += iterator).
  - return sum
  --------------------------CODE WITH INTENT-----------------------------

  *****************************END PEDAC*********************************
*/

const multisum = (num) => {
  let sum = 0;

  for (let i = 1; i <= num; i += 1) {
    if (i % 3 === 0 || i % 5 == 0) {
      sum += i;
    }
  }

  return sum;
};

console.log(multisum(3) === 3); // 3
console.log(multisum(5) === 8); // 8
console.log(multisum(10) === 33); // 33
console.log(multisum(1000) === 234168); // 234168
