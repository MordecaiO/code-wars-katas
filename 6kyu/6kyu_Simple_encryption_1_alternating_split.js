/*
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S
with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.


*/
/*Plan
- create somewhere to store odd & even numbers
- take number and check each item one by one in order 
- if the item is odd copy to odd store and vice versa 
- once all items are checked 
- add even # store to odd # store 

- take encrypted num 
- find position of num where odd indexed nums end
- copy nums up to this position (odds)
- copy rest of nums (evens) 
- for as many total nums there are 
- if the turn we are on is 0 or even take a num from from of evens 
- if the turn we are on is odd take a num from odds 

*/

function encrypt(text, n) {
  
  if (!text || n === 0 ){
    return text
  }
  
  const encryptFunc = (inputText) => {
    let odds = []; 
  let evens = []; 
  
  inputText.split('').forEach((num, index) => {
    index % 2 === 0 ? evens.push(num) : odds.push(num)
  })
  
  let e = odds.join('') + evens.join('') ;
   /*
  console.log('odds', odds);
  console.log('evens', evens);
   console.log('e', e);
   */
  return e ;
  }
  
  for (let i = 0; i < n; i++){
   text =  encryptFunc(text); 
  }
  
  return text
}

function decrypt(encryptedText, n) {
  
 if (!encryptedText || n === 0  ){
    return encryptedText
  }
  
  const decryptFunct = (inputText) => {
    
  let oddEndIndex = Math.floor(inputText.length / 2)  ; 
  let oddEndItems = [...inputText.slice(0, oddEndIndex)];
  
  let evenStartIndex = oddEndIndex  ; 
  let evenEndItems = [...inputText.slice(evenStartIndex)];

  let d = [];
  
  for (let i =0; i < inputText.length; i++){
    
    if(evenEndItems[i]){
      d.push(evenEndItems[i])
      }
    
     if(oddEndItems[i]){
      d.push(oddEndItems[i])
      }
    
  }
     return d.join("")

  console.log('oddEndIndex',oddEndIndex);
  console.log('encryptedText.length',inputText.length);
  console.log('oddEndItems',oddEndItems);
  console.log('evenEndItems',evenEndItems);
   console.log('d.join("")',d.join(""));

  }
  
  for (let i = 0; i < n; i++){
    encryptedText = decryptFunct(encryptedText)
  } 
  
  return encryptedText
}
