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
  // all coordinates must be unique / (x,y) 
  let currPosition : {x:number, y:number} = {x:0, y:0}
  let journeyArr : number[][] = []; 
   console.log("arr",arr)
  // map journey steps 
  arr.forEach((dir)=>{
   if(dir === "NORTH"){
     currPosition.y += 1; 
   } else if(dir === "SOUTH"){
     currPosition.y += -1;
   } else if(dir === "EAST"){
     currPosition.x += 1;
   } else {
     currPosition.x += -1;
   }
    journeyArr.push([currPosition.x, currPosition.y])
  })
  
  
  return [""]
}
  
