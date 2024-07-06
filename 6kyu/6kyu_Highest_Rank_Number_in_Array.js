/*
Complete the method which returns the number which is most frequent in the given input array. 
If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

function highestRank(arr){
let countObj = {}
arr.forEach((num)=> countObj[num] ? countObj[num] += 1: countObj[num] = 1)
  let newArr = Object.keys(countObj)
    .map((el) => Number(el))
      .sort((a,b)=> b-a)
  let currLargest = newArr[0] ; 
  newArr.forEach((num) => {
    let numCount = countObj[num]
    let currLargestNumCount = countObj[currLargest]
    if(numCount > currLargestNumCount) currLargest = num 
  })
 return currLargest
}
