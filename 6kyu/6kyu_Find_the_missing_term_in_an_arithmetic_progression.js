/*An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. 
You are provided with consecutive elements of an Arithmetic Progression. 
There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. 
The rest of the given series is the same as the original AP. Find the missing term.

You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.

Example
findMissing([1, 3, 5, 9, 11]) == 7
PS: This is a sample question of the facebook engineer challenge on interviewstreet. I found it quite fun to solve on paper using math, derive the algo that way. 
Have fun! */ 

/*
   x1 x2 x3 x4  x5   cd = consdiff 
S = 1  3  5  9  11 
     d1 d2 d3 d4     d1 = x2 - x1, d2 = x3 -x2 .....
     
identify the unique difference, replace with xa + cd (xa < xb)
case of 3 numbers greater diff should be replaced 

*/
var findMissing = function (list) {  
  let num;
  let arrDiffs = [];
  let j=1;
  
  for (let i=0; i<list.length -1; i++){
    let diff = list[j] - list[i];
    arrDiffs.push(diff);
    j++; 
  }
  if (list.length === 3){
    
    if (Math.abs(arrDiffs[0]) > Math.abs(arrDiffs[1])){
      num = list[0] + arrDiffs[1];
    } else {
      num = list[1] + arrDiffs[0];
    }
  } else {
    let diffIndex ;
    arrDiffs.forEach((diff,index,arr)=>{
      if(arr.indexOf(diff) === arr.lastIndexOf(diff)) diffIndex = index ; 
    });
    num = list[diffIndex] + arrDiffs[diffIndex]/2
  }
  return num ;
}

