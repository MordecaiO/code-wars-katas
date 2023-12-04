
/*
Your task is to add up letters to one letter.

The function will be given a variable amount of arguments, each one being a letter to add.

Notes:
Letters will always be lowercase.
Letters can overflow (see second to last example of the description)
If no letters are given, the function should return 'z'
Examples:
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'
*/

export function addLetters(...letters: string[]) {
  
  if(letters.length < 1) return 'z'
  let total = 0; 
  letters.forEach((char)=>{
    let charVal = char.charCodeAt(0) - 96
    total += charVal 
    if(total > 26) total = total - 26 
  })
  
  const totalChar = String.fromCharCode(total+96)       
  return totalChar
}
