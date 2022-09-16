/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/
/*Plan
- create key obj with scores of every letter 
- create score array 
- split input into array of words 
- loop through the array of words 
- for every word 
- loop through chars 
- create score var
- evaluate char with key then add to score 
- push score to score array 

- if there are no scores the same return highest score
- else use index of to find index of first on that appears in input string 
*/

function high(x){
  
  const key =
        {'a':1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,
             u:21,v:22,w:23,x:24,y:25,z:26
             };

  let scores = [];
  
  let wordsArr = x.split(' '); 
  
  wordsArr.forEach((word) => {
    
    let wordScore = 0;
    
    word.split('').forEach((char) => {
     
        wordScore+= key[char];
    })
    console.log('wordScore', wordScore);
    scores.push(wordScore)
    
  })
  
  
  let dups = scores.some( (element, index, array) => {
    if(array.indexOf(element) !== array.lastIndexOf(element)){
      return true; 
    };
  }) 
  
         
  let maxScore = Math.max(...scores);
  let indexMaxScore = scores.indexOf(Math.max(...scores));
  let maxScoreWord = wordsArr[indexMaxScore];
  
  
  return  maxScoreWord
}
