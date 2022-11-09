/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.


*/


/*Plan 
- create return obj
- handle empty string case 
- walk through input string 
- if current item isn't present is return obj
- create property with item as key and 1 as count
- else add one to property with cur item as key
*/

function count (string) {  
  
  let obj = {}; 
  
  if (string.length < 1) return obj; 
  else {
    
    string.split("").forEach((char) =>{
      
      if (obj.hasOwnProperty(char) !== true){
        obj[char] = 1 ; 
      } else {
        obj[char] += 1 ; 
      }
      
      console.log('obj', obj); 
    })
  }
   return obj ;
}
