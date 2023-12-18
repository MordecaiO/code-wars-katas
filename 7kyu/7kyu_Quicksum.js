/*
A checksum is an algorithm that scans a packet of data and returns a single number. The idea is that if the packet is changed, 
the checksum will also change, so checksums are often used for detecting transmission errors, validating document contents, 
and in many other situations where it is necessary to detect undesirable changes in data.

For this problem, you will implement a checksum algorithm called Quicksum. A Quicksum packet allows only uppercase letters and spaces. 
It always begins and ends with an uppercase letter.

Otherwise, spaces and uppercase letters can occur in any combination, including consecutive spaces.

A Quicksum is the sum of the products of each character’s position in the packet times the character’s value.
A space has a value of zero, while letters have a value equal to their position in the alphabet.

So, A = 1, B = 2, etc., through Z = 26. Here are example Quicksum calculations for the packets "ACM" and "A C M":
*/
function quicksum(packet){
  if ( packet.match(/[^A-Z\s]/) ) return 0 
  let packetArr = packet.split(""); 
  let sum = 0; 
  for(let i=0; i<=packetArr.length-1; i++){
    let char = packetArr[i]; 
    if(char === " "){
      continue
    } else { 
     let value = (char.toLowerCase().charCodeAt() -96) * (i+1) 
     sum += value 
    }
  }
  return sum 
}
