/*
You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). 
The length of the strings, before and after the colon, are random.

Your job is to return a list of two strings (in the same order as the original list), 
but with the characters after each colon swapped.

Examples
["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]

*/

export function tailSwap(arr: [string,string]): [string,string] {
  let [a, b] = arr
  let headA = a.slice(0, a.indexOf(":"))
  let tailA = a.slice(a.indexOf(":") +1)   
  let headB = b.slice(0, b.indexOf(":"))
  let tailB = b.slice(b.indexOf(":") +1)
  const output :[string,string] = [headA+":"+tailB, headB+":"+tailA]
  return output;
}
