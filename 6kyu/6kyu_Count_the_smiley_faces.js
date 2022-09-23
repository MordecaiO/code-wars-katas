/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). 
Order of the face (eyes, nose, mouth) elements will always be the same.
*/ 
// smiley must contain eyes & smile 

/* Plan
- 
*/


function countSmileys(arr) { 
  
  const isValid = (string) => {
    
    if (string.length > 3 || string.length <= 0){
      return false
      
    } else if (string.length === 2){
      let twoChar = string.split(''); 
     return (twoChar[0] === ':' || twoChar[0] === ';') && 
       (twoChar[1] === ')' || twoChar[1] === 'D') ? 
       true : false
      
    } else {
      let threeChar = string.split('');
       return (threeChar[0] === ':' || threeChar[0] === ';') && 
       (threeChar[1] === '-' || threeChar[1] === '~') && 
         (threeChar[2] === ')' || threeChar[2] === 'D') ?
      true : false
    }
    
  }
  
  let counter = 0; 
  
  arr.forEach((smiley) => {
    if(isValid(smiley) === true){
      counter++
    }
  })
  
 
 return counter; 
}
