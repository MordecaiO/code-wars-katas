/*
A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base.
In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. 
This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
*/
// sum of each digit raised to the power of how many digits there are = the number
/* Plan
- take value change into string then split into array
- length of array equals the #digits
- create sum var 
- loop through array 
- turn each item into int then square and add to sum 
- return true if sum strict equals value false if not
*/

function narcissistic(value) {
  
  let sum = 0; 
  let arrValue = value.toString().split(''); 
  console.log('arrValue', arrValue); 
  
  let numDigits = arrValue.length;
  console.log('numDigits', numDigits); 
  
  arrValue.forEach((digit) => {
    sum += Math.pow(Number(digit), numDigits);
    console.log('sum', sum); 
  })
  
  return value === sum ? true : false ; 
