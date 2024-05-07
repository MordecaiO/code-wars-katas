
/*Given a rational number n

 n >= 0, with denominator strictly positive

as a string (example: "2/3" in Ruby, Python, Clojure, JS, CS, Go)
or as two strings (example: "2" "3" in Haskell, Java, CSharp, C++, Swift, Dart)
or as a rational or decimal number (example: 3/4, 0.67 in R)
or two integers (Fortran)
decompose this number as a sum of rationals with numerators equal to one and without repetitions (2/3 = 1/2 + 1/6 is correct but not 2/3 = 1/3 + 1/3, 1/3 is repeated).

The algorithm must be "greedy", so at each stage the new rational obtained in the decomposition must have a denominator as small as possible. 
In this manner the sum of a few fractions in the decomposition gives a rather good approximation of the rational to decompose.

2/3 = 1/3 + 1/3 doesn't fit because of the repetition but also because the first 1/3 has a denominator bigger than the one in 1/2 in the decomposition 2/3 = 1/2 + 1/6.

Example:
(You can see other examples in "Sample Tests:")

decompose("21/23") or "21" "23" or 21/23 should return 

["1/2", "1/3", "1/13", "1/359", "1/644046"] in Ruby, Python, Clojure, JS, CS, Haskell, Go

"[1/2, 1/3, 1/13, 1/359, 1/644046]" in Java, CSharp, C++, Dart

"1/2,1/3,1/13,1/359,1/644046" in C, Swift, R
Notes
The decomposition of 21/23 as

21/23 = 1/2 + 1/3 + 1/13 + 1/598 + 1/897
is exact but don't fulfill our requirement because 598 is bigger than 359. Same for

21/23 = 1/2 + 1/3 + 1/23 + 1/46 + 1/69 (23 is bigger than 13)
or 
21/23 = 1/2 + 1/3 + 1/15 + 1/110 + 1/253 (15 is bigger than 13).
The rational given to decompose could be greater than one or equal to one, in which case the first "fraction" will be an integer (with an implicit denominator of 1).

If the numerator parses to zero the function "decompose" returns [] (or "",, or "[]").

The number could also be a decimal which can be expressed as a rational.

Example:
0.6 in Ruby, Python, Clojure,JS, CS, Julia, Go

*/

export function decompose(n: string): string[] {
 const testNum = "1/4"; 
  
  const str2Decimal = (str: string) : number =>  {
    let returnVal = 0
    if(str.includes("/")){
    const numbers =  str.split("/").map((x: string) => parseInt(x)); 
    const [numerator, denominator] = numbers
    returnVal = numerator/denominator
    } else {
      returnVal = Number(str)
    }
      return returnVal    
  }
  
  const gcd = (a : number, b : number) : number => {
  if (b < 0.0000001) return a;           

  return gcd(b, Math.floor(a % b));        
};

  const decimal2Str = (dec: number) => {
  const len = dec.toString().length - 2; 
  let denominator = Math.pow(10,len);
  let numerator = dec * denominator
  let divisor = gcd(numerator, denominator)
  numerator /= divisor;                        
  denominator /= divisor;
  
  return Math.floor(numerator) + '/' + Math.floor(denominator)
}


  
  const fibGreedy = (num:number, vals: number[]) => {
    const sum = vals.reduce((acc, currVal) => acc + currVal);
    if(sum == num) return 
    
  }
  
  return []
}
