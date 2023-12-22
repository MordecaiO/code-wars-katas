/*
In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite 
but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

Task
Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

The Haskell version takes a list of directions with data Direction = North | East | West | South.
The Clojure version returns nil when the path is reduced to nothing.
The Rust version takes a slice of enum Direction {North, East, West, South}.
See more examples in "Sample Tests:"
Notes
Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. 
"NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
if you want to translate, please ask before translating.
*/

export function dirReduc(arr: string[]): string[] {
 let pair : {[index:string]: string} = {"NORTH": "SOUTH", "SOUTH": "NORTH", "EAST": "WEST", "WEST": "EAST",}
  const reduce = (arr: string[]) : string[] => {
    let reducableEls = arr.filter( dir => arr.includes(pair[dir]) )                                           
    if(reducableEls.length === 0) return arr 
    let start : number = 0 ; 
    
    for(let i=0; i<arr.length-1; i++){
      let curr = arr[i]; 
      let next = arr[i+1];
      if(next === pair[curr]){
         start = i ; 
         break
      } 
      if (i=== arr.length -2) return arr 
    }
    let arrCopy = [...arr]
    arrCopy.splice(start, 2)
    return reduce(arrCopy)
  }
  let reducedArr = reduce(arr)
  return reducedArr
}

  
