//
// kata05-percentencoded.js
// 2022-06-09
// https://flex-web.compass.lighthouselabs.ca/activities/101
//

//
// take iput text, strip spaces and return string with %20 encoding
const urlEncode = function(text) 
{
  newText='';

  for (let x=0; x < text.length; x++)
  {
    if(text[x] === ' ') // found a space, lets do something
    {
      if(x > 0 && x < text.length-1) // this will deal with leading & trailing spaces
      {
       newText += '%20';
      }
    }
    else
    {
      newText+=text[x];
    }
  }
  return newText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));