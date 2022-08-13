/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, 
so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones 
-- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, 
so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) 
and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). 
It will never give you an empty array (that's not a walk, that's standing still!).
*/

// all roads are laid out in a perfect grid. 
// array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
// You always walk only a single block for each letter (direction) 
// takes you one minute to traverse one city block
// return true if the walk the app gives you will take you exactly ten minutes 
// &&  return you to your starting point. Return false otherwise.

// evaluate our string for two cases. journey takes ten mins && journey returns you to the start
// journey takes ten mins
// if on direction takes 1 min the total number of directions must equal 10 
// journey returns you to start 
// imagine x and y axis, to end up back at zero sum of parallel directions must equal 0 
// if there are 3 n's there must be 3 s's

// evaluate the length of arr (must equal 10)
// create counters for each axis (horizontal & vertical)
// loop through the array 
// if element (n then add 1 to vertical// s then minus 1 to vertical) ... same for horizontal
// if the counters both equal zero and lenght of array is 10 return true else return false 
                      


function isValidWalk(walk) {
 
  let verticalCounter = 0; 
  let horizontalCounter = 0; 
  
  walk.forEach((el)=>{
    switch (el) {
        case 'n':
        verticalCounter++;
        break;
        case 's' :
        verticalCounter--;
        break;
        case 'e' :
        horizontalCounter++;
        break;
        case 'w' :
        horizontalCounter--;
        break;
    }
    console.log('verticalCounter',verticalCounter);
    console.log('horizontalCounter',horizontalCounter); 
  })
  return (walk.length === 10) && (verticalCounter === 0 && horizontalCounter === 0) ? true : false ;
}
