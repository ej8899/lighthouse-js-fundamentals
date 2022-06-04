//
// prep-concatarray.js
// https://flex-web.compass.lighthouselabs.ca/activities/73
//

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);


// usage concat(arrayslist)
function concat(arrone,arrtwo)
{
  let newArray = [];
  let i = 0;

  while( i < arrone.length)
  {
    newArray.push(arrone[i]);
    i ++;
  }
  
  i = 0;
  while( i < arrtwo.length)
  {
    newArray.push(arrtwo[i]);
    i ++;
  }
  
  return(newArray);

}