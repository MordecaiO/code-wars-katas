/*On 08/26/2016 (26.08.2016) the German Fussball-Bundesliga (national soccer league) started another new season!

In this kata you get an array with 9 strings, which contain the matches from the first match day.
Every string has this format, where x and y are the number of goals for the teams, if the match has already been played:

x:y [Team 1] - [Team 2]

Example:
6:0 FC Bayern München - Werder Bremen
-:- Eintracht Frankfurt - Schalke 04
The team, which has shot more goals than the other team, wins the match.

Your method should create and return the league table as one string.

Every line in the table follows these rules:

 1. Tableplace with two chars and a dot (" 1.", "12.")
 2. Space
 3. Name of the team/club padded right up to 30 chars (filled up with spaces).
 4. Number of played matches (in this kata always only one digit)
 5. Two spaces
 6. Number of won matches (in this kata always only one digit)
 7. Two spaces
 8. Number of tie matches (in this kata always only one digit)
 9. Two spaces
10. Number of lost matches (in this kata always only one digit)
11. Two spaces
12. Differences of goals (shot vs. gotten)
13. Two spaces
14. Count of points
It is 3 points for a won match and 1 point for a tie.
The table has to be sorted by these criteria:

1. Points
2. If the points are the same: The difference of goals. (2:0 is better than 1:0)
3. If the difference of goals is the same: More goals are better! (2:1 is better than 1:0)
4. Otherwise: The teams share the same place, but ordered by the name of the team (case-insensitive!)!
Example with the two matches above, if the league WOULD only have 4 teams:

 1. FC Bayern München             1  1  0  0  6:0  3 
 2. Eintrach Frankfurt            0  0  0  0  0:0  0
 2. Schalke 04                    0  0  0  0  0:0  0
 4. Werder Bremen                 1  0  0  1  0:6  0
You do not have to do a check for the input values. It will always be an array of 9 strings and all strings will be complete!

*/

export function table(results: string[]): string {
  
  let teamsArr : {team : string, results: number[], gd: number[], p: number}[] = [];
  // create record for each team 
  results.forEach((fixture) => {
     let spaceIdx : number  = fixture.indexOf(" "); 
     let teams = fixture.slice(spaceIdx+1); 
     let indvTeams = teams.split(" - "); 
     const [team1,team2] = indvTeams ; 
     teamsArr.push({team : team1, results: [0,0,0], gd:[0,0] , p: 0}, {team : team2, results: [0,0,0], gd:[0,0] , p: 0});
     
  }
  
  results.forEach((fixture)=>{
     let spaceIdx : number  = fixture.indexOf(" "); 
     let teams = fixture.slice(spaceIdx+1); 
     let indvTeams = teams.split(" - "); 
     let score = fixture.slice(0, spaceIdx).split(":").map(x => parseInt(x)) 
     console.log("score",score);
    if( isNaN(score[0]) ) return ; // 
    const [team1, team2] = indvTeams ;
    const [team1Score, team2Score] = score ; 
    let team1Idx = teamsArr.findIndex(x => x.team == team1); 
    let team2Idx = teamsArr.findIndex(x => x.team == team2); 
    // update results, gd 
     
    if (team1Score > team2Score){
      // add win and loss to teams results record 
      teamsArr[team1Idx].results[0] += 1 
      teamsArr[team2Idx].results[2] += 1 
     
    } else if (team2Score > team1Score){
      // add win and loss to teams results record 
      teamsArr[team1Idx].results[2] += 1 
      teamsArr[team2Idx].results[0] += 1
    } else {
      // add win and loss to teams results record 
      teamsArr[team1Idx].results[1] += 1 
      teamsArr[team2Idx].results[1] += 1
    } 
    
     // add goal difference "gd"
      teamsArr[team1Idx].gd[0] += team1Score;
      teamsArr[team1Idx].gd[1] += team2Score;
      teamsArr[team2Idx].gd[0] += team2Score;
      teamsArr[team2Idx].gd[1] += team1Score;
    
     // update games played "p"
    teamsArr[team1Idx].p += 1;
    teamsArr[team2Idx].p += 1;
  })
  console.log("teamsArr",teamsArr)
  return "";
}


