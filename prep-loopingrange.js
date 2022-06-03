//
// prep-loopingRange
//

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

// console.log(range(2,12)); // for error checking debug

function range(rStart,rEnd,rSkip)
{
  let retArray = [];

  // error checking
  if(rStart >= rEnd ){
    return(retArray);
  }
  if(rSkip <= 0 ){
    return(retArray);
  }
  if(rStart === undefined || rEnd === undefined || rSkip === undefined){
    return(retArray);
  }


  for (let i = rStart; i <= rEnd; i += rSkip)
  {
    retArray.push(i);
  }
  return (retArray);
}