/*
Backwards Read Primes are primes that when read backwards in base 10 (from right to left) are a different prime. 
(This rules out primes which are palindromes.)

Examples:
13 17 31 37 71 73 are Backwards Read Primes
13 is such because it's prime and read from right to left writes 31 which is prime too. Same for the others.

Task
Find all Backwards Read Primes between two positive given numbers (both inclusive), 
the second one always being greater than or equal to the first one. 
The resulting array or the resulting string will be ordered following the natural order of the prime numbers.

Examples (in general form):
backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97] backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967] backwardsPrime(501, 599) => []
*/


export function  backwardsPrime(start: number, stop: number): number[] {
  
  const isPrime = (num: number) : boolean => { 
    if(num == 2) return true
    for(let i=2; i<=Math.sqrt(num); i++){
      if(num % i == 0) return false 
    }
    return true 
  } 

  const reversedNum = (num: number) : number =>{
    return num > 9 ? parseInt(num.toString().split("").reverse().join("")) : num
  }
  
  const isPalindrome = (num : number) : boolean => {
    return num == reversedNum(num)
  }
  
  const backwardsPrimes : number[] = []; 
  
  for(let i=start; i<=stop; i++){
    if(isPalindrome(i)) continue
    if(isPrime(i)){
      if(isPrime(reversedNum(i))) backwardsPrimes.push(i)
    } else {
      continue
    }
  }         
  return backwardsPrimes
