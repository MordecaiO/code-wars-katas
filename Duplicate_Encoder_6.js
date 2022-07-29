// The goal of this exercise is to convert a string to a new string where each character in the new string 
// is "(" if that character appears only once in the original string, or ")" 
// if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
/*
Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/

// take string and count the instances of each indv char
// use object to store values
  // split into arr > for each loop with filter method on array > length of filtered arr = count
// take string and evaluate each char using object properties
// if char has a count > 1 remove and replace with corresponding bracket
  // array/obj notation and splice to replace 
// return string of brackets 


function duplicateEncode(word){
   let countObj = {}; 
  let charsArr = word.split(''); 
  console.log('charsArr', charsArr); 
  
  charsArr.forEach((element, index, arr) => { 
    if (countObj[element]){
      countObjj[element]++
    } else { countObj[element] = 1;}
    
    console.log('countObj', countObj);
    console.log('charsArr', charsArr);
  })
  
  
 return charsArr.join('')
}
