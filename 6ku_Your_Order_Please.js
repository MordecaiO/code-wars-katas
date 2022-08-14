/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
*/
/* Plan  
**Identify which words correspond to which numbers 
- split string into an array of words 
- create object to store word and equivalent number properties 
- loop through array of words 
- loop through characters in each word 
- check if the char is a number 
- if its a number create property in object, key = whole word & value equals number
- by the end of loops we should have an object with properties containing the word and corresponding number
**Put the words in order according to this 
- create an array with the object values by looping through object the array of values should be in order
- transform this array using map method 
*/



function order(words){
  let arrWords = words.split(" ");
  console.log('arrWords', arrWords);
 let obj = {};
  let returnArr = [];
  
  arrWords.forEach((word, index, wordsArr) => {
     console.log('word', word)
    
    word.split("").forEach((char, index, string) => {
      
      if (Number(char)){
        obj[char] = word ;
      }
    })
  })
  
  for (let number in obj){
   
    returnArr.push(obj[number]);
  }
return  returnArr.join(" ") 
}
