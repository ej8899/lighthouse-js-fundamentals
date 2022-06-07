//
// kata07-intheair.js
// 2022.06.05
// https://flex-web.compass.lighthouselabs.ca/activities/103
//


/* INFO
For this challenge we will implement a function called checkAir(), which will check a collection of air samples. 
The function will take in two arguments. 
The first argument is an array of strings, where each string represents a small air sample that is either clean or dirty. 
The second argument is a number representing the highest acceptable amount of dirty samples. 
For example, a threshold of 0.4 means that there must be less than 40% of total samples classified as 
dirty for our air to be considered clean. Our function must return
 Polluted if there are too many dirty air samples, or 
 Clean if the proportion of dirty samples is below the threshold.
*/

const checkAir = function (samples, threshold) {
  airStatus = 'Clean'; // default to Clean air return
  cleanCount = 0;
  dirtyCount =0;

  // process is loop thru samples array and count clean or dirty totals
  for (let i=0; i < samples.length; i++)
  {
    if (samples[i] === 'clean')
    {
      cleanCount++;
    }
    else // no error checking here - assumption that input is ONLY clean or dirty
    {
      dirtyCount++;
    }
  }
  // console.log('CLEAN: '+cleanCount+' -- DIRTY: '+dirtyCount); // DEBUG
  let airRatio=dirtyCount / cleanCount;
  // console.log ('calc threshold: '+airRatio);  // DEBUG

  if (airRatio > threshold) 
  {
    airStatus = 'Polluted';
  }

  return airStatus;
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))

/*
EXPECTED OUTPUT

Polluted
Polluted
Clean
*/
