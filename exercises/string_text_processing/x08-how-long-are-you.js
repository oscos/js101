/*
  Created: 04/04/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > String and Text Processing > How long are you?

  Instructions:

  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------
  Write a function that takes a string as an argument and returns an array that 
  contains every word from the string, with each word followed by a space and 
  the word's length. If the argument is an empty string or if no argument is 
  passed, the function should return an empty array.

  You may assume that every pair of words in the string will be separated by a 
  single space.

  Input: String

  Output: return Array
  ----------------------------------RULES--------------------------------------
  Explicit:
  - returns an array that contains every word from the string, 
  - with each word followed by a space and the word's length. 
  - If the argument is an empty string or 
    - if no argument is passed, the function should return an empty array.

  Implicit: 
  - default parameter for function
  - string can be empty

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  Given string, break into words, delimited by space and return array with each 
  word followed by length of each word (with space)
  -----------------------------------EXAMPLES----------------------------------
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  - define `wordLengths` function that takes 1 string parameter `str` default to 
    empty string
  - declare array variable `result` initialized to empty array
  - split string into array of words `words`
  - iterate through `words` and for each element:
    - concatenate the word with the word length and append to end of `result`
  - return `result`
  -------------------------------CODE WITH INTENT------------------------------
  **********************************END PEDAC**********************************
*/

// Solution 1:
const wordLengths = (str = "") => {
  if (str.length === 0) return [];

  const result = [];
  const words = str.split(" ");
  words.forEach((word) => {
    result.push(word.concat(" ", word.length));
  });
  console.log(result);
  return result;
};

// Solution 2:
const wordLengths = (str = "") => {
  if (str.length === 0) return [];
  return str.split(" ").map((word) => word.concat(" ", word.length));
};

console.log(wordLengths("cow sheep chicken"));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths("baseball hot dogs and apple pie"));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths("Supercalifragilisticexpialidocious"));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths("")); // []
console.log(wordLengths()); // []
