//
// codewars-squaredigits.js
// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
//


console.log(squareDigits(3212));

function squareDigits(num){
  let finalString='';
  let eachNum=0;
  let input=num.toString();

  // split string
  const myArray = input.split("");

  // square each number and add to finalString
  for (x=0; x<=myArray.length-1; x++){
    eachNum=parseInt(myArray[x]);
    eachNum*=eachNum;
    finalString+=eachNum;
  }

  return parseInt(finalString);
}
