/*
For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]: [string, number]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
*/
export function longestRepetition (text: string): [string, number] {
  let matchesArr = text.match(/([a-z0-9])\1*/g)
  let greatestLength : [string, number] = ["", 0]
  if (!matchesArr) return greatestLength 
  matchesArr.forEach((charGroup)=>{
    if(charGroup.length > greatestLength[1]) greatestLength = [charGroup[0], charGroup.length]; 
  })
  return greatestLength
}
