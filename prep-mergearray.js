//
// prep-mergearrays.js
// 2022-06-04
// https://flex-web.compass.lighthouselabs.ca/activities/74
//


// concat function from:
// prep-concatarray.js
// https://flex-web.compass.lighthouselabs.ca/activities/73
//



console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);

function merge(arrone,arrtwo)
{
  let newarr = concat(arrone,arrtwo);
  newarr.sort();
  return newarr;
}


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