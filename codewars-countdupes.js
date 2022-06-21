//
// codewars-countdupes.js
//

/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters 
and numeric digits that occur more than once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice


** NOTE - this is JUST a counter, we don't have to collect the duplicates.

*/

console.log(duplicateCount('abcde'));
console.log(duplicateCount('aabbcde'));
console.log(duplicateCount('aabBcde'));
console.log(duplicateCount('indivisibility'));
console.log(duplicateCount('Indivisibilities'));
console.log(duplicateCount('aA11'));
console.log(duplicateCount('ABBA'));

function duplicateCount(text)
{
  let dupeArray={};
  let newKey='';

  text=text.toLowerCase();

  // this is just nested loop for string length in each
  for (let x=0; x<text.length; x++)
  {
    for (let y=x; y<text.length; y++)
    {
      if(text[x] === text[y+1])
      {
        // we have a duplicate found here - how to count it? push into an object
        newKey=text[x];
        dupeArray[newKey]=0;

      }
    }
  
  }
  
  // count item sin our dupe object
  var count = 0;
  for (var k in dupeArray) if (dupeArray.hasOwnProperty(k)) ++count;

  return count;
}