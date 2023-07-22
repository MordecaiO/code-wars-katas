/*
The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. 
It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 

Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:
alternative text
Hint:
See Fibonacci sequence

Ref:
http://oeis.org/A000045

The function perimeter has for parameter n where n + 1 is the number of squares 
(they are numbered from 0 to n) and returns the total perimeter of all the squares.

perimeter(5)  should return 80
perimeter(7)  should return 216*/

export const perimeter = (n:number):number => {
  // your code
  
  let arr : number[] = [1,1]; 
  let count : number = arr.length; 
  let x1 : number = 1; 
  let x2: number = 0; 
  while (count < n+1){
    arr.push(arr[x1] + arr[x2]); 
    count = arr.length; 
    x1++;
    x2++; 
  }
  
 let sum : number = arr.reduce((acc, curr) => ( acc + curr  ));
                                                      
  return sum * 4
}
