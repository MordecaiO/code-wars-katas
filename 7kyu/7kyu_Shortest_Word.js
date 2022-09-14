/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

/* Plan
- create return var (shortest word) 
- create arr 
- initially set return var to length of first item in array
- loop through arr
- if current item length is < return var
- set return var to current item 
*/


function findShort(s){
  
  let arrWords = s.split(' ');
  console.log('arrWords', arrWords);
  
  let lengthShortestWord = arrWords[0].length;
  
  for(let i = 0; i < arrWords.length ; i++){
    
    console.log('arrWords[i]', arrWords[i]);
    
    if(arrWords[i].length < lengthShortestWord){
      lengthShortestWord = arrWords[i].length;
    }
    console.log('lengthShortestWord', lengthShortestWord);
  }
  return lengthShortestWord;
}
