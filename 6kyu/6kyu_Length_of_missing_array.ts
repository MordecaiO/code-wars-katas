/*
You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.
*/
export function getLengthOfMissingArray(arrayOfArrays:any[]):number {
  if (arrayOfArrays.length === 0 || arrayOfArrays.some((arr)=> arr.length === 0)) return 0 
  let sortedArrOfArrays : any[] = [...arrayOfArrays].sort((a,b) => a.length - b.length )
  let missingLen : number = 0; 
  for(let i=0; i<arrayOfArrays.length-1; i++){
    let currElLen = sortedArrOfArrays[i].length;
    let nextElLen = sortedArrOfArrays[i+1].length; 
    if(nextElLen != currElLen + 1) missingLen = currElLen + 1 ; 
  }
  return missingLen
}
