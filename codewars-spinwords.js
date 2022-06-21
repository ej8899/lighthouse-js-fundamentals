// codewars-spinwords.js


/*
Write a function that takes in a string of one or more words, and returns the same string, 
but with all five or more letter words reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. Spaces will be included
only when more than one word is present.

Examples: 
spinWords( "Hey fellow warriors" ) => 
returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
*/


// process convert text input into an array, split on spaces.
// loop thru array items, if item is > 5, randomize output, otheriwse show as normal

console.log(spinWords( "Hey fellow warriors" ));
console.log(spinWords( "This is a test"));
console.log(spinWords( "This is another test "));
console.log(spinWords( " Welcome"));

function spinWords(text)
{
  let newText='';

  const myArray = text.split(" ");
  for (eachWord of myArray)
  {
    if(eachWord.length>4)
    {
      newText=newText+' '+reverseWord(eachWord);
    }
    else
    {
      newText=newText+' '+eachWord;
    }
  }
  return newText.trim();
}

//
// randomizeString(word)
// - returns a randomization of 'word'
//
function reverseWord(word) 
{
  var newWord = '';
  word=word.trim();
  if(!word) { return; } 
  for (let x=word.length-1; x>0; x--)
  {
    newWord += word[x];
  }
  newWord+=word[0];
  return newWord;
}