//
// kata09-casemaker.js
// 2022.06.05
// https://flex-web.compass.lighthouselabs.ca/activities/105
//

const camelCase = function(input) 
{
  let finalString=[];
  // any word after a space convert initial to uppercase
  // remove spaces
  // do we loop thru and turn ea word (space delineated) into array item, then convert initial to UpperCase and reassemble?
  
  if(!input) { return "error - no input"; } // basic error checking if input is NULL

  let textArr = input.split(" "); // split into an array on the spaces
  
  // now we have text in array, let's loop thru entire array, convert initial to upper case and build back.
  for (let i = 0; i<textArr.length; i++) // start at 1 as we have dealt with 0 index of array
  {
    textArr[i] = textArr[i].toLowerCase(); // force ALL chars to lower case just in case of mixed case
    if(i > 0) // only upper case initial of words 2 and greater
    {
      let tempWord = textArr[i];
      tempWord=tempWord[0].toUpperCase();  // toupper returns only what was 'done' - in this case a single char, so we need to reassemble
      tempWord+=textArr[i].substring(1); // substring pulls from this index point in the word and on - so we "build back better"
      textArr[i]=tempWord; // messy putting it back into the array - just to use it out of the array next.
    }
    finalString+=textArr[i];
  }

  return(finalString);
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
console.log(camelCase("Supercalifragalisticexpialidocious"));
console.log(camelCase(""));
console.log(camelCase("THIS IS WHAT HAPPENS WHEN CAPS LOCK IS STUCK ON"));

/*
EXPECTED OUTPUT:
thisIsAString
loopyLighthouse
supercalifragalisticexpialidocious
*/
