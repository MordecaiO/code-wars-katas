// create string or object with all of the alphabet 
// create array of numbers 
// turn text into an array 
// loop through array 
// loop through array of alphabet 
// if indexOf == truthy push index into numbers array



function alphabetPosition(text) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphabetArr = alphabet.split("");
  let numbers = [];
  let textArr = text.split(""); 
  
  textArr.forEach((el, i, arr) => {
  alphabetArr.forEach((letter) => {
if (el.toLowerCase() === letter){
let iL = alphabetArr.indexOf(letter) + 1;
  numbers.push(iL); 
}
})
})
  
  
  return numbers.join(" ");
}
