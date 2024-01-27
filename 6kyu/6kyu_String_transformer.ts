/*Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.*/

export function stringTransformer(str: string) {
// change chars
  let strArr : string[] = str.split("")
    let transformedStrArr = strArr.map((char)=>{
      if(char == " "){
      return char
    } else if(char == char.toUpperCase()){
      return char.toLowerCase()
    } else if (char == char.toLowerCase()){
      return char.toUpperCase()
    }
  })
    // find all words and whitespaces 
    let returnArr : string[] =[]
    let regEx = /[\w]+|[\s]+/g ;
    let wordMatches : RegExpMatchArray | null = transformedStrArr.join("").match(regEx)
    // list words and spaces in reverse order
  if(wordMatches){
     for(let i=wordMatches.length-1; i>=0; i--){
      returnArr.push(wordMatches[i])
    }
  }
  return str == "" ? "" : returnArr.join("")
}
}
