/*
In the morning all the doors in the school are closed. The school is quite big: there are N doors. 
Then pupils start coming. It might be hard to believe, but all of them want to study! Also, there are exactly N children studying in this school, and they come one by one.

When these strange children pass by some doors they change their status (i.e. Open -> Closed, Closed -> Open). 
Each student has their number, and each i-th student alters the status of every i-th door. 
\For example: when the first child comes to the schools, he changes every first door (he opens all of them). 
The second one changes the status of every second door (he closes some doors: the 2nd, the 4th and so on). 
Finally, when the last one – the n-th – comes to the school, he changes the status of each n-th door (there's only one such door, though).

You need to count how many doors are left opened after all the students have come.

Example:
*/

export const doors = (n: number): number => {
  const pupils = new Array(n).fill(null).map((_,i) => i+1)
  let changedDoors : boolean[] = [...Array(n)].map(x => false)
  const divisors = (n:number):number => {
    if(n == 1) return 1
    let count = 0; 
    for(let i=0; i<n; i++){
      if(n%i == 0) count++
    }
    return count
  }
  console.log("divisors test",divisors(6))
  changedDoors.map((door,i) => {
    console.log("divisors",divisors(i+1))
    if(divisors(i+1) % 2 == 0){
      return door
    } else {
      return !door
    }
  })
  let openDoors : number = changedDoors.filter(door => door).length
  return openDoors
}
