// console.log(highAndLow("1 2 3 4 5"));
// console.log(highAndLow("1 2 -3 4 5"));
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

function highAndLow(numbers){
  let b = numbers.split(' ').map(Number);
  b.sort(compareNumbers);

  console.log(b);
  finalOutput=b[b.length-1];
  finalOutput+=' ';
  finalOutput+=b[0];

  return finalOutput;
}

function compareNumbers(a, b)
{
    return a - b;
}

