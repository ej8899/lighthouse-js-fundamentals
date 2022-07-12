


// console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])); // returns[false,1,1,2,1,3,"a",0,0]


function moveZeros(arr) {
  let finalArray=[];
  loopCounter=arr.length;
  for(let x=arr.length-1;x>-1;x--){
    if(arr[x]===0){
      finalArray.push(0);
    }
    else{
      finalArray.unshift(arr[x]);
    }
  }
  return(finalArray);
}

