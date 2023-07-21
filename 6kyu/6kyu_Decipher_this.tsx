
/*You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'*/

export function decipherThis(str: string): string {
  let strArr : string[] = str.split(" "); 
  let cracked : string[] = []; 
  for(let i=0; i<strArr.length; i++){
    let charIndex : number = -1; 
    for(let j=0; j<strArr[i].length; j++){
      let char : string = strArr[i][j]; 
      if(isNaN(Number(char))){
        charIndex = j ; 
        break ; 
      }
    }
    
    let currWord : string = strArr[i]; 
    let currWordArr : string[] = currWord.split(""); 
    let num : string = currWord.slice(0,charIndex); 
    if (charIndex === -1) num = currWord;
    let letter : string = String.fromCharCode(Number(num))
    let newCurrWord : string = "";
    if(charIndex !== -1){
    currWordArr.splice(0, charIndex);
    newCurrWord  = letter + currWordArr.join(""); 
    } else {  newCurrWord  = letter }
    
    
    let switchedNewCurrWord = newCurrWord; 
        
    if(newCurrWord.length > 2){
      let newCurrWordArr : string[] = newCurrWord.split(""); 
      let temp : string = newCurrWordArr[newCurrWordArr.length-1]; // save last letter 
      newCurrWordArr[newCurrWordArr.length-1] = newCurrWordArr[1]; 
      newCurrWordArr[1] = temp; 
      switchedNewCurrWord  = newCurrWordArr.join(""); 
    }
    
     cracked.push(switchedNewCurrWord);
  }
  
  return cracked.join(" "); 
}
