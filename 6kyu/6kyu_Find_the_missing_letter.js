/*
#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
*/
/* Plan
- identify the correct sequence 
  - create array of alphabet in the right order
  - take first leter of given array & length of given array 
  - use this to copy section from prev array and store 
- compare given sequence (missing) with captured sequence (whole)
  - loop through whole sequence 
  - check if item present in missing sequence 
  - if not set missing letter to item
*/


function findMissingLetter(array)
{
  let missingChar = ''; 
  
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
                    "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
                    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
 
  const firstChar = array[0];
  const indexFirstChar = alphabet.indexOf(firstChar);
  const lengthArr = array.length; 
  
  console.log('firstChar', firstChar);
  console.log('indexFirstChar', indexFirstChar);
  console.log('lengthArr', lengthArr);
  
  const correctSeq = alphabet.slice(indexFirstChar, indexFirstChar + lengthArr); 
  console.log('correctSeq', correctSeq);
  
  correctSeq.forEach((letter, index) => {
    console.log(array.indexOf(letter))
    if(array.indexOf(letter) === -1){
      missingChar = letter
    }
  })
  
  return missingChar;
}
