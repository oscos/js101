/*
  Created: 03/18/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > Easy 2 > Welcome Stranger

  Instructions:

  Create a function that takes 2 arguments, an array and an object. The array will 
  contain 2 or more elements that, when combined with adjoining spaces, will produce 
  a person's name. The object will contain two keys, "title" and "occupation", and 
  the appropriate values. Your function should return a greeting that uses the 
  person's full name, and mentions the person's title.

*/

/*
  *****************************START PEDAC*****************************
  ---------------------------PROBLEM-----------------------------------

  Input: Array, Object
  Output: return greeting

  ---------------------------RULES--------------------------------------
  Explicit: 
    Given array and object

  Implicit: 

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  --------------------------MENTAL MODEL---------------------------------
  Given an array and object, combine the values within the array, 
  with the values from the object to return a greeting
  --------------------------EXAMPLES-------------------------------------
  --------------------------DATA STRUCTURES------------------------------
  
  --------------------------ALGORITHM------------------------------------
  - define a function `greetings` that takes two parameters: 
    array, and object. 
  - use string interpolation to combine and return the values in the array 
    with the values from the object.
  --------------------------CODE WITH INTENT-----------------------------

  *****************************END PEDAC*********************************
*/

const greetings = (arr, obj) => {
  return `Hello, ${arr[0]} ${arr[1]} ${arr[2]}! Nice to have a ${obj["title"]} ${obj["occupation"]} around.`;
};

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
