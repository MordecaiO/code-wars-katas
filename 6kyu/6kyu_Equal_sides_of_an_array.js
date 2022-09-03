/*
You are going to be given an array of integers. 
Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. 
If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, 
the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, 
the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. 
If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.
*/


// Index where sum of all previous items and sum of all following items are equal (N)
// if doesn't exist return -1 
// can be at index 0 
// N is not included in sum calculations

/* Plan
- At each index in the array sum of all prev and following items must be found then compared
- create return var set to -1; 
- Loop through the array 
- find sum of all previous items 
- if index is 0 sum of prev items is 0 
- else extract prev values 
- reduce extracted values to find sum 
- repeat same process for items past N 
- if sums are strict equal set return var to current index 
- return return var
*/

function findEvenIndex(arr)
{
  let returnIndex = -1; 
  
  arr.forEach((element, index, array) => {
    
    let sumPrev = 0; 
    let sumNext = 0; 
    
   // at first index sumPrev is always 0
    if (index !== 0){
      
      // grab all prev values in arr
      let arrPrev = array.slice(0,index); 
      
      // sum all prev values
      let sumArrPrev = arrPrev.reduce((prevVal, currVal) => 
        prevVal + currVal, 0
      );
      
      sumPrev = sumArrPrev; 
    }
    
    // have to slice starting from the next item as start is inclusive
    let arrNext = array.slice(index +1); 
    
    let sumArrNext = arrNext.reduce((prevVal, currVal) => 
        prevVal + currVal, 0
      );
     
    sumNext = sumArrNext; 
     
    // if sums are equal set return index to current index
    if (sumPrev === sumNext){
      returnIndex = index; 
    }
  })
  
  return returnIndex; 
}
