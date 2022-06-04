//
// prep-loopylighthouse.js
// 2022-06-04
// https://flex-web.compass.lighthouselabs.ca/activities/54
//

/*
We will be writing a program that prints the numbers from 100 to 200 to the console, with three exceptions:

If the number is a multiple of 3, print the string "Loopy" instead of the number.
If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
*/



for (let i = 100; i < 201; i ++)
{
  // console.log(i);
  if((!(i % 3)) && (!(i % 4)))
  {
    console.log("LoopyLighthouse");
  }
  else if(!(i % 3))
  {
    console.log("Loopy");
  }
  else if(!(i % 4))
  {
    console.log("Lighthouse");
  }
  else
  {
    console.log(i);
  }

}