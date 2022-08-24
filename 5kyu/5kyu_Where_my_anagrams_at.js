/*
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/
/* given two inputs a word and an array with words
    return an array of all the anagrams 
    empty array if there are none
*/

/* PLAN
comparing two strings - do they posses the same characters the same amount of times
function which counts num of each char in word - returns number 
funtion which returns true if a char is present in both words
use functions on every char in given single word 
if word passes for every single char push to anagrams array

*/
function anagrams(word, words) {
  let anagrams = []; 
  
  // counts how many times char occurs in string
  const countChar = (string, char) => {
    let count = string.split(char).length - 1; 
    return count; 
  }
  
  
  // returns true if char is present in both strings
  const presentInBoth = (str1, str2, char) => {
    return str1.includes(char) && str2.includes(char) ? true : false;
  }
  
  
 words.forEach((item) => {
 
   
   let status = 0; 
   console.log('status', status); 
   
   for (let i in item) {
     
     let currentChar = item[i]
     
     if ( countChar(item, currentChar) !== countChar(word, currentChar) || presentInBoth(item, word, currentChar) !== true) { 
     status++
     } 
   } 
    if (status === 0) {
     anagrams.push(item); 
   }
})
  return anagrams ; 
}
