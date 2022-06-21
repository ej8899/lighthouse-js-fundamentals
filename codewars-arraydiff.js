
// console.log(arrayDiff([1,2],[1])); // 2
// console.log(arrayDiff([1,2,2,2,3],[2])); // [1,3]

// console.log(arrayDiff([1,2], [1]));  // [2], "a was [1,2], b was [1]");
// console.log(arrayDiff([1,2,2], [1])); // [2,2], "a was [1,2,2], b was [1]");
// console.log(arrayDiff([1,2,2], [2])); // [1], "a was [1,2,2], b was [2]");


// console.log(arrayDiff([1,2,2], [])); // [1,2,2], "a was [1,2,2], b was []");
// console.log(arrayDiff([], [1,2])); // [], "a was [], b was [1,2]");

// console.log(arrayDiff([1,2,3], [1,2])); // [3], "a was [1,2,3], b was [1,2]")
    
// loop thru each array - create a new list, but OMIT items matching in both lists - keep array order


function arrayDiff(sourceOne,sourceTwo)
{
  newArr=[];
  let matchItem=0;

  // error check for empty sources
  if(sourceOne.length === 0) { return newArr; }
  if(sourceTwo.length === 0) { return sourceOne; }

  for (dataOne of sourceOne)
  {
    for (dataTwo of sourceTwo)
    {
      if(dataOne === dataTwo)
      {
        // data match so we'll need to skip - who cares if there is more in sourceTwo at this point
        matchItem = 1;
        console.log('match');
      }
    }
    if (matchItem === 0) 
    { 
      newArr.push(dataOne); 
    }
    else
    {
      matchItem=0;
    }
  }
  return(newArr);
}