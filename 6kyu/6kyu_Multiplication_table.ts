/*
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/

export function multiplicationTable (size: number): number[][] {
  let table : number[][] = []
  for(let i=0; i<size; i++){
    let row = new Array(size).fill(1)
    for(let k=0; k<size; k++){
      row[k] = (i+1)*(k+1)
    }
    table.push(row)
  }
  return table
}
