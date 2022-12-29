/*
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]
*/


// Return the output array, and ignore all non-op characters
function parse(data){
  // create var to store num to be parsed 
  let num = 0; 
  // create return arr
  let arr = [];
  // loop through data
  data.split("").forEach((command) => {
    if(command === "i"){ 
    num++;
    } else if (command === "d"){
    num--; 
    } else if (command === "s"){
      num = num**2;
    } else if (command === "o"){
      arr.push(num); 
    }
  })
 
   return arr 
}
