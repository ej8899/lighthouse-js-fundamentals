//
// kata06-smartparking.js
// 2022-07-08
// https://flex-web.compass.lighthouselabs.ca/activities/102
//

/*
expected output:
[4, 0]
false
[3, 1]
*/



//
// return grid coordinates in array, or false if not spots found
// UPPER case means open spot, LOWER means taken
// r = regular cars, r or s for small cars, r,s or m for motorcycles
//  usage: (parking array,vehicle type as string (small,motorcycle,regular))
//
// BONUS - add 'flags' to put first open spot, last open spot, or random spot
// flags will be 'first','random','last'(last spot)
//
const whereCanIPark = function (spots, vehicle,flags) 
{
  let foundSpot=[];
  let foundSpots=[]; // this will build array of located spots for our other flags
    // error check
  if (!spots || !vehicle)
  {
    return('error - missing input');
  }

  // expect a 2D array (rows & colums)
  for(let y=0; y < spots.length; y++) // loop the Y axis
  {
    for(let x=0; x< spots[y].length; x++) // loop the X axis
    {
      // find spots
      if(vehicle === 'motorcycle' && (spots[y][x]==='M' || spots[y][x]==='S' || spots[y][x]==='R'))
      {
        foundSpot=[x,y];
        foundSpots.push(foundSpot);
      }
      if(vehicle === 'small' && (spots[y][x]==='S' || spots[y][x]==='R'))
      {
        foundSpot=[x,y];
        foundSpots.push(foundSpot);
      }
      if(vehicle === 'regular' && spots[y][x]==='R')
      {
        foundSpot=[x,y];
        foundSpots.push(foundSpot);
      }
    }
    // console.log(foundSpots); // DEBUG
  }



  //
  // parse our spot selector switch and return
  //
  // console.log(foundSpots); // debug
  let theSpot=[];
  if(!foundSpots.length)
  {
      return false;
  }
  if(!flags || flags==='first') // return first spot available if requested, or if no specific item selected
  {
    return(foundSpots[0]);
  }
  if(flags==='last')
  {
    let x=foundSpots.length-1;
    return(foundSpots[x]);
  }
  if(flags==='random')
  {
    let x=getRandom(foundSpots.length-1);
    return(foundSpots[x]);
  }

  return theSpot;
};

// console.log(whereCanIPark()); // for the error checking routine

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

// test motorcycle
// console.log('first motorcycle spot');
console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))

// console.log('last motorcycle spot');
console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle','last'
))

// test RANDOM available spot
// console.log('random motorcycle spot');
console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle','random'
))










function getRandom(max) 
{
  return Math.floor(Math.random() * max);
}