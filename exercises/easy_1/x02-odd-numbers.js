/*
  Created: 03/17/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 1 > Odd Numbers

  Instructions:

  Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.
*/

const oddNum = () => {
  for (let i = 1; i < 100; i += 1) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
};

oddNum();
