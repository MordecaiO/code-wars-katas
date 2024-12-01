/*

Output
You get a "text" and have to shift the vowels by "n" positions to the right.
(Negative value for n should shift to the left.)
"Position" means the vowel's position if taken as one item in a list of all vowels within the string.
A shift by 1 would mean, that every vowel shifts to the place of the next vowel.

Shifting over the edges of the text should continue at the other edge.

Example:

text = "This is a test!"
n = 1
output = "Thes is i tast!"

text = "This is a test!"
n = 3
output = "This as e tist!"

If text is null or empty return exactly this value.
Vowels are "a,e,i,o,u".
*/

export function vowelShift(text:string|null, n:number):string|null {
  console.log("text", text)
  console.log("n", n)
  const regExp = /[aeiouAEIOU]/g
  if(text){
  const vowelIdxs : number[] = []
  text.split("").forEach((char,index) => {
    if(regExp.test(char)) vowelIdxs.push(index) 
  })
    console.log(vowelIdxs)
    let newVowelIdxs : number[] = []
    const numOfVowels = vowelIdxs.length
      for(let i=0; i<numOfVowels; i++){
        const shiftIdx =  n+i >= numOfVowels || n+1 < 0 ? 
              (n+i) % numOfVowels : n+i
        const newVowelIdx = vowelIdxs[shiftIdx]
        newVowelIdxs.push(newVowelIdx)
      }
    console.log("newVowelIdxs",newVowelIdxs)
    let newTextArr = text.split("");
    for(let i=0; i<numOfVowels; i++){
        const vowelIdx = vowelIdxs[i]
        const vowel = text[vowelIdx]
        const newVowelIdx = newVowelIdxs[i]
        newTextArr[newVowelIdx] = vowel
      }
     text = newTextArr.join("")
    console.log("newText", text)
  } else {
  return text
  }
  
  return text;
}
