/*
Everyone knows passphrases. One can choose passphrases from poems, songs, 
movies names and so on but frequently they can be guessed due to common cultural references.
You can get your passphrases stronger by different means. One is the following:
choose a text in capital letters including or not digits and non alphabetic characters,

shift each letter by a given number but the transformed letter must be a letter (circular shift),
replace each digit by its complement to 9,
keep such as non alphabetic and non digit characters,
downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
reverse the whole result.
Example:
your text: "BORN IN 2015!", shift 1

1 + 2 + 3 -> "CPSO JO 7984!"

4 "CpSo jO 7984!"

5 "!4897 Oj oSpC"
*/
export function playPass(s: string, n: number): string {
  // define alphabet and create copy of input string as array
  let arrAlphabet : Array<string> = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let arrChars : Array<string> = [...s].map((item : string, index: number)=> {
    let isAlphabetic : boolean = /[a-zA-Z]/.test(item)
    let isNumeric : boolean = /[\d]/.test(item)
    let isEvenIndex : boolean = index % 2 == 0 
    if (isAlphabetic){
      let newIndex : number = arrAlphabet.indexOf(item) + n ; 
      if (newIndex > 25) newIndex -= 26
      return isEvenIndex ? arrAlphabet[newIndex].toUpperCase() : arrAlphabet[newIndex].toLowerCase()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    } else if(isNumeric){
      return "" + Math.abs(Number(item) - 9)
    } else {
      return item
    }
  }).reverse()
  return arrChars.join("")
}
