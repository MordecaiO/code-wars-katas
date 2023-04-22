
/*
You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/


/* 
first letter of each word converted to ASCII & 2nd letter switched with last letter
- take the text then seperate into idv words
- switch 2nd and last letter / 
change first letter to ascii / charCodeAt(index)


*/

var encryptThis = function(text) {
  let encryptedTextArr = [];
  let switchedTextArr = [];
  let textArr=text.split(" "); 
  
  textArr.forEach((word,index,arr)=>{
    if(word.length>1){
       let wordArr=word.split("");
    let temp = wordArr[1];
    wordArr.splice(1,1,arr[index][arr[index].length-1] );
    wordArr.pop();
      wordArr.push(temp);
    switchedTextArr.push(wordArr.join(""));
    } else {
       switchedTextArr.push(word);
    }
  });
  
  switchedTextArr.forEach((word,index)=>{
    let wordArr=word.split("");
    wordArr.splice(0,1, word.charCodeAt(0) + "")
   encryptedTextArr.push(wordArr.join("")) ;
  })
  return encryptedTextArr.join(" ");
}
