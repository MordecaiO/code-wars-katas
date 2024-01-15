/*
I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that, when given a number n (n >= 1 ), returns the nth number in the Fibonacci Sequence.

For example:

   nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

*/
export function nthFibo(n: number): number {
 const k = n-1
 let bigPhi = (1+Math.sqrt(5))/2
 let smallPhi = (1-Math.sqrt(5))/2
 let fibN = (Math.pow(bigPhi,k) - Math.pow(smallPhi,k)) / Math.sqrt(5)
 console.log("fibN", fibN)
 return Math.round(fibN)
}
