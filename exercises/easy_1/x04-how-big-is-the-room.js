/*
  Created: 03/17/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 1 > How big is the room?

  Instructions:

  Build a program that asks the user to enter the length and width of a room in meters, 
  and then logs the area of the room to the console in both square meters and square feet.

  Note: 1 square meter == 10.7639 square feet

  Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

  Example:
*/

// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The area of the room is 70.00 square meters (753.47 square feet).

const calcRoomSize = (xLength, yWidth) => {
  let mtSize = xLength * yWidth;
  let ftSize = mtSize * 10.7639;
  console.log(
    `The area of the room is ${mtSize.toFixed(
      2
    )} square meters (${ftSize.toFixed(2)} square feet).`
  );
};

console.log("Enter the length of the room in meters:");
console.log("Enter the width of the room in meters:");
console.log(calcRoomSize(10, 20));
