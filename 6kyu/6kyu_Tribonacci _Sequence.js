/* Plan
function must take sum of last three items and add to sequence 
n = number of items 
n -3 = amount of times a new number is added 
define for loop (must be lesser than n -3 )
define var for sum 
sum first 3 items from the end of the array 
push this value into the array, clear sum variable
create unique cases for when n < 3
return arr 
*/


function tribonacci(signature,n){
  
  for (let i = 3; i < n; i++){
  let sum = signature[signature.length-1] + signature[signature.length-2] + signature[signature.length-3]; 
    signature.push(sum);
  }
if (n === 1){
  return [signature[0]];
} else if (n === 2) {
  return  [signature[0], signature[1]]; 
} else if (n === 0) {
  return []
} else { return signature; }
}
// slice from 0 to n could have been a better solution than creating if statement for all cases. 
