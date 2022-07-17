//
// prep-loopylighthouse2.js
// 2022-06-04
// https://flex-web.compass.lighthouselabs.ca/activities/72
//
// also see https://en.wikipedia.org/wiki/Fizz_buzz  "Fizz Buzz"
// for info on this - as/LHL student Matt Davis for advising on this
//

/*
Wrap the code you've written in a function called loopyLighthouse(range, multiples, words) that you call with 3 parameters.

range should be an array of 2 numbers representing the start and end values for the loop.
multiples should be an array of 2 numbers representing the multiples you want to replace with words.
words should be an array of 2 strings representing the words that will replace the multiples.
For example, say we called the function with the following arguments.

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
The loopyLighthouse function should log to the console all the numbers from 15 to 90, 
except replacing multiples of 2 with "Batty", multiples of 5 with "Beacon", 
and multiples of 2 and 5 with "BattyBeacon".
*/

// loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
loopyLighthouse([1, 100], [3, 5], ["Fizz", "Buzz"]);

function loopyLighthouse(range,multiples,words) {
  let y = "";
  for (let x = range[0]; x <= range[1]; x++){
    y = x % multiples[0] === 0 ? x % multiples[1] === 0 ? words[0]+words[1] : words[0] : x % multiples[1] === 0 ? words[1] : x;
    console.log(y);
  }
}
// extra knowledge on ternary:
// https://www.codingem.com/javascript-if-else-on-one-line/


/*
function loopyLighthouse(range, multiples, words)
{
  // ERROR CHECKING
  // TO BE ADDED IF REQUIRED

  for (let i = range[0]; i <= range[1]; i++) {
    // console.log(i);  // DEBUG
    if((!(i % multiples[0])) && (!(i % multiples[1]))) {
      console.log(words[0] + words[1]);
    } else if(!(i % multiples[0])) {
      console.log(words[0]);
    } else if(!(i % multiples[1])) {
      console.log(words[1]);
    } else {
      console.log(i);
    }
  }
}
*/