/*
You will be given an array of numbers. 
You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

/* Plan 
- extract odd numbers into new array 
- sort odd numbers into ascending order 
- create counter/iterator var for odd # array
- loop through original array 
- if word is odd 
- replace with current item from odd # array determined by iterator 
- add one to iterator 
*/

function sortArray(array) {
  
 let orderedOddNumbers = array.filter((x) => {return x % 2 !== 0}).sort((a,b) => {return a - b});
  console.log('filteredOddNumbers', orderedOddNumbers);
  
  let k = 0; 
  
  array.forEach((element, index) => {
    if(element % 2 !== 0){
      array[index] = orderedOddNumbers[k]; 
      k++
    }
    console.log('array', array);
  });
  return array; 
}
