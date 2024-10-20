/*
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. 
Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces,
return the length of the longest vowel substring. Vowels are any of aeiou.
*/


export function solve(s: string) {
  const vowels : string[] = ["a","e","i","o","u"];
  let count = 0; 
  for(let i=0; i<=s.length; i++){
    let j = 0; 
    while(vowels.includes(s[j+i])){
      j++ 
      if(j > count) count = j 
    }
  }
  return count;
}
