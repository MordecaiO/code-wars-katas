/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array.
If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

// find largest sum of numbers in list that are also next to each other
// I need to check all possible valid sums in array  
/* Plan
- create a var which holds current contiguous subsequence which largest sum 
- define function 
- given an array of integers 
- returns sum of integers (reduce method)
- define function 
- given array and index of number 
- returns contiguous sub with largest sum involving number at given index 
- loop through array 
- if current sum is larger than prev sum set var to current 
- return var
*/


var maxSequence = function(arr){
  if(arr.length === 0 || !arr.some(x => x > 0)){ // no pos num or no values return 0
    return 0
  } 
  
  let largestSum = null; 
  
  let sum = (seq) => {
    if(seq.length > 0){
      return seq.reduce((a,b) => a+b); 
    } else return null
  }
  
  let findMaxSubArr = (array, index) => {
    let currentSum = null; 
    let maxSeqStart = null; 
    let maxSeqEnd = null; 
    
    array.forEach((num, i, a) => {
      let sequence = array.slice(index, i); 
      if (i === 0){
        maxSeqStart = index; 
        maxSeqEnd = i;
        currentSum = sum(array.slice(index)) // initially set current sum to sum of whole array
      } else {
        if(sum(sequence) > currentSum || currentSum === null){
          currentSum = sum(sequence); 
          maxSeqEnd = i; 
        }
      }
    }) 
   // return array.slice(maxSeqStart, maxSeqEnd + 1); // return the sub sequence with largest sum
    return currentSum; 
  }
  
  arr.forEach((item, j) => { 
    if(j === 0){
      largestSum = findMaxSubArr(arr,0)
    } else {
      if( findMaxSubArr(arr,j) > largestSum){
        largestSum = findMaxSubArr(arr,j); 
      }
    }
  })
  return largestSum;
}
