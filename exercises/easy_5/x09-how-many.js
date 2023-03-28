/*
  Created: 03/27/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 5 > How Many?

  Instructions:

  Write a function that counts the number of occurrences of each element in a 
  given array. Once counted, log each element alongside the number of 
  occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

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

const countOccurrences = (arr) => {
  let obj = {};
  arr.forEach((item) => {
    let k = Object.keys(obj);
    if (k.includes(item)) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
  });

  console.log(obj);
  return obj;
};

let vehicles = [
  "car",
  "car",
  "truck",
  "car",
  "SUV",
  "truck",
  "motorcycle",
  "motorcycle",
  "car",
  "truck",
];

countOccurrences(vehicles);

/*
// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/
