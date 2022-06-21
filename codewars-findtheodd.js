/*

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

const isOdd  = function (num) {
  return num % 2 === 1;
}




console.log(findOdd([1,1,2]));

//
// pass an array - return the item is an ODD count in the array
//
function findOdd(A) 
{
  let foundOdd=0;
  let oddObject={};
  let newKey=0;
  
  // loop thru array put each item into object, increase the count of the item if it's in there more than once
  for(let x=0; x<A.length; x++)
  {
    newKey=A[x];
    if(oddObject[newKey] === 1)
    {
      oddObject[newKey]+=1;
    }
    else{
      oddObject[newKey]=1;
    }
  }


  // loop thru object to see what items have an odd count, return the first one
  let z=0;
  for (var k in oddObject)
  {
    z=oddObject[k];
    if(isOdd(z))
    {
      return (parseInt(k));
    }
  }



  return 0;
}

