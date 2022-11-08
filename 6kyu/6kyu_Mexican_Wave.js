/*
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. 
You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
*/

/* Plan 
- Account for invalid input
- transvers input string one char at a time 
- each step take snapshot of string with current item capitalised
- except if current item is empty 
*/

function wave(str){
  
  if (str.length < 1) return []; 
  
  let snapshots = []; 
  
  str.split('').forEach((item, index, array) => {
    
    if (item !== " "){
      let snapArr = [...array]; 
      snapArr[index] = snapArr[index].toUpperCase(); 
      
      snapshots.push(snapArr.join('')); 
    }
    
  })
  
  return snapshots
}
