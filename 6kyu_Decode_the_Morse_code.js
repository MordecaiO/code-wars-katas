/*
In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

For example:

decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.
*/ 

/* Plan
- a single space is used to separate the character codes
- 3 spaces are used to seperate words

- create return array 
- split morseCode param into array of word codes (codes seperated by 3 spaces )
- loop through array of word codes 
- at each word code split the word code into an array of char codes (seperated by a space)
- loop through the char array 
- for each char decode using pre loaded morse dictionary 
- push this decoded char into a temp array 
- at the end of word loop push temp array chars into word array dont forget to join them 
*/ 


decodeMorse = function(morseCode){
 
  let wordsArr = [];
  wordCodesArr = morseCode.split("   "); 

  wordCodesArr.forEach((wordCode, index, arr) => {
    
    let tempCharArr = [];
    let charArr = wordCode.split(' '); 
    
    charArr.forEach((char) => {
      
        tempCharArr.push(MORSE_CODE[char]);
    })
    
    wordsArr.push(tempCharArr.join(''))
  })
  return wordsArr.filter(a => a !== '').join(' ')
}

/* IMPROVEMENTS 
- Could have used trim method to remove whitespace from string at the beggining as opposed to at the end with filter method
- Instead of multiple for loop could have used map method and created a function which uses preloaded dictionary 
*/
