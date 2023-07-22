/*Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

At long last, we need a way to unscramble what these pirates are saying.

Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.

For example:

grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
Should return ["sport", "ports"].

Return matches in the same order as in the dictionary. Return an empty array if there are no matches.

Good luck!*/

export function grabscrab(anagram: string, dictionary: string[]): string[] {
  /*
  - count freq of letters in scrambled word + store these values. 
  - check each dic word one by one 
  - for each word 
  - count freq characters and store these values 
  - for each char of the current word 
  - compare the freq values of the current dic word letters to the letters in the scrambled word 
  - create var to represent a succesful match (set inital value to true)
  - if they dont match set var as false and end loop. 
  - if match is true store the current word
  - next word...
  - return store of words 
  
  */
  interface FreqObj {
    [index : string] : number; 
  }; 
  
  let anagramFreq : FreqObj = {}; 
  let matchedWords : string[] = []; 
  
  for (let i=0; i<anagram.length; i++){
    let char : string = anagram[i];
    anagramFreq[char] ? anagramFreq[char] += 1 : anagramFreq[char] = 1; 
  }; // populate anagram letter count 
  
  for(let j=0; j<dictionary.length; j++){
    let dicWordFreq : FreqObj = {}; 
    let currentWord : string = dictionary[j];     
    
    for (let k=0; k<currentWord.length; k++){
    let currentChar : string = currentWord[k];
    dicWordFreq[currentChar] ? dicWordFreq[currentChar] += 1 : dicWordFreq[currentChar] = 1; 
  }; // populate dicword letter count 
    
    let match : boolean = true; 
     for (let l=0; l<currentWord.length; l++){
       let testChar = currentWord[l]; 
       if (dicWordFreq[testChar] !== anagramFreq[testChar] || anagram.length !== currentWord.length ){
         match = false ;
       }  
     }
    
    if (match) matchedWords.push(currentWord); 
  }
  return matchedWords
}            
