/*
  Created: 04/06/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > String and Text Processing > Lettercase Counter

  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------
  Write a function that takes a string as an argument and returns that string with 
  the first character of every word capitalized and all subsequent characters in 
  lowercase.

  You may assume that a word is any sequence of non-whitespace characters.

  Input: String

  Output: Returns string
  ----------------------------------RULES--------------------------------------
  Explicit:
  - returns that string with 
    - the first character of every word capitalized and 
    - all subsequent characters in lowercase.

  Implicit: 
    - words that begin with non letter chars can be processed the same
      as capitalize won't affect it.

  EdgeCases: 
    i.e.
    - empty or null or None values
    - zero or negative values

  ---------------------------------MENTAL MODEL--------------------------------
  Given string, split into individual words by using space as delimeter.
  Capitalize every first character of every word
  -----------------------------------EXAMPLES----------------------------------
  wordCap('four score and seven');       // "Four Score And Seven"
  wordCap('the javaScript language');    // "The Javascript Language"
  wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'
  --------------------------------DATA STRUCTURES------------------------------
  -----------------------------------ALGORITHM---------------------------------
  - define a function `wordCap` that takes one string as parameter `str`
  - declare `newWord` initialized to empty string.
  - declare `result` initialized to empty array.
  - convert string into array of `words` using space as delimitter
  - iterate through `words` and assign current element `word`
    - split word into individual chars and assign to array `word`
    - iterate through `word` and assign current element `char`
      - if `char` index is 0
        - convert char to uppercae
      - else convert to lowercase
        - convert char to uppercase
      - append char to newWord
    - append `word` to `result` array
    - reassign newWord to empty string
  - conatenate all the words in the returned array `result`
  - return `result`
  -------------------------------CODE WITH INTENT------------------------------
  **********************************END PEDAC**********************************
*/

// Solution 1
const wordCap = (str) => {
  const result = [];
  let newWord = "";
  let words = str.split(" ");
  words.forEach((word) => {
    let chars = word.split("");
    chars.forEach((char, index) => {
      if (index === 0) {
        newWord += char.toUpperCase();
      } else {
        newWord += char;
      }
    });
    result.push(newWord);
    newWord = "";
  });
  console.log(result.join(" "));
  return result.join(" ");
};

wordCap("four score and seven"); // "Four Score And Seven"
wordCap("the javaScript language"); // "The Javascript Language"
wordCap('this is a "quoted" word'); // 'This Is A "quoted" Word'

// Solution 2: String.prototype.concat()
const wordCap2 = (str) => {
  let result = str.split(" ").map((word) => {
    return word[0].toUpperCase().concat(word.slice(1).toLowerCase());
  });
  console.log(result.join(" "));
  return result.join(" ");
};

wordCap2("four score and seven"); // "Four Score And Seven"
wordCap2("the javaScript language"); // "The Javascript Language"
wordCap2('this is a "quoted" word'); // 'This Is A "quoted" Word'
