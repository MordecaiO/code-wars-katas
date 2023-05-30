
/*In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. 
If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, 
we don't know what is after and before and therefore, we don't know if it is a peak or not).

Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] and [1, 2, 2, 2, 2] do not. In case of a plateau-peak, 
please only return the position and value of the beginning of the plateau. For example: 
pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)

Have fun!*/
/* A numerical peak in a seq is when a num is greater than its prev and its next item
- create object which we will return answers in. 
- loop through numbers / if num is greater than prev & next record index (as pos) & value (as peak)
- deal with plateau case, if we cant find any peaks 

*/ 


function pickPeaks(arr){
  let posArr=[], peakArr=[]; 
  
  let i=1, j; 
  while (i<arr.length){
    let curr=arr[i], next=arr[i+1], prev=arr[i-1]; 
    if(curr>prev && next<curr){
      posArr.push(i);
      peakArr.push(arr[i]); 
    } else if(curr>prev && next===curr){
      let j=i; 
      while(arr[j]===curr){
        j++;
      }
       console.log("j",j);
      if(arr[j]<arr[i]){
      posArr.push(i);
      peakArr.push(arr[i]); 
      }
    }
      i++
  }
  return { pos: posArr, peaks: peakArr }
}
