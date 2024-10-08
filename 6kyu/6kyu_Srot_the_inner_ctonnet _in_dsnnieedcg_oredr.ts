/*
You have to sort the inner content of every word of a string in descending order.

The inner content is the content of a word without first and the last char.

Some examples:

"sort the inner content in descending order"  -->  "srot the inner ctonnet in dsnnieedcg oredr"
"wait for me"        -->  "wiat for me"
"this kata is easy"  -->  "tihs ktaa is esay"
Words are made up of lowercase letters.

The string will never be null and will never be empty. In C/C++ the string is always nul-terminated.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
*/

export function sortTheInnerContent(words:string):string
{
  const wordsArr: string[] = words.split(" ")
   let returnStr = wordsArr.map((word) => {
     if(word.length <= 3){
       return word
     } else {
       const firstChar: string = word[0] , lastChar: string = word[word.length-1] ;
       let innerContent : string[] = word.slice(1,word.length-1).split("")
       let sortedInnerContent : string = innerContent.sort().reverse().join("")
       return firstChar+sortedInnerContent+lastChar
     }
   }).join(" ")
  return returnStr;
}
