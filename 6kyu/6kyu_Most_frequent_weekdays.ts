/*
What is your favourite day of the week? Check if it's the most frequent day of the week in the year.

You are given a year as integer (e. g. 2001). You should return the most frequent day(s) of the week in that year. The result has to be a list of days sorted by the order of days in week (e. g. ['Monday', 'Tuesday'], ['Saturday', 'Sunday'], ['Monday', 'Sunday']). Week starts with Monday.

Input: Year as an int.

Output: The list of most frequent days sorted by the order of days in week (from Monday to Sunday).

Preconditions:

Week starts on Monday.
Year is between 1583 and 4000.
Calendar is Gregorian.
Examples (input -> output):
* 2427 -> ['Friday']
* 2185 -> ['Saturday']
* 2860 -> ['Thursday', 'Friday']
*/

/*
For every common year DoW start day of the year increases by 1 day, for every leap year DoW increases by 2 days
Calculate DoW year begins on , determine whether a leap year or not and calculate how many times days are included in cycle of 52 or 53 weeks 
*/


    export function mostFrequentDays(year: number): string[] {
  const dayKeyObj : {[index:number]:string} = {
    0:"Sunday",
    1:"Monday",
    2:"Tuesday",
    3:"Wednesday", 
    4:"Thursday", 
    5:"Friday", 
    6:"Saturday"
  };
  const isLeapYear = (yearAsInt: number): boolean => {
   return ( (yearAsInt % 4 == 0 && yearAsInt % 100 != 0) || yearAsInt % 400 == 0)
    }
  let date : Date = new Date(`${year}-01-01`)
  let doW : number = date.getDay()
   let daysExtra : number = 1;  
   let daysArr : number[] = []
  if(isLeapYear(year)) {
    daysArr = [doW, doW + 1]
    if(daysArr[0] == 6) daysArr[1] = 0
    if(daysArr[0] == 0){
      [daysArr[0], daysArr[1]] = [daysArr[1], daysArr[0]]
    }
  } else {
    daysArr = [doW]
  }
  let returnArr : string[] = daysArr.map((num)=>{
    return dayKeyObj[num]
  })
  return returnArr
}

