
/*
With a friend we used to play the following game on a chessboard (8, rows, 8 columns). On the first row at the bottom we put numbers:

1/2, 2/3, 3/4, 4/5, 5/6, 6/7, 7/8, 8/9

On row 2 (2nd row from the bottom) we have:

1/3, 2/4, 3/5, 4/6, 5/7, 6/8, 7/9, 8/10

On row 3:

1/4, 2/5, 3/6, 4/7, 5/8, 6/9, 7/10, 8/11

until last row:

1/9, 2/10, 3/11, 4/12, 5/13, 6/14, 7/15, 8/16

When all numbers are on the chessboard each in turn we toss a coin. The one who get "head" wins and the other gives him, in dollars, 
the sum of the numbers on the chessboard. We play for fun, the dollars come from a monopoly game!

Task
How much can I (or my friend) win or loses for each game if the chessboard has n rows and n columns? 
Add all of the fractional values on an n by n sized board and give the answer as a simplified fraction.
*/

export function game(n: number): number[] {
let board: number[][] = [];
  for(let i=1; i<=n; i++){
    let row : number[] = []
    for(let j=1; j<=n; j++){
      row.push(1/(i+j))
    }
    board.push(row)
}
  return [0]
}
