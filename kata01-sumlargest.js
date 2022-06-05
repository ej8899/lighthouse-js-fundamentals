//
// kata01-sumlargest.js
// 2022-06-04
// https://flex-web.compass.lighthouselabs.ca/activities/97
//

const sumLargestNumbers = function(data) {
  let firstLargest = 0;
  let secondLargest = 0;

  for (let i = 0; i < data.length; i++)  // loop thru and grab the largest #
  {
    if (data[i] > firstLargest)
    {
      firstLargest = data[i];
    }
  }

  for (let i = 0; i < data.length; i++) // loop and grab 2nd largest
  {
    if (data[i] > secondLargest && data[i] < firstLargest) 
    {
      secondLargest = data[i];
    }
  }

  return firstLargest + secondLargest;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));  // 148 is sum here


console.log(sumLargestNumbers([10, 1]));
console.log(sumLargestNumbers([3, 2, 1]));
console.log(sumLargestNumbers([92, 4, 34, 6, 10, 2]));  // 148 is sum here
// expected ,11,,5,,126