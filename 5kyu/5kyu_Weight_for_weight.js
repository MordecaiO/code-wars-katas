/*
My friend John and I are members of the "Fat to Fit Club (FFC)". 
John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". 
It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

"100 180 90 56 65 74 68 86 99"
When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

180 is before 90 since, having the same "weight" (9), it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.
*/
/* Plan
- account for empty string case 
- create function give a num as a str returns the sum of the strings indv digits
- take input string and split into arr of nums as strings 
- create arr to hold orig num as key and sum of digits as value (obj)
- loop through arr of nums 
- create and push obj with key as num & value as sum of indv digits
- sort arr of obj by key first 
- this ensures correct order for nums with same indv digit sum value
- sort arr of obj by value 
- loop through arr and push key into new arr
- join new arr 
*/

function orderWeight(strng) {
    
  let arrNums = strng.split(" "); 
  
  if(!arrNums.length > 0){
    return strng;
  } 
  
  const sumIndvDigits = (numberAsString) => {
    
    let arr = numberAsString.split(""); 
    let numArr = arr.map((number) => {
      return Number(number); 
    }); 
    
    return numArr.reduce((a, b) => a + b, 0);
  } 
  
  let numsAndWeights = []; 
  
  arrNums.forEach((numAsString) => {
    
    numsAndWeights.push( {"number": numAsString ,"weight": sumIndvDigits(numAsString)} )
  });
  
 // sort using UTF first
 numsAndWeights.sort((a, b) => {
  const numberA = a.number 
  const numberB = b.number 
  if (numberA < numberB) {
    return -1;
  }
  if (numberA > numberB) {
    return 1;
  }

  // numbers must be equal
  return 0;
});
 // sort by weight value next
  numsAndWeights.sort((a,b) => a.weight - b.weight)
  
  let orderedNums = []; 
  numsAndWeights.forEach((item) => orderedNums.push(item.number)); 
 
  let orderedStr = orderedNums.join(" "); 
 
  return orderedStr; 
} 

