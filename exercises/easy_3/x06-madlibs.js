/*
  Created: 03/22/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 3 > Madlibs


  Instructions:

  Madlibs is a simple game where you create a story template with "blanks" for 
  words. You, or another player, then construct a list of words and place them 
  into the story, creating an often silly or funny story as a result.

  Create a simple madlib program that prompts for a noun, a verb, an adverb, and 
  an adjective, and injects them into a story that you create.

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
  Enter a noun: dog
  Enter a verb: walk
  Enter an adjective: blue
  Enter an adverb: quickly

  // console output
  Do you walk your blue dog quickly? That's hilarious!
  The blue dog walks quickly over the lazy dog.
  The dog quickly walks up blue Joe's turtle.
  
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  -------------------------------CODE WITH INTENT------------------------------

  **********************************END PEDAC**********************************
*/

const madlibs = () => {
  let rlSync = require("readline-sync");
  let noun = rlSync.question("Enter a noun:\n");
  let verb = rlSync.question("Enter a verb:\n");
  let adjective = rlSync.question("Enter an adjective:\n");
  let adverb = rlSync.question("Enter an adverb:\n");

  console.log(
    `Do you ${verb} your ${adjective} ${noun} quickly\? That\'s hilarious\!`
  );
  console.log(
    `The ${adjective} ${noun} walks ${adverb} over the lazy ${noun}.`
  );
  console.log(`The ${noun} ${adverb} walks up ${adjective} Joe's turtle.`);
};

madlibs();
