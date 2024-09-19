/*
This kata requires you to write a function which merges two strings together. 
It does so by merging the end of the first string with the start of the second string together when they are an exact match.

"abcde" + "cdefgh" => "abcdefgh"
"abaab" + "aabab" => "abaabab"
"abc" + "def" => "abcdef"
"abc" + "abc" => "abc"
NOTE: The algorithm should always use the longest possible overlap.

"abaabaab" + "aabaabab" would be "abaabaabab" and not "abaabaabaabab"

*/
export const mergeStrings = (first: string, second: string): string => {
  let overlap = 0 ; 
  
  for(let i=1; i<=first.length; i++){
    if(first.slice(-i) == second.slice(0,i)) overlap =i 
  }
  return first + second.slice(overlap)
}
