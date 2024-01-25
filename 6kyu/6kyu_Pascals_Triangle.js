/*
DESCRIPTION:
In mathematics, Pascal's triangle is a triangular array of the binomial coefficients expressed with formula

(
�
�
)
=
�
!
�
!
(
�
−
�
)
!
( 
k
n
​
 )= 
k!(n−k)!
n!
​
 
where n denotes a row of the triangle, and k is a position of a term in the row.

Pascal's Triangle

You can read Wikipedia article on Pascal's Triangle for more information.

Task
Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.

Example:
n = 1: [1]
n = 2: [1,  1, 1]
n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]
*/

function pascalsTriangle(n) {
  let triangles = []; 
  
  for(let row=0; row<n; row++){
    
    let rowArr =[]
    for(let col=0; col<=row; col++){
      if (col==0 || col == row){
        rowArr.push(1)
      } else {
        let prevRow = triangles[row-1]
       
        let num = prevRow[col] + prevRow[col-1]
        rowArr.push(num)
      }
    }
    
    triangles.push(rowArr)
   
  }
  return triangles.flat()
}
