//
// kata21-numberguesser.js
// 2022-06-05
//

let prompt = require("prompt-sync")();
let theNumber = getRandom(20); 
let theAttempt = 0; 
let answer = '';
let priorAnswers=[];

// code below (replace this example)
// let answer = prompt("Guess a number: ");


console.log('\nSECRET NUMBER REQUIRED:\nby E.Johnson 2022-06-05\n\n');
// console.log('TIP: '+theNumber); // DEBUG for a cheat

while (1) // stay locked in here - endless loop!
{
  let answer = prompt("Take your guess: ");
  answerNum=parseInt(answer);  // prompt input is a string, so convert to int.
  theAttempt++; // we've made an attempt

  // 
  // lets log prior answers, tell user if they've tried this before and remove the attempt count
  //
  for (let i=0; i < priorAnswers.length; i++)
  {
    if(answerNum === priorAnswers[i])
    {
      console.log('\nYou already tried that number!');
      if(theAttempt>1) { theAttempt--; }
    }
  }
  

  //
  // this is the main logic here - check for greater or less than or a match (or an error)
  //
  if(answerNum < theNumber)
  {
    console.log('You should try a higher number next time.\n');
  }
  else if (answerNum > theNumber)
  {
    console.log('Maybe try something a bit lower.\n');
  }
  else if (answerNum === theNumber)
  {
    console.log('\nYou guessed the secret number in '+theAttempt+' attempts!');
    // console.log(priorAnswers) // debug let us see prior answer array
    break;
  }
  else  // ERROR response - must have not entered an actual number to get here!
  {
    console.log('\You should guess a number instead!\n');
    theAttempt--; // remove an attempt so user doesn't feel so bad. 
  }
  
  priorAnswers.push(answerNum); // lets log this attempt for next time
}








//
//  FUNCTION LIST HERE:
//

function getRandom(max) 
{
  return Math.floor(Math.random() * max);
}