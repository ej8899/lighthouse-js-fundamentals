//
// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
// human readable time

// example: strictEqual(humanReadable(86399), '23:59:59', 'humanReadable(86399)');

console.log(humanReadable(86399));
console.log(humanReadable(3600));

function humanReadable (seconds) {
  let finalTime='';

  if(seconds>3599)  // we have hours available
  {
    let hours=Math.floor(seconds/3600);
    if(hours<10) { finalTime+='0';}
    finalTime+=hours+':';
    seconds=seconds-(hours*3600);
  }
  else{
    finalTime='00:';
  }

  if(seconds>59) // we have full minutes available
  {
    let minutes=Math.floor(seconds/60);
    if(minutes<10) { finalTime+='0';}
    finalTime+=minutes+':';
    seconds=seconds-(minutes*60);
  }
  else{
    finalTime+='00:';
  }

  if(seconds<10){ finalTime+='0';}
  finalTime+=seconds;

  return finalTime;
}