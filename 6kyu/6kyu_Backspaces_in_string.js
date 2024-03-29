
/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

function cleanString(s) {
  
  let sArr = s.split(""); 
  let cleanedArr = []; 
  
  sArr.forEach((char)=>{
    if (char === "#") { 
      cleanedArr.pop() 
    } else{
      cleanedArr.push(char)
    } 
  })
 
  return cleanedArr.join("");
}
