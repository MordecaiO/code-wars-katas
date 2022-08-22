/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/


/* Plan
- determine which delimiter is being used in str 
- create function which.......
- take str and split words by delimiter 
- change the first char of each word to uppercase (except first word which stays the same always)
- join the words back together with no delimeter
- depending on which delimiter, apply function respectively
*/



function toCamelCase(str){

  let camelCase = (str, delimiter) => {
    
    let arrWords = str.split(delimiter);
    
   const arrCamelCaseWords = arrWords.map((word, index) => {
     let firstLetter = word.charAt(0); 
      if(index > 0){
        return word.replace(firstLetter, firstLetter.toUpperCase());
      } else { return word }
    })
    return arrCamelCaseWords.join('');
  }
  
return str.includes("-") ? camelCase(str, "-") : camelCase(str, "_");
}
