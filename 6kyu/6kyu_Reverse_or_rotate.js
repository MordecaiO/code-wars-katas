/*The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz 
(ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2,
reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
Examples:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"
Example of a string rotated to the left by one position:
s = "123456" gives "234561". */

// take str and separate into substr's
  // for loop with two pointers, slice i to j, 
// change substr to num
// determine if sum of cubes of substr nums is divisible by two
// if so reverse sub str if not remove first num and append to the end
// repeat for every substr
// append substr

function revrot(str, sz) {
  if (sz === 0 || sz > str.length) return "";
  
  let strArr= [];
    let i =0;
  let lastIndex;
  for (let j=sz; j<str.length; j+=sz){
    strArr.push(str.slice(i,j));
    lastIndex = j;
    i+=sz;
  }
  let s="";
  strArr.forEach((subStr)=> {
    
    const sumPow = subStr.split("").reduce((total,num)=> parseFloat(total) + Math.pow(parseFloat(num),3),0);
    
    if(sumPow % 2 == 0 ) {
    let reversedSubStr = subStr.split("").reverse().join("");
      s += reversedSubStr;
  } else {
    let char = subStr.slice(0,1);
    subStr = subStr.slice(1);
    let rotated = subStr + char ; 
    s+= rotated;
  }
  })
  return s
  }
