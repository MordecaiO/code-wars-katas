/*Write a function

tripledouble(num1,num2)
which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0

Examples
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1*/

/* 
- input is two numbers (integers) (num1,num2)
- output is either 1 or 0 
- output is 1 when a number appears 3times consecutively in num1 and 2 times consecutively in num 
- output is 0 if case above is not met
plan
- I want to test for 3 & 2 consec occurences of the same num 
- instead of checking every single num i could skip ahead
- if the next two numbers are the same then let eval num2
*/ 


function tripledouble(num1, num2) {
  
  let passed = false; 
  let arrNums1 = [];
  let arrNums2 = [];
  // num1 eval
  let num1Arr = num1.toString().split(""); 
  for (let i=0; i<num1Arr.length; i++){
    
    let num = num1Arr[i];
    let numI = num1Arr[i+1];
    let numJ = num1Arr[i+2];
    
    if( num === numI && num === numJ ){
      passed = true ; 
      arrNums1.push(num);
      
    }
   
  }
  
  // num2 eval
  if (num1Arr.length){ 
    
  let num2Arr = num2.toString().split(""); 
  for (let i=0; i<num2Arr.length; i++){
    
    let num = num2Arr[i];
    let numI = num2Arr[i+1];
    if (num === numI) arrNums2.push(num)
  
  }
  }
  
  let numsInBoth = arrNums1.filter(item=> arrNums2.includes(item))
  
return  numsInBoth.length >= 1 ? 1 : 0 
 
}
