/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. 
If there are numbers or special characters included in the string, they should be returned as they are. 
Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

*/

/* plan 
- create key using input and output corresponding strings 
- create return arr 
- split message into array 
- loop through array 
- if item is present in input 
- find index of item in input 
- use index to push item in output to return arr
- if item not present in input push item to return array 
- join return array and return 

*/

function rot13(message){
  let ciphered = []; 
  const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
  
  let messageArr = message.split(''); 
 
  messageArr.forEach((letter) =>{
    

    if(input.includes(letter)){
       
       const i = input.indexOf(letter);
    ciphered.push(output[i]); 
       } else {
    ciphered.push(letter); 
  }
  });
  
let decoded =  ciphered.join('');
  
return decoded;
  }
