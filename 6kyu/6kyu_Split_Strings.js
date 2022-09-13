/*
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/
/*Plan
- find and store length of given string 
- if > 0 
- loop through string 
- insert separator every two items 
- push into arr 
- join array with separators 
- now split arr into pair 
- if last pair is only one letter 
- add underscore 
- return arr 
*/


function solution(str){
  let arr = []; 
  const length = str.length; 
  console.log('length', length);
  
  if ( length > 0){
    
  
  let index = 0; 
 for (const letter of str){
  
     if(index > 0 && index < str.length -1  && index % 2 !==0){
       arr.push( letter + ','); 
     } else {arr.push(letter)}
   
   index++
 }
  let strWithSeperator = arr.join('')
  let arrStrRemovedSeperator = strWithSeperator.split(','); 
  let finalPair = arrStrRemovedSeperator[arrStrRemovedSeperator.length -1];
  if(arrStrRemovedSeperator.length >  0 && finalPair.length < 2){
     arrStrRemovedSeperator[arrStrRemovedSeperator.length -1] = finalPair + '_'
  }
   
  
  console.log('arrStrRemovedSeperator',  arrStrRemovedSeperator)
    
  return arrStrRemovedSeperator; 
  } 
  return arr
}

/*Improvements
- Simple for loop as opposed to for of loop 
- I don't have to iterate one at a time e.g. counter =+2 etc 

*/
