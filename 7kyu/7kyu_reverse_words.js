
/* 
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/
function reverseWords(str) {
  let arrRevStr = []; 
  let arrStr = str.split(" "); 
  arrStr.forEach((word)=> {
    arrRevStr.push(word.split("").reverse().join(""))
  })
  
  return arrRevStr.join(" "); 
}
