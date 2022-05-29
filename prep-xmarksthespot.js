//
// x-marks the perfect spot
//
// starts at 0,0 on x/y grid - pos is north and east
// should end on -1,4 in array

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));


function finalPosition(movements){
  // console.log(movements);  // debug

  // count array, loop thru it
  let finalTo = [0,0]; // grid variables

  for(let i = 0;i <= movements.length;i++){
    let whereTo = movements[i];
    switch(whereTo){
    case 'north':
      finalTo[1]++;
      break;
    case 'south':
      finalTo[1]--;
      break;
    case 'east':
      finalTo[0]++;
      break;
    case 'west':
      finalTo[0]--;
      break;
    }
  }
  return(finalTo);
}