/*
  Created: 03/17/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 1 > Sum or Product of Consecutive Integers

  Instructions:

  Write a program that asks the user to enter an integer greater than 0, then asks whether 
  the user wants to determine the sum or the product of all numbers between 1 and the 
  entered integer, inclusive.

  Examples:

  Please enter an integer greater than 0: 5
  Enter "s" to compute the sum, or "p" to compute the product. s

  The sum of the integers between 1 and 5 is 15.

  Please enter an integer greater than 0: 6
  Enter "s" to compute the sum, or "p" to compute the product. p

  The product of the integers between 1 and 6 is 720.

*/
/*****************************START-PEDAC****************************/
/*
---------------------------PROBLEM-----------------------------------

Input: Number, and String 
Output: log to console, a message with the sum or product

---------------------------RULES--------------------------------------
Explicit: 
  - Given Number to sum or multiply
  - Given String of 1 charactor s that indicates sum calculation OR
  - Given String of 1 charactor p that indicates product calculation
  - Given Number is greaer than zero
Implicit: 

EdgeCases: 
	i.e.
	- empty or null or None values
	- zero or negative values

--------------------------MENTAL-MODEL---------------------------------
Ask user for number input to get list of integers up to and including
the number given. 
Ask user for string input `s` or `p`. if s compute sum. if p 
compute product.
--------------------------EXAMPLES-------------------------------------
given 5 and s:
list of numbers 1,2,3,4,5
number = 0
number = number + 1 // 1
number = number + 2 // 3
number = number + 3 // 6
number = number + 4 // 10
number = number + 5 // 15

given 6 and p:
list of numbers 1,2,3,4,5
number = 1
number = number * 1 // 1
number = number * 2 // 2
number = number * 3 // 6
number = number * 4 // 24
number = number * 5 // 120 
number = number * 6 // 720

--------------------------DATA-STRUCTURES------------------------------
--------------------------ALGORITHM------------------------------------
- ask user for input: pick a number
- ask user for input: pick p for product or s for sum
- create function that takes 1 number parameter and 1 string parameter
- create an empty list `numbers`
- iterate from 1 to number passed as argument, saving each element 
to the `numbers` ist
- create a variable `num` and assign it to -1
- if second argument is `s`, 
  - reassign num to 0
  - iterate through numbers list and for each value:
    - set num equal to num + value
- else if second argument passed in is `p`
  - reassign num to 1
  - iterate through numbers list and for each value:
    - set num equal to num * value
- after iterating through all the numbers:
  - log num to the console, using the text provided in the example.
- return num
- invoke the function with passed in arguments
--------------------------CODE-WITH-INTENT-----------------------------
*/
/*****************************END-PEDAC*******************************/

const calculator = (xNum, yStr) => {
  let numbers = [];

  let counter = 1;
  while (counter <= xNum) {
    numbers.push(counter);
    counter += 1;
  }

  let num = -1;
  if (yStr === "s") {
    num = 0;
    numbers.forEach((value) => {
      num += value;
    });
  } else {
    num = 1;
    numbers.forEach((value) => {
      num *= value;
    });
  }

  return num;
};

// console.log(calculator(5, "s"));
// console.log(calculator(6, "p"));

console.log("Please enter an integer greater than 0.");
console.log('Enter "s" to compute the sum, or "p" to compute the product.');

console.log(
  `The sum of the integers between 1 and ${5} is ${calculator(5, "s")}.`
);
console.log(
  `The product of the integers between 1 and ${6} is ${calculator(6, "p")}.`
);
