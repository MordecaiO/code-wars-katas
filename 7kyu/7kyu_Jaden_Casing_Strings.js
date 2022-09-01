/* 
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). 
Jaden is also known for some of his philosophy that he delivers via Twitter. 
When writing on Twitter, he is known for almost always capitalizing every word. 
For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, 
but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/ 

/* Plan
- take str and split in to array of words 
- loop through array of words 
- capitalise first char of each element (word)
- join array back together and return str
*/



String.prototype.toJadenCase = function () {
  
  let str = this.toString(); 
  let wordsArr = str.split(' ');
  console.log('str', str);
  console.log('wordsArr', wordsArr); 
  
  let capWordsArr = wordsArr.map((word) => {
    
    let firstLetter = word.charAt(0); 
    console.log('firstLetter', firstLetter); 
    
    let restOfWord = word.slice(1); 
    console.log('restOfWord', restOfWord); 
    
    let capitalisedWord = firstLetter.toUpperCase() + restOfWord; 
    console.log('capitalisedWord'. capitalisedWord); 
    
    return capitalisedWord; 
  })
  
  console.log('capWordsArr' ,capWordsArr); 
  
  let rtrStr = capWordsArr.join(' '); 
  console.log('rtrStr', rtrStr); 
  
  return rtrStr; 
};
