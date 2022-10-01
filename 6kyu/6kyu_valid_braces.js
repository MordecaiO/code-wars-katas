/*
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, 
and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False

*/
/*
- create var to store evaluated braces 
- create key obj for open braces 
- loop through given string of braces 
- if current item is open brace 
- add to store arrya 
- if closing brace 
- the last item added to store must be its corresponding open 
*/


function validBraces(braces){ 

  let store = []; 
  
  const key = {
    '(':')', 
      '{':'}',
        '[':']'
  }
   
  for (let i = 0; i < braces.length; i++){
    
    let brace = braces[i]; 
    console.log('brace', brace); 
    
    // if item is open brace
    if(key[brace]){
      store.push(brace);
      console.log('store', store);
    } // if item is close brace
    else {
      // check if item pairs with last unmatched open bracket
      if(brace !== key[store.pop()]){
        return false 
      }
    }
  }
 
  return store.length == 0

}
