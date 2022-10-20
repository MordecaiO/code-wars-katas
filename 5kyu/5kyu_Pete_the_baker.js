/*
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out,
how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). 
For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
Ingredients that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 
*/

/* Plan 
- first check if we have all the availible ingredients
- extract both object keys into seperate arrays 
- loop through recipe arr and check if each item is present in availible array
- if any item is not present return 0
- loop through the recipe object 
- divide availible obj prop value by recipe obj prop value (availible divided by recipe)
- round down value 
- push to an array 
- find min value in the array 
*/


function cakes(recipe, available) {
  
  let servings = null; 
  let recipeArr = Object.keys(recipe); 
  let availableArr = Object.keys(available); 
 
  recipeArr.forEach((item) => {
    if(!availableArr.includes(item)){
      servings = 0; 
    }
  });
  if (servings === 0){
    return servings
  } else {
     let servingsArr = [];
  
  for (const item in recipe){
    let exactServings = available[item] / recipe[item]; 
    let actualServings = Math.floor(exactServings); 
   
    servingsArr.push(actualServings); 
  }
  
  servings = Math.min(...servingsArr); 
  return servings
  }
 
}
