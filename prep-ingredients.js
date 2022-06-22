const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let x=7;
while(x>-1)
{
  console.log(ingredients[x]);
  x--;
}



// Write a for loop that prints out the contents of ingredients:
console.log('\n');
for(let x=0;x <ingredients.length; x++)
{
  console.log(ingredients[x]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log('\n');
for (item of ingredients)
{
  console.log(item);
}

