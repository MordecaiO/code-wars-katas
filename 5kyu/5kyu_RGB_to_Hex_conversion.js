/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. 
Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

// convert rgb decimal values to Hex 
// values done individually 
// (num / 16)toHex + ((num % 16) * 16)toHex (toHex = hex equiv of decimal number)

/* Plan
- create dec to hex key object
- create function which takes in indv rgb dec values returns hex 
- if input not zero 
- take input / 16 round up 
- convert to hex with key obj
- take remainder * 16 
- convert to hex with key object 
- combine values and return as string

- call function on each input param return concat
*/

function rgb(r, g, b){
  
  const hex = {
    0 : '0', 1 : '1', 2 : '2', 3 : '3', 4 : '4',  5 : '5',  6 : '6', 7 : '7', 8 : '8', 9 : '9', 
10 : 'A', 11 : 'B', 12 : 'C', 13 : 'D', 14 : 'E', 15 : 'F'    
}; 
  
  const toHex = (dec) => {
    if (dec > 0 && dec < 256){
      let firstDigit = Math.floor(dec / 16); 
      console.log('firstDigit', firstDigit); 
      
      let secondDigit = (((dec / 16) % 1) * 16); 
      console.log('secondDigit', secondDigit); 
      
      let hexDigits = hex[firstDigit] + hex[secondDigit]
      console.log('hexDigits', hexDigits); 
      
      return hexDigits
      
    } else if (dec > 255){
      return 'FF'
    } else {
      return '00'
    }
  }
  
  console.log('concat',toHex(r) + toHex(g) + toHex(b) )
  return toHex(r) + toHex(g) + toHex(b); 
  
}
