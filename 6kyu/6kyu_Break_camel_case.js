 /*
 Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
 */
/*plan
- check each char one by one in order
- at the first capital letter that appears in the word
- split that word from there 
- if no capital word found return word
- if word is empty return empty word
*/



function solution(string) {
  
  if (string.length < 1) return string;
  
  let breakIndex = []; 
  
  let arrChars = string.split(''); 
  
  arrChars.forEach((char, index, array) => {
   
    if(char.toUpperCase() === char){
     breakIndex.push(index)  
    } 
  })
  
  
  breakIndex.forEach((x, index) => {
    arrChars.splice(x + index, 0, ' '); 
  })
   
   
  return arrChars.join('')
}
