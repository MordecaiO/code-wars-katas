/*
A pangram is a sentence that contains every single letter of the alphabet at least once.
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

// check if string contains at least one if every
// single letter in the alphabet 

/* Plan 
- change string to lowercase 
- create array of alphabet 
- loop through alphabet array 
- if current letter is not present in string
- return false 
- return true 
*/



function isPangram(string){
  
  let lowCaseStr = string.toLowerCase(); 
  
  console.log('lowCaseStr', lowCaseStr); 
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let alphaArr = alphabet.split('');
  console.log('alphaArr', alphaArr);
  
 for( let i = 0; i < alphaArr.length; i++){
   
if (lowCaseStr.indexOf(alphaArr[i]) < 0 ){
  
return false   
 }

}
  return true
}
