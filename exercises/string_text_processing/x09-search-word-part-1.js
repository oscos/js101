/*
  Created: 04/04/2023
  Updated:
  Launch School - Intro to Javascript
  JS101-JS119 - Small Problems > String and Text Processing > 

  Instructions:

  **********************************START PEDAC********************************
  -----------------------------------PROBLEM-----------------------------------

  Write a function that takes two arguments, a word and a string of text, and 
  returns an integer representing the number of times the word appears in the text.

  You may assume that the word and text inputs will always be provided, and that all 
  word breaks are spaces. Thus, some words will include punctuation such as periods 
  and commas. Also assume that the search is case-insensitive.

  Input:  2 strings
  Output: Number
  ----------------------------------RULES--------------------------------------
  Explicit:

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

// Solution 1:
function searchWord(searchWord, text) {
  const regex = new RegExp(`${searchWord}`, "gi");
  const arr = text.match(regex);

  // console.log(arr)
  return arr.length;
}

const text =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

searchWord("sed", text); // 3
