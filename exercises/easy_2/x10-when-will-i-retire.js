/*
  Created: 03/19/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 2 > How Old is Teddy?

  Instructions:

  Build a program that randomly generates Teddy's age, and logs it to the console. 
  Have the age be a random number between 20 and 120 (inclusive).

*/

// Solution 1: If using readline
const retireAge = (age, retire_age) => {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  let remainingWorkYears = retire_age - age;
  let retireYear = currentYear + remainingWorkYears;

  console.log(`It\'s ${currentYear}. You will retire in ${retireYear}.`);
  console.log(`You only have ${remainingWorkYears} years to go.`);
};

let rlSync = require("readline-sync");
let ageInput = rlSync.question("What is your age?");
let retirementAgeInput = rlSync.question(
  "At what age would you like to retire?"
);

retireAge(ageInput, retirementAgeInput);

/*
// Solution 2: if not using realine
const retireAge = (age, retire_age) => {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  let remainingWorkYears = retire_age - age;
  let retireYear = currentYear + remainingWorkYears;

  console.log(`It\'s ${currentYear}. You will retire in ${retireYear}.`);
  console.log(`You only have ${remainingWorkYears} years to go.`);
};

console.log("What is your age?");
console.log("At what age would you like to retire?"); // 70
retireAge(46, 65);
*/
