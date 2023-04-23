
/* John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
It can happen that in two distinct families with the same family name two people have the same first name too.*/

/* 
change name from "Fred:Cornwill" -> "(CORNWILL, FRED)" 
order by last name ascending 


*/

function meeting(s) {
    let orderedNames = [];
  // create Obj to store names
    let sArr = s.split(";").map((fullname)=>(fullname.split(":"))); 
    let sArrOfObj = [];
    sArr.forEach((nameArr)=>{
      sArrOfObj.push({firstName: nameArr[0], lastName: nameArr[1]});
    });
  // sort obj first by lastname then firstname
  sArrOfObj.sort((nameA,nameB)=>{
    
    const lastNameA = nameA.lastName.toUpperCase() ;
    const lastNameB = nameB.lastName.toUpperCase() ;
    const firstNameA = nameA.firstName.toUpperCase() ;
    const firstNameB = nameB.firstName.toUpperCase() ;
    
     if (lastNameA < lastNameB)  return -1; 
     if (lastNameA > lastNameB) return 1; 
  // names must be equal
     if (lastNameA === lastNameB){
     return  firstNameA > firstNameB ? 1 : -1
     }   
     return 0;
  });
  // format and store sorted name properties
  sArrOfObj.forEach((name)=>{
    orderedNames.push(`(${name.lastName.toUpperCase()},` +` ${name.firstName.toUpperCase()})`)
  })
  
  return orderedNames.join("");
}
