/*
We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) 
and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases (input -> output):

1, 10 -> [1, 2, 3, 4, 5, 6, 7, 8, 9]

1, 100 -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range [a, b] the function should output an empty list.

90, 100 --> []
*/

/* Plan
- num = sum of each digit raised to consec power 
- test every num in range except last 
- one by one approach 
- create somewhere to store eureka nums
- if num has less than 2 digits return num 
- else take num and divide into indv digits 
- raise each indv digit to power based on order
- if sum is = to num add to eureka nums 
*/


function sumDigPow(a, b) {
 
  let eureka = []; 
  
  for (let i = a; i < b; i++){
    
    
    if (i < 10){
      eureka.push(i); 
    } else {
      
    let iString = String(i); 
    let iArr = iString.split(''); 
    let sum = 0; 
      
      iArr.forEach((digit, index) => {
      
        sum += Math.pow(digit, index + 1)
        
      })
      
      if (sum === i ){
        eureka.push(i); 
      }
    }
  }
  
  return eureka;
}
