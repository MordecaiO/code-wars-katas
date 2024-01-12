/*
Introduction
Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!
Task
You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given.
If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, 
you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.
The Maze array will look like

maze = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]
..with the following key

      0 = Safe place to walk
      1 = Wall
      2 = Start Point
      3 = Finish Point
  direction = {"N","N","N","N","N","E","E","E","E","E"} == "Finish"
  
  Rules
1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.

2. The start and finish positions will change for the final tests.

3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.

4. If you reach the end point before all your moves have gone, you should return Finish.

5. If you hit any walls or go outside the maze border, you should return Dead.

6. If you find yourself still in the maze after using all the moves, you should return Lost.
Good luck, and stay safe!
*/

export function mazeRunner(maze:number[][], directions:string[]): string{
  const start_y : number = maze.findIndex(x => x.includes(2))
  const start_x : number = maze[start_y].findIndex(x => x == 2)
  let coordinates : number[] = [start_y, start_x]
  let returnStr : string = "Lost"
  
  for(let i=0; i<directions.length; i++){
    let dir : string = directions[i]; 
    switch(dir) {
  case "N":
    coordinates[0] -=1 
    break;
  case "S":
   coordinates[0] +=1 
    break;
  case "E":
   coordinates[1] +=1 
    break;      
  case "W":
   coordinates[1] -=1 
    break;     
} 
    console.log("dir",dir)
    console.log("coordinates", coordinates)
    let y : number = coordinates[0]
    let x : number = coordinates[1]
    let status : number = maze[y][x]
    console.log('Status',status)
     if((y >= maze.length-1 ||  y <= 0 ||  x >= maze.length ||  x <= 0) && i !=0 ) {
      returnStr = "Dead"
      break
    }
    if(status == 1){
      returnStr = "Dead"
      break;
    } else if (status == 3){
      returnStr = "Finish" 
      break;   
    }
    
    console.log("returnStr", returnStr)
   
  }
  return returnStr
}
