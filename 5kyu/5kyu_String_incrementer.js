/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.


*/


/* 
write a function which when given a string creates a new string where a number at the end 
of the string is incremented by one. 
if there is no number at the end of the string append 1 to the end of the old string to create new str
if there are any zero's before the number at the end take all valid integers and consider them a number
*/

function incrementString (str) {
 
  // determine what the string contains 
  let alpha = false ; 
  let num = false; 
  let strArr = str.split("");
  
  strArr.forEach((x) => { 
    if (isNaN(parseInt(x)) ){alpha = true ;} 
    if (!isNaN(parseInt(x))){num = true ; } 
  })
  // if the string is all alphabetical chars 
  if (alpha && !num) return str + 1 ; 
  
  // if the string is all numeric chars
  if (!alpha && num){
    // numeric chars with/without leading zeros 
    const lastLeadZero = str.lastIndexOf("0"); 
    // no leading zeros
    if(lastLeadZero === -1){
      return (parseInt(str) + 1).toString()
    // leading zeros
    } else {
      let padLength = str.length;
      let numToIncr = str.slice(lastLeadZero + 1);
      numToIncr = (parseInt(numToIncr) + 1).toString()
      return numToIncr.padStart(padLength, 0);
    }
  }
  // if the string is both alphabetic and numeric
    if (alpha && num){
     
        let indexFirstNumChar = str.length - str.split("").reverse().findIndex((x) => isNaN(parseInt(x)))
        let numToIncr1 = str.slice(indexFirstNumChar);
        const lastLeadZero1 = numToIncr1.lastIndexOf("0");
          
      // if end section has no leading zeros
      if(lastLeadZero1 === -1){
      numToIncr1 =  (parseInt(numToIncr1) + 1).toString()
      return str.slice(0,indexFirstNumChar) + numToIncr1
        // if end section has leading zeros
    } else {
      let padLength = numToIncr1.length;
      let numToIncr = numToIncr1.slice(lastLeadZero1 + 1);
      let numToIncr2 = (parseInt(numToIncr1) + 1).toString()
     
      numToIncr2 = numToIncr2.padStart(padLength, 0); 
      return str.slice(0, indexFirstNumChar) + numToIncr2 ;
    }
}
}
