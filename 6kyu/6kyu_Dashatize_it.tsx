/*Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

Ex:

274 -> '2-7-4'
6815 -> '68-1-5'
*/
export function dashatize(num: number) : string {
  
  const absNum : number = Math.abs(num)
  const absNumStr : string = absNum.toString()
  const numArr = absNumStr.split("")
  
  let dirtyNumArr = numArr.map((num,index,arr) => {
    if(parseInt(num) % 2 === 0) {
      return num
    } else {
      return `-${num}-` 
    }
  })
  
  dirtyNumArr = dirtyNumArr.join("").split("")
  if(dirtyNumArr[0] === "-") dirtyNumArr.shift()
  if(dirtyNumArr[dirtyNumArr.length-1] === "-") dirtyNumArr.pop()
     const dirtyNumStr : string = dirtyNumArr.join("")
        let cleanStr : string = dirtyNumStr.replace(/(--)/g, "-") 
  
  return cleanStr
};
