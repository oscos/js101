/*
  Created: 04/22/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Medium 2 > Tri-Angles

  Instructions:

  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------

  A triangle is classified as follows:

  Right: One angle is a right angle (exactly 90 degrees).
  Acute: All three angles are less than 90 degrees.
  Obtuse: One angle is greater than 90 degrees.

  To be a valid triangle, the sum of the angles must be exactly 180 degrees, 
  and every angle must be greater than 0. If either of these conditions is not 
  satisfied, the triangle is invalid.

  Write a function that takes the three angles of a triangle as arguments and 
  returns one of the following four strings representing the triangle's 
  classification: 'right', 'acute', 'obtuse', or 'invalid'.

  You may assume that all angles have integer values, so you do not have to worry 
  about floating point errors. You may also assume that the arguments are in degrees.

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

const triangle = (num1, num2, num3) => {
  if (num1 === 0 || num2 === 0 || num3 === 0) return "invalid";
  if (num1 + num2 + num3 != 180) return "invalid";

  let counter90 = 0;
  let counterGreaterThan90 = 0;
  let counterLessThan90 = 0;

  const arr = [num1, num2, num3];

  arr.forEach((item) => {
    if (item === 90) {
      counter90 += 1;
    } else if (item > 90) {
      counterGreaterThan90 += 1;
    } else {
      counterLessThan90 += 1;
    }
  });

  if (counter90 === 1) {
    return "right";
  } else if (counterGreaterThan90 === 1) {
    return "obtuse";
  } else if (counterLessThan90 === 3) {
    return "acute";
  } else {
    return "invalid";
  }
};

console.log(triangle(60, 70, 50)); // "acute"
console.log(triangle(30, 90, 60)); // "right"
console.log(triangle(120, 50, 10)); // "obtuse"
console.log(triangle(0, 90, 90)); // "invalid"
console.log(triangle(50, 50, 50)); // "invalid"
