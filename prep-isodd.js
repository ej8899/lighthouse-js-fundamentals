const isOdd  = function (num) {
  return num % 2 === 1;
}

const tenIsEven = isOdd(10);
const elevenIsEven = isOdd(11);

console.log(tenIsEven);
console.log(elevenIsEven);
console.log(isOdd(12));
console.log(isOdd(97));