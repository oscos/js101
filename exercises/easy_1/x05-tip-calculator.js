/*
  Created: 03/17/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 1 > Tip Calculator

  Instructions:

  Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. 
  The program must compute the tip, and then log both the tip and the total amount of the bill 
  to the console. You can ignore input validation and assume that the user will enter numbers.

  Example:

  What is the bill? 200
  What is the tip percentage? 15

  The tip is $30.00
  The total is $230.00
  */

/*
--------------------------PROBLEM---------------------------------------
Create a simple tip calculator. The program should prompt for a bill amount 
and a tip rate. The program must compute the tip, and then log both the tip 
and the total amount of the bill to the console. You can ignore input 
validation and assume that the user will enter numbers.

Example:
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00

Input: 
  - bill amount (Number)
  - tip rate (Number)
Output:
  log: tip 
  log: total amount

---------------------------RULES---------------------------------------
Explicit: 
- assume user will enter numbers
Implicit: 

EdgeCases: 
  i.e.
  - empty or null or None values : No
  - zero or negative values: tip and amount can be zero or greater
  
--------------------------MENTAL MODEL------------------------------------
- given tip rate and bill amount calculate tip and total amount

--------------------------EXAMPLES-------------------------------------
tip: 15%
bill amount 100.00
then tip amount = 100 * (15/100)
total bill = bill amount + tip amount = 100 + 15
--------------------------ALGORITHM------------------------------------
- promt user for tip rate
- promt user for bill amount
- invoke function and pass tip rate and bill amount as arguments
- create a function that takes two Number parameters, that represent tip % and bill amount
- calculate tip rate:
  - tip argument / 100
- calculate the tip amount 
  - bill amount * tip rate
- calculate total bill 
  - add the tip amount to the bill amount

  log the tip amount and the total amouont to the console. see example provided above in problem
- invoke function
--------------------------PSEUDO CODE----------------------------------

--------------------------CODE WITH INTENT----------------------------------
*/

const  tipCal = (amount, tip) => {
  console.log("Bill amount: " + amount)
  console.log("Tip amount: " + tip)
  let tipRate = tip/100;
  let tipTotal = amount * tipRate;
  let totalBill = tipTotal + amount;
  console.log("Tip total: " + tipTotal);
  console.log("Total bill amount: " + totalBill);
}

console.log("What is the bill?");
console.log("What is the tip percentage?");

tipCal(100, 15);