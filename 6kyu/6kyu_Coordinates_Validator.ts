/*
You need to create a function that will validate if given parameters are valid geographical coordinates.

Valid coordinates look like the following: "23.32353342, -32.543534534". The return value should be either true or false.

Latitude (which is first float) can be between 0 and 90, positive or negative. Longitude (which is second float) can be between 0 and 180, positive or negative.

Coordinates can only contain digits, or one of the following symbols (including space after comma) __ -, . __

There should be no space between the minus "-" sign and the digit after it.

Here are some valid coordinates:

-23, 25
24.53525235, 23.45235
04, -23.234235
43.91343345, 143
4, -3
And some invalid ones:

23.234, - 23.4234
2342.43536, 34.324236
N23.43345, E32.6457
99.234, 12.324
6.325624, 43.34345.345
0, 1,2
0.342q0832, 1.2324

*/

// BRUTE FORCE 

let coArr = coordinates.split(",")
   if(coArr.length > 2) return false
   let [lat, long] = coArr 
   if(!parseInt(lat) || !parseInt(long)) return false
   if(parseInt(lat) > 90 || parseInt(lat) < -90) return false
   if(parseInt(long) > 180 || parseInt(long) < -180) return false
   if(lat.indexOf("-") != lat.lastIndexOf("-")) return false 
   if(long.indexOf("-") != long.lastIndexOf("-")) return false 
    if(long.indexOf("-") != 1 && long.indexOf("-") != -1) return false 
   if(lat.match(/[a-zA-z]/g) || long.match(/[a-zA-z]/g)) return false
   if(lat.match(/[a-zA-z]/g) || long.match(/[a-zA-z]/g)) return false
   let commas = 0, dashes = 0, underscores = 0, fullstops = 0
    for(let i = 0; i<=coordinates.length; i++){
      if(coordinates[i] == ",") commas++
      if(coordinates[i] == "-") dashes++ 
      if(coordinates[i] == "_") underscores++ 
      if(coordinates[i] == ".") fullstops++ 
    }
   if(commas>2 || dashes>2 || fullstops > 2 || underscores> 1) return false
  return true; // do your thing!
}
