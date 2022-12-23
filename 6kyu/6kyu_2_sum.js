/*
Write a function that takes an array of numbers (integers for the tests) and a target number. 
It should find two different items in the array that, when added together, give the target value. 
The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, 
and all of the items will be numbers; target will always be the sum of two different items from that array).
*/

// BRUTE FORCE 

function twoSum(numbers, target) {
  
  let arr = []; 
  let i = null;
  let j = null; 
 numbers.forEach((num, numI) => { 
 
   numbers.forEach((num2,num2I) => {
     
     if(num + num2 === target && numI !== num2I) {
      i = numI; 
      j = num2I
     }
   })
 })
  
  return [i,j]
}
