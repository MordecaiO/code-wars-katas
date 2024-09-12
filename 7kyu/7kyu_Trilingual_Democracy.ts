/*
Trilingual democracy
Switzerland has four official languages: German, French, Italian, and Romansh.1

When native speakers of one or more of these languages meet, 
they follow certain regulations to choose a language for the group.2 Here are the rules for groups of exactly three3 people:4

When all three are native speakers of the same language, it also becomes their group's language.5a

When two are native speakers of the same language, but the third person speaks a different language, all three will converse in the minority language.5b

When native speakers of three different languages meet, they eschew these three languages and instead use the remaining of the four official languages.5c

The languages are encoded by the letters D for Deutsch, F for Français, I for Italiano, and K for Rumantsch.6

Your task is to write a function that takes a list of three languages and returns the language the group should use.7 8
*/

// input is a string of three chars from the set 'D', 'F', 'I', 'K'
// output is a single char from this set
export function trilingualDemocracy(group: string): string {
 let languages = ["D", "F", "I", "K"]; 
 let groupArr = [...group];
 let missingLan = ""; 
  languages.forEach((lan) => {
    if(!groupArr.includes(lan)) missingLan = lan
  })
 let countObj : {[key:string]: number} = {}; 
groupArr.forEach(lan => countObj[lan] ? countObj[lan] +=1 : countObj[lan] = 1)
  let lanArr = Object.keys(countObj)
  if(lanArr.length == 1){
    return lanArr[0]
  } else if (lanArr.length == 2) {
    lanArr.sort((a,b) => countObj[b] - countObj[a])
    return lanArr[1]
  } else {
    return missingLan
  }
}
