/*
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, 
but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
*/

/* Plan 
- check if each letter repeats one by one 
- when checking exclude the letter itself 
- if no repeats found not down the letter 
- repeat 
- now look at your list of non repeating letters 
- take the first one and return it 
*/


function firstNonRepeatingLetter(s) {
   
  if(s.length === 1){
    return s
  }
  
  let letterArr = s.split(""); 
  let nonRepeatingChars = []; 
  
  letterArr.forEach((letter, index, array) => {
    
    let arr1 = array.slice(0, index);
    let arr2 = array.slice(index + 1);
    let testArr =  [...arr1, ...arr2]
    
    if (testArr.length){
      
      if (testArr.includes(letter.toLowerCase()) === false && testArr.includes(letter.toUpperCase()) === false  ) {
        nonRepeatingChars.push(letter);
      }
    }
  })
    
  return nonRepeatingChars.length >= 1 ? nonRepeatingChars[0] : "" ; 
  
  }
