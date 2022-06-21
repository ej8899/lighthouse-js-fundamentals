//
// prep-votingstations
//

const vegetables = [
  
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));



function judgeVegetable(vegetables,metric)
{
  var theWinner = '';
  var theMetric=0;
  
  var theIndex=0; // index point in array for the chosen metric

  for(const vegetable of vegetables)
  {
    if(vegetable[metric]>theMetric)
    {
      theWinner = vegetable.submitter;
      theMetric = vegetable[metric];
    }

  }

  return theWinner;
}
