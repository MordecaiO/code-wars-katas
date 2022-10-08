/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/
// must start with #, first char of each word capitalised 
// result longer than 140chars is false, empty string as input = false

/* Plan 
- handle fail case => empty string 
- prep string to split into array 
- remove whitespaces at start and end 
- replace whitespaces in the middle 
- /\s+/g match all occurences of whitespace , g = global match 
- split string into array of words 
- loop through array 
- add hashtag to first item
- capitalise every item 
- join array 
- evaluate length of string 
- 
*/

function generateHashtag (str) {
  
  if (str.trim().length === 0){
    return false; 
  }
  
 let trimmedStr = str.trim(); 
  let equallySpacedStr = trimmedStr.replace(/\s+/g," "); 
  
  let arrStr = equallySpacedStr.split(' '); 
 
  arrStr.forEach((word, index) => {
    let wordArr = word.split(''); 
    let firstChar = word.charAt(0); 
    
    if(index === 0){
      wordArr[0] =  "#" + firstChar.toUpperCase(); 
    } else {
      wordArr[0] = firstChar.toUpperCase()
    }
    arrStr[index] = wordArr.join(''); 
  })
  
  let genHashtag = arrStr.join(''); 
   
  if (genHashtag.length > 140 ){
    return false
  } 
  
  return genHashtag; 
}
