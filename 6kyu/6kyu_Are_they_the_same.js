/*
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, 
with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, 
regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, 
and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks
a or b might be [] or {} (all languages except R, Shell).
a or b might be nil or null or None or nothing (except in C++, COBOL, 
Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.
*/


function comp(array1, array2){
  // if any of input arr are empty return false
  if (array1 === null || array2 === null) return false ; 
  
  // create key obj for non square values arr (arr1) & square values arr (arr2)
  let key1 = {}; 
  let key2 = {};
  // loop through arr1 
   // if item exists in key obj add 1 to value else create prop with value 1
  array1.forEach((num) => key1[num] ? key1[num]++ : key1[num] = 1);
  console.log('key1', key1); 
  // repeat for arr2 
  array2.forEach((num) => key2[num] ? key2[num]++ : key2[num] = 1);
   console.log('key2', key2);
  // loop through keyobj1 
  for (let prop in key1){
     // if the value of the current prop is not equal to the value of the key squared in keyobj2 return false
    
   if (key1[prop] !== key2[prop**2]) return false 
  }
 
   return true 
}
