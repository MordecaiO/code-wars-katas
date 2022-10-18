/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []
*/


/* plan
- create empty arr to hold words which pass test 
- test is whether word is a substring of any words in a2
- loop through a1 
- create var to represent if substr is present set to false
- now loop through a2 
- if current a1 word is present in a2word 
- set var to true
- end inner loop 
- if var is true push a1word to test result arr 
- end outer loop 
- sort test result array items alphabetically
- return test result arr
*/

function inArray(array1,array2){
let matchedSubstrArr = []; 
  
  array1.forEach((substr) => {
    
    let substrIsPresent = false; 
    
    array2.forEach((str) => {
      if (str.includes(substr)) substrIsPresent = true; 
    }); 
    
    if (substrIsPresent) matchedSubstrArr.push(substr); 
  });
  
  return matchedSubstrArr.sort()
}
