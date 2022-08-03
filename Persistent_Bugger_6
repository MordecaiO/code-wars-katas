/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/ 

// turn num to string then split 
// turn back into int then multiply 
// add one to counter
// if product <= 10 close loop 
// else reassign product to starting var 


function persistence(num) {
   let varNum = num; 
   let counter = 0;
  while(varNum >= 10){
  
  let varNumArr = varNum.toString().split(''); 
  console.log( 'varNumArr',varNumArr);
  
  let sum = 1; 
  varNumArr.forEach((el) => {
    sum = sum * parseInt(el);
    console.log('sum', sum);
  });
    counter++;
    console.log('counter', counter);
     varNum = sum ; 
  }
  return counter;
}
