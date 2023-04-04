/*
  Created: 04/01/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 7 > Inventory Item Availability

  Instructions:

  Building on the previous exercise, write a function that returns true or false 
  based on whether or not an inventory item is available. As before, the function 
  takes two arguments: an inventory item and a list of transactions. The function 
  should return true only if the sum of the quantity values of the item's transactions 
  is greater than zero. Notice that there is a movement property in each transaction 
  object. A movement value of 'out' will decrease the item's quantity.

  You may (and should) use the transactionsFor function from the previous exercise.

  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------
  Input: Array

  Output: Boolean
  ----------------------------------RULES--------------------------------------
  Explicit: 
    - Non empty array

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

const transactionsFor = (num, arr) => {
  let result = arr.filter((item) => {
    if (item["id"] === num) {
      return item;
    }
  });

  // console.log(result);
  return result;
};

const isItemAvailable = (num, arr) => {
  let sum = 0;
  let arr2 = transactionsFor(num, arr);

  arr2.forEach((obj) => {
    if (obj.movement === "in") {
      sum += obj.quantity;
    } else {
      sum -= obj.quantity;
    }
  });

  console.log(sum > 0);
  return sum > 0;
};

let transactions = [
  { id: 101, movement: "in", quantity: 5 },
  { id: 105, movement: "in", quantity: 10 },
  { id: 102, movement: "out", quantity: 17 },
  { id: 101, movement: "in", quantity: 12 },
  { id: 103, movement: "out", quantity: 20 },
  { id: 102, movement: "out", quantity: 15 },
  { id: 105, movement: "in", quantity: 25 },
  { id: 101, movement: "out", quantity: 18 },
  { id: 102, movement: "in", quantity: 22 },
  { id: 103, movement: "out", quantity: 15 },
];

isItemAvailable(101, transactions); // false
isItemAvailable(103, transactions); // false
isItemAvailable(105, transactions); // true
