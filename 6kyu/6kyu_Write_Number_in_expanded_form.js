/*
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.


*/
/* Plan
- take num and turn into a string 
- split into and array 
- note length of array 
- loop through array 
- turn item into int 
- if int greater than zero 
- expanded form - item + 0 repeated (length of arr - index - 1) times 
- push to new arr 
- join arr with + and space as delimiter 
*/


function expandedForm(num) {

  let expandedFormArr = []; 
  
  let numStr = num.toString(); 
  let numArr = numStr.split(''); 
  const l = numArr.length; 
  
  numArr.forEach((item, index) => {
    let numItem = Number(item); 
    if (numItem > 0){
      let digit = item + '0'.repeat(l - index - 1); 
      expandedFormArr.push(digit); 
    }
  })
 
  let eForm = expandedFormArr.join(' + ');
  
  return eForm ; 
}
