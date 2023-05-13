
/*Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

*/
/* Plan
- replace all lowercase vowels with corresponding number (a=1,e=2,i=3 etc)  
- ignore uppercae vowels 
- replace numbers with corresponding vowel(1=a,2=b,3=c)

- create encode key obj 
- take string and check each item one by one
- if item matches objkey property (directly mutate or add to structure keeping track)
- do the same for decode but with decode key obj
*/


function encode(string) {
  let obj ={"a":1, "e":2, "i":3, "o":4, "u":5}, arr=[]; 
  string.split("").forEach(x => obj[x]? arr.push(obj[x]) : arr.push(x))
  return arr.join("");
} 

function decode(string) {
  let obj ={1:"a", 2:"e", 3:"i", 4:"o", 5:"u"}, arr=[]; 
  string.split("").forEach(x => obj[x]? arr.push(obj[x]) : arr.push(x))
  return arr.join("");
}
