/*
Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
Note: the subarrays should be filled with 1s
*/

export function pyramid(n: number) : Array<Array<Number>> {
  let returnArr : number[][] = []
  if (n==0) return returnArr
  const subArr = (num : number) : number[] => {
    let numArr : number[] = "1".repeat(num).split("")
    .map(x => parseInt(x))
    return numArr
  }
  for(let i=1; i<n+1; i++){
    returnArr.push(subArr(i)); 
  }
    return returnArr;
}
