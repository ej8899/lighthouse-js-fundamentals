//
//
// https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript
//

console.log(deleteNth([20,37,20,21,20], 1)); // [20,37,21])


function deleteNth(arr,n){
  let returnArr=[];
  let instanceCounter=0;

  var countsObject = arr.reduce(countDuplicates, {}); // object is initial value : times in array
  //loop thru objects now, anything > n we discard

  return (returnArr);
}

function countDuplicates(obj, num){
  obj[num] = (++obj[num] || 1);
  return obj;
}

