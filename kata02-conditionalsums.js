//
// kata02-conditionalsums
// 2022-06-04
// https://flex-web.compass.lighthouselabs.ca/activities/98
//

const conditionalSum = function(values, condition) 
{
  //
  // ERROR checking & force a return 0 if missing input
  //
  if(!values[0])  // index 0 of the values array would be 0
  {
    return 0;
  }
  if(!condition) // no condition entered
  {
    return 0;
  }

  let evenSum=0;
  let oddSum=0;
  // PROCEED with looping values
  for (let i = 0; i < values.length; i++)
  {
    //check if the number is even
    if(values[i] % 2 == 0) 
    {
      evenSum += values[i];
    }
    else
    {
      oddSum += values[i];
    }
  }

  if(condition === 'even')
  {
    return evenSum;
  }
  else
  {
    return oddSum;
  }

};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99])); // extra for error checking a missing condition

/*
EXPECTED OUTPUT:
6
9
144
0
0
*/