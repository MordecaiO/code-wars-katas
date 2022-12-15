
/*
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. 
You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, 
starting with the leftmost digit and skipping any 0s. 
So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). 
The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21
*/


function solution (roman) {
  // create var to store accumulating integer
  let intValue = 0; 
  // create obj with symbol & value pairs
  let key = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000};
  // for each char in string..
  for (let i = 0; i < roman.length; i++){
      // determine value and add to integer
    let numeral = roman[i]; 
    
    let nextNumeral = roman[i + 1] ? roman[i + 1] : "I"
    
    if (key[numeral] >= key[nextNumeral]){
      intValue += key[numeral]; 
    } else {
      intValue -= key[numeral]; 
    }
    
    console.log('numeral', numeral); 
    console.log('intValue', intValue); 
  } 
  // return integer
	return intValue;
}
