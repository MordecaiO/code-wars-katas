/*
Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".

Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once. 
He also knows that some of the possible handshake combinations may not happen.

However, Johnny would like to know the minimal amount of people that participated this year just by counting all the handshakes.

Help Johnny by writing a function, that takes the amount of handshakes and 
returns the minimal amount of people needed to perform these handshakes (a pair of farmers handshake only once).
*/

export function getParticipants(handshakes: number): number{
  if(handshakes == 0 ) return handshakes
  if(handshakes == 1 ) return 2
  let participants = 0;
  for(let i=1; i<=handshakes; i++){
    let target=0;
    for(let j=i; j>0; j--){
      target+=(j-1)
      if(target>=handshakes) break
    }
    if(target>=handshakes) 
      {
         participants = i
        break
      }
  }
 return participants
  
}
