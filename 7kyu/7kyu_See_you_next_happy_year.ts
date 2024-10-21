/*
You're saying good-bye your best friend , See you next happy year .

Happy Year is the year with only distinct digits , (e.g) 2018

Task
Given a year, Find The next happy year or The closest year You'll see your best friend
*/
export function nextHappyYear(year: number): number {
  let distinct : boolean = false;
  let counter : number = 1;
  let happyYear : number = 0
  while (distinct == false){
    const left = (year - counter).toString(); 
    const right = (year + counter).toString(); 
    const leftIsUnique = left.split("").every((char, _, array) => array.findIndex(x => x == char) == array.reverse().findIndex(x => x == char))
    const rightIsUnique = right.split("").every((char, _, array) => array.findIndex(x => x == char) == array.reverse().findIndex(x => x == char))
    if(leftIsUnique){
    happyYear = Number(left)  
      distinct = true
    } 
    if(rightIsUnique) {
      happyYear = Number(right)
      distinct = true
    } 
    counter++
  }
  return happyYear
}
