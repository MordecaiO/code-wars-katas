/*
You will be given three reels of different images and told at which index the reels stop. From this information your job is to return the score of the resulted reels.
Rules
1. There are always exactly three reels

2. Each reel has 10 different items.

3. The three reel inputs may be different.

4. The spin array represents the index of where the reels finish.

5. The three spin inputs may be different

6. Three of the same is worth more than two of the same

7. Two of the same plus one "Wild" is double the score.

8. No matching items returns 0.

Returns
Return an integer of the score.
Example
Initialise
reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"]
reel2 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"]
reel3 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"]
spin = [5,5,5]
result = fruit([reel1,reel2,reel3],spin)
Scoring
reel1[5] == "Cherry"
reel2[5] == "Cherry"
reel3[5] == "Cherry"

Cherry + Cherry + Cherry == 50

*/

export function fruit(reels: string[][], spins: number[]): number{
  const scoreKey : {[index:string]: number} = {
          "Jack": 1, "Queen": 2,
           "King": 3,"Bar": 4,
           "Cherry": 5,"Seven": 6,
           "Shell": 7,"Bell": 8, 
           "Star": 9,"Wild": 10, 
        }
  let finalScore : number = 0; 
  const reel1 = reels[0], reel2 = reels[1], reel3 = reels[2]
  const spin1 = spins[0], spin2 = spins[1], spin3 = spins[2] 
  const spinResults = [reel1[spin1], reel2[spin2], reel3[spin3]]
  let countObj : {[index:string]: number} = {}
  spinResults.forEach(result => countObj[result] ? countObj[result] += 1 : countObj[result] = 1)
  let countArr = Object.keys(countObj)
  countArr.sort((a,b) => countObj[b] - countObj[a])
  const containsWild : boolean = countArr.includes("Wild")
  if(countArr.length === 1){
    const onlyFruit = countArr[0]
    finalScore = scoreKey[onlyFruit] * 10
  } else if (countArr.length == 2 && containsWild){
    if(countObj["Wild"] == 2){
      finalScore = scoreKey["Wild"]
    } else {
      const otherFruit = countArr[0]
      finalScore = scoreKey[otherFruit] * 2
    }
  } else if (countArr.length == 2 && !containsWild){
    const otherFruit = countArr[0]
    finalScore = scoreKey[otherFruit]
  }
  return finalScore
}
