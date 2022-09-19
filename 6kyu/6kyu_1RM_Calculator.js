/*
You just got done with your set at the gym, and you are wondering how much weight you could lift if you did a single repetition. 
Thankfully, a few scholars have devised formulas for this purpose (from Wikipedia) :

Epley
1 RM=w(1+r30)

McGlothin
1 RM=100w / 101.3−2.67123r
 
Lombardi
1 RM=wr0.10
Your function will receive a weight w and a number of repetitions r and must return your projected one repetition maximum. 
Since you are not sure which formula to use and you are feeling confident, your function will return the largest value from the three formulas shown above, 
rounded to the nearest integer. However, if the number of repetitions passed in is 1 (i.e., it is already a one rep max), your function must return w. 
Also, if the number of repetitions passed in is 0 (i.e., no repetitions were completed), your function must return 0.
*/


//cases = reps > 1, reps = 1 & reps = 1 
/*Plan
- if the reps are greater than 1 
- compute w & r using formulas 
- take maximum and return it 
- if reps = 1 
- use computed 1RM to find w 
- return w 
*/


function calculate1RM(w, r){
  
  let oneRepMax = 0; 
  
  let epley = w * (1 + (r/30)); 
  let mcglothin = (100 * w)/(101.3 - (2.67123 * r)); 
  let lombardi = Math.pow( r, 0.10) * w; 
  
  let largestValue = Math.max(Math.round(epley), Math.round(mcglothin), Math.round(lombardi) ); 
  
  
         if (r > 1){
           oneRepMax = largestValue; 
         } else if (r === 1){
           oneRepMax = w; 
         }                                      
  
  return oneRepMax
}
